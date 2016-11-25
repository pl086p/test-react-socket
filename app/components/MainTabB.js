import React from 'react';
import Bta from './SubBtabA';
import Btb from './SubBtabB';
import Btx from './SubBtabX';
import Bty from './SubBtabY';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8085');

export default class Mtb extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showA: true,
            showB: false,
            showX: true,
            showY: false,
            test1: 'default1',
            test2: 'default2',
            test201: false,
            test202: true,
            test3: 'default3',
            test4: 'default4',
            timer: new Date(),
            GEP: '',
            pData: null
        };
        this._updateInfo = this._updateInfo.bind(this);
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.timerID = setInterval( () => this.tick(), 1000 );
        // triggered by server emit to all clients
        socket.on('server emit data to all', this._updateInfo);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    _updateInfo(dJSON) {
        console.log('MTabC/_updateInfo(): ' + dJSON.C_LP_T1_01 + '  ' + dJSON.C_LP_T1_02);
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
        this.setState( {test1: this.state.GEP.C_LP_T1_01 } );
        this.setState( {test2: this.state.GEP.C_LP_T2_01 } );
        this.setState( {test201: this.state.GEP.C_LP_T2_01 } );
        this.setState( {test202: this.state.GEP.C_LP_T2_02 } );
        this.setState( {test3: this.state.GEP.C_RP_T2_11 } );
        this.setState( {test4: this.state.GEP.C_RP_T3_01 } );
        this.setState( {pData: dJSON });
        // this.setState( {test1: pData.C_LP_T1_01 } );
        // this.setState( {test2: pData.C_LP_T1_02 } );
    }
    tick() {
        this.setState( {timer: new Date()} );
    }
    onClick0(e) {
        e.preventDefault();
        this.setState({showA: true});
        this.setState({showB: true});
        console.log('onClick0');
    }

    onClickA(e) {
        e.preventDefault();
        this.setState({showA: true});
        this.setState({showB: false});
    }

    onClickB(e) {
        e.preventDefault();
        this.setState({showA: false});
        this.setState({showB: true});
    }

    onClickX(e) {
        e.preventDefault();
        this.setState({showX: true});
        this.setState({showY: false});
    }

    onClickY(e) {
        e.preventDefault();
        this.setState({showX: false});
        this.setState({showY: true});
    }

    onClickTab(e, tab) {
        e.preventDefault();

        switch(tab) {
            case 'RP_T2':
                this.setState({showX: true});
                this.setState({showY: false});
                break;
            case 'RP_T3':
                this.setState({showX: false});
                this.setState({showY: true});
                break;
            default:
                this.setState({showX: true});
                this.setState({showY: false});
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <p>component Main TB -- {this.state.timer.toLocaleTimeString()}</p>
                {/*
                <p>Test1: <input type="text" ref="C_LP_T1_01" value={this.state.test1 } /></p>
                <p>Test2: <input type="text" ref="C_LP_T1_01" value={this.state.test2 } /></p>
                */}
                <div className="row">
                    <div className="col-md-4">
                        {/* <button type="button" className="btn btn-primary btn-xs" onClick={this.onClick0.bind(this)} href="#">A + B</button> */}
                        <button type="button" className="btn btn-primary btn-xs" onClick={this.onClickA.bind(this)} href="#">Control</button>
                        <button type="button" className="btn btn-primary btn-xs" onClick={this.onClickB.bind(this)} href="#">Status</button>
                    </div>

                    <div className="col-md-4">
                        <button type="button" className="btn btn-primary btn-xs" onClick={this.onClickX.bind(this)} href="#">Hardstand</button>
                        <button type="button" className="btn btn-primary btn-xs" onClick={this.onClickY.bind(this)} href="#">Orderwire/Other</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        {this.state.showA && <Bta pJSON={ this.state.test1 } />}
                        {this.state.showB && <Btb pJSON01={ this.state.test201} pJSON02={ this.state.test202 } />}
                        </div>
                        <div className="col-md-4">
                        {this.state.showX && <Btx pJSON={ this.state.test3 } />}
                        {this.state.showY && <Bty pJSON={ this.state.test4 } />}
                    </div>
                </div>
            </div>
    );
    }
}

Mtb.contextTypes = {
    ctxGEP: React.PropTypes.string
};
