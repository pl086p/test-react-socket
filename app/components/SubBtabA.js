import React from 'react';

export default class Bta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            C_LP_T1_01: 10,
            C_LP_T1_02: 20,
            C_LP_T1_03: 30
        };
        console.log('constructor');
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">Power</div>
                    <div className="col-md-8">
                        <input type="text" ref="C_LP_T1_01" name="C_LP_T1_01" value={ this.props.pJSON } />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">AGC</div>
                    <div className="col-md-8">
                        <input type="text" ref="C_LP_T1_02" name="C_LP_T1_02" defaultValue={ this.state.C_LP_T1_02 } />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">Rx Freq</div>
                    <div className="col-md-8">
                        <input type="text" ref="C_LP_T1_03" name="C_LP_T1_03" defaultValue={ this.state.C_LP_T1_03 } />
                    </div>
                </div>
            </div>
        );
    }
}

Bta.propTypes = {
    pJSON: React.PropTypes.number.isRequired
};

