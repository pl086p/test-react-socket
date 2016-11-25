import React from 'react';

export default class Btb extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">Radio On</div>
                    <div className="col-md-1">
                        <input type="radio" id="C-LP-T2-01" checked={ this.props.pJSON01 } />
                    </div>
                    <div className="col-md-4">HPA On</div>
                    <div className="col-md-1">
                        <input type="radio" id="C-LP-T2-02" checked={ this.props.pJSON02 } />
                    </div>
                </div>

                 <div className="row">
                    <div className="col-md-4">Over Temp</div>
                    <div className="col-md-1">
                        <input type="radio" id="C-LP-T2-03" />
                    </div>
                    <div className="col-md-4">Input Pwr</div>
                    <div className="col-md-1">
                        <input type="radio" id="C-LP-T2-04" />
                    </div>
                 </div>

                 <div className="row">
                    <div className="col-md-4">AIP PS</div>
                    <div className="col-md-1">
                        <input type="radio" id="C-LP-T2-05" />
                    </div>
                    <div className="col-md-4">HPA PS</div>
                    <div className="col-md-1">
                        <input type="radio" id="C-LP-T2-06" />
                    </div>
                </div>

            </div>
        );
    }
}

Btb.propTypes = {
    pJSON01: React.PropTypes.bool.isRequired,
    pJSON02: React.PropTypes.bool.isRequired
};

