import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import './App.css'

import Menu from './components/menu/menu';
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import BusesPage from './pages/BusesPage/BusesPage'
import BusesActionPage from './pages/BusesActionPage/BusesActionPage'
import DriverPage from './pages/DriverPage/DriverPage'
import DriverActionPage from './pages/DriverActionPage/DriverActionPage'
import StreetPage from './pages/StreetPage/StreetPage'
import StreetActionPage from './pages/StreetActionPage/StreetActionPage'
import CoachPage from './pages/CoachPage/CoachPage'
import CoachActionPage from './pages/CoachActionPage/CoachActionPage'
import Statistical from './pages/Statistical/Statistical'


class App extends Component {
	
	
  render(){
    return (
		<Router>
			<div className="App">
				<Menu/>
				<div className="container">
					<div className="row">
					<Switch>
						<Route path='/' exact={true} component={HomePage}/>

						<Route path='/busesPage' exact={false} component={BusesPage}/>

						<Route path='/buses/add' exact={false} component={({history}) => <BusesActionPage history={history}/>}/>

						<Route path='/buses/:id/edit' exact={false} component={({match, history}) => <BusesActionPage match={match} history={history}/>}/>

						<Route path='/driverPage' exact={false} component={DriverPage}/>

						<Route path='/driver/add' exact={false} component={({history}) => <DriverActionPage history={history}/>}/>

						<Route path='/driver/:id/edit' exact={false} component={({match, history}) => <DriverActionPage match={match} history={history}/>}/>

						<Route path='/streetPage' exact={false} component={StreetPage}/>

						<Route path='/street/add' exact={false} component={({history}) => <StreetActionPage history={history}/>}/>

						<Route path='/street/:id/edit' exact={false} component={({match, history}) => <StreetActionPage match={match} history={history}/>}/>

						<Route path='/coachPage' exact={false} component={CoachPage}/>

						<Route path='/coach/add' exact={false} component={({history}) => <CoachActionPage history={history}/>}/>

						<Route path='/coach/:id/edit' exact={false} component={({match, history}) => <CoachActionPage match={match} history={history}/>}/>

						<Route path='/statistical' exact={false} component={Statistical}/>

						<Route path='' exact={false} component={NotFoundPage}/>
						
					</Switch>	
					</div>
				</div>
			</div>
		</Router>
    	);
	}
	
}

export default App;
