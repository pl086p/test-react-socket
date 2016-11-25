import React from 'react';

export default class Btx extends React.Component {

    render() {
        return (
          <div>
            <div className="row">
                <div className="col-md-4">Modulation</div>
                <div className="col-md-3">
                    <input type="text" id="C-RP-T2-11" value={ this.props.pJSON } />
                </div>
                <div className="col-md-2">
                    <input type="text" id="C-RP-T2-12" value={ this.props.pJSON } />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">Pwr Lvl</div>
                <div className="col-md-3">
                    <input type="text" id="C-LP-T2-21" />
                </div>
                <div className="col-md-2">
                    <input type="text" id="C-LP-T2-22" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">Carrier</div>
                <div className="col-md-3">
                    <input type="text" id="C-LP-T2-31" />
                </div>
                <div className="col-md-2">
                    <input type="text" id="C-LP-T2-32" />
                </div>
            </div>

          </div>
        );
    }
}

Btx.propTypes = {
    pJSON: React.PropTypes.number.isRequired
};

