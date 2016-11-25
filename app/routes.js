import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FilterableTable 	from './components/DefaultPage';
import MtHome  			from './components/MainTabH';
import Mta   			from './components/MainTabA';
import Mtb   			from './components/MainTabB';
import Mtc   			from './components/MainTabCLog';
import MtbEmit   		from './components/MainTabBemit';

export default (
	<Route path="/" component={App}>

		<IndexRoute 		 	component={MtHome} />
		<Route path="/mtH"   	component={MtHome} />
		<Route path="/mta"   	component={Mta} />
		<Route path="/mtb"   	component={Mtb} />
		<Route path="/mtc"   	component={Mtc} />
		<Route path="/mtbEmit"  component={MtbEmit} />
		<Route path="/mFilter"	component={FilterableTable} />

		{ /*
		<Match pattern="/mta" component={Mta} />
		<Match pattern="/mtb" component={Mtb} />
		<Match pattern="/mtc" component={Mtc} />
		*/}
	</Route>
);
