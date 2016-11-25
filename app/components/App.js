import React, { PropTypes } from 'react';
import { Link } from 'react-router';


export default class App extends React.Component {
    // static contextTypes = {
    //     ctxGEP: React.PropTypes.string.isRequired
    // }
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedGEP: props.defaultGEP
        };
    }
    getChildContext() {
        console.log('getChildContext: ' + this.state.selectedGEP);
        return { ctxGEP: this.state.selectedGEP };
    }
    componentDidUpdate() {
        console.log('comDidUpdate: ' + this.state.selectedGEP);
    }
    selectChange(e) {
        console.log('selectChange: ' + this.state.selectedGEP + ', ' + e.target.value);
        this.setState({ selectedGEP: e.target.value});
    }
    render() {
        return (
         <div> Station:
         <select value={this.state.selectedGEP} onChange={this.selectChange.bind(this)}>
         <option value =  "2" > GEP_02 </option>
         <option value =  "6" > GEP_06 </option>
         <option value = "18" > GEP_18 </option>
         <option value = "23" > GEP_23 </option>
         </select>

         <header>
         [ <Link to = "/mtH" > Home </Link> ]
         [ <Link to = "/mta" > Main TA </Link> ]
         [ <Link to = "/mtb" > Main TB </Link> ]
         [ <Link to = "/mtc" > Main TC </Link> ]
         [ <Link to = "/mtbEmit" > Emit to TB </Link> ]
         {/* [ <Link to="/mFilter">Filter</Link> ] */}
        </header >

        { this.props.children }
        </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object,
    defaultGEP: PropTypes.string
};

App.defaultProps = {
    defaultGEP: '6'
};

App.childContextTypes = {
    ctxGEP: React.PropTypes.string.isRequired
};
