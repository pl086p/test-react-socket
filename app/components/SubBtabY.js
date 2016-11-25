import React from 'react';

export default class Bty extends React.Component {
    render() {
        console.log('Bty()');

        return (
            <div>
            <div className="row">
               <div className="col-md-12">
                    <input type="text" id="C-RP-T3-01" value={ this.props.pJSON } />
               </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <input type="text" id="C-RP-T3-02" defaultValue="y20" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <input type="text" id="C-RP-T3-03" defaultValue="y30" />
                </div>
            </div>
            </div>

        );
    }
}

Bty.propTypes = {
    pJSON: React.PropTypes.number.isRequired
};

