import React from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://172.16.54.10:8085');

export default class Mtc extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            logs: '',
            prevGEP: '6',
            GEP: '',
            recordStr: '',
            timer: new Date(),
            textareaHeight: 200
        };
        console.log('constructor');
        this._updateInfo = this._updateInfo.bind(this);
    }
    componentDidMount() {
        console.log('comDidMount: ' + this.context.ctxGEP);
        this.timerID = setInterval( () => this.tick(), 1000 );
        // triggered by server emit to all clients
        socket.on('server emit log to all', this._updateInfo);
    }
    componentDidUpdate() {
        console.log('comDidUpdate: ' + this.context.ctxGEP);
        this.scrollTop = this.scrollHeight;
        // ReactDOM.findDOMNode(this).scrollTop = this.state.textareaHeight;
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    _updateInfo(dJSON) {
        // console.log('MainTabCLog/_UpdateInfo(): ' + dJSON.GEP_23.message );
        switch( this.context.ctxGEP )  {
            case '2':
                this.setState( { GEP: dJSON.GEP_02 } );
                break;
            case '6':
                this.setState( { GEP: dJSON.GEP_06 } );
                break;
            case '18':
                this.setState( { GEP: dJSON.GEP_18 } );
                break;
            case '23':
                this.setState( { GEP: dJSON.GEP_23 } );
                break;
            default:
                this.setState( { GEP: dJSON.GEP_23 } );
        }
        console.log('MainTabCLog/_UpdateInfo(): ' + this.state.GEP.message );
        this.setState({ recordStr: 'Timestamp: ' + this.state.timer.toLocaleTimeString() + ', Version: ' + this.state.GEP.Version + ', Level: ' + this.state.GEP.Level + ', message: ' + this.state.GEP.message});
        // empty previous record if GEP is changed
        if ( this.state.prevGEP === this.context.ctxGEP) {
            this.setState({  logs: this.state.logs + '\n' + this.state.recordStr });
        } else {
            this.setState({  logs: this.state.recordStr });
            // this.setState({  logs: this.state.timer.toLocaleTimeString() + '  ' + this.state.GEP.message });
            this.setState({  prevGEP: this.context.ctxGEP });
        }
    }
    tick() {
        this.setState( {timer: new Date()} );
    }

    render() {
        let textareaStyle = {
            width: 600,
            height: 200,
            border: '3px solid #cccccc'
        };
        return (
            <div className="container-fluid">
            { /* <p>component Main TC {this.state.timer.toLocaleTimeString()}</p> */ }
                <textarea style={textareaStyle} value = {this.state.logs} />
            </div>
        );
    }
}

Mtc.contextTypes = {
    ctxGEP: React.PropTypes.string
};

