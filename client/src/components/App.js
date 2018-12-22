import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Dashboard from './Dashboard';
import LoginForm from './LoginForm';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>	
		    <div className="ui container">
	    		<Header />
	    		
	    		<Switch>
			    	<Route exact path="/" component={Dashboard} />
			    	<Route exact path="/login" component={LoginForm} />
			    </Switch>
		    </div>
	    </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);