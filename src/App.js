import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import Menu from './components/menu/menu';
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import BusesPage from './pages/BusesPage/BusesPage'
import BusesActionPage from './pages/BusesActionPage/BusesActionPage'
import DriverPage from './pages/DriverPage/DriverPage'
import DriverActionPage from './pages/DriverActionPage/DriverActionPage'



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
