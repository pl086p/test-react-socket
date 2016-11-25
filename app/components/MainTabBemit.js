import React from 'react';
import io from 'socket.io-client';

class MtbEmit extends React.Component {

    constructor() {
        super();
        this.state = {
            showA: true,
            showB: false
        };
        console.log('constructor');
    }
    emitToServer(e) {
        e.preventDefault();

        const socket = io.connect('http://localhost:8085');
        console.log('source-client emit');

        // this client emits to all other clients (via server)
        socket.emit('source-client emit',
            {'C_LP_T1_01': this.refs.C_LP_T1_01.value,
             'C_RP_T3_01': this.refs.C_LP_T1_02.value});
    }
    render() {
        return (
            <div className="container-fluid">
                <p>Socket Emit to Main TB</p>
                <input type="text" ref="C_LP_T1_01" />
                <input type="text" ref="C_LP_T1_02" />
                <button type="button" className="btn btn-primary btn-xs" onClick={this.emitToServer.bind(this)} href="#">Emit to webSocket Server</button>
            </div>
        );
    }
}

export default MtbEmit;
