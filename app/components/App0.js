import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ( props ) =>
    <div>   Station:
            <select>
                <option value= "2" >GEP_02</option>
                <option value= "6" >GEP_06</option>
                <option value="18" >GEP_18</option>
                <option value="23" >GEP_23</option>
            </select>

            <header>
                [ <Link to="/mtH">Home</Link> ]
                [ <Link to="/mta">Main TA</Link> ]
                [ <Link to="/mtb">Main TB</Link> ]
                [ <Link to="/mtc">Main TC</Link> ]
                [ <Link to="/mtbEmit">Emit to TB</Link> ]
                {/* [ <Link to="/mFilter">Filter</Link> ] */}
            </header>

            { props.children }
     </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
