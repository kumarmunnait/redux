import React from 'react';

import Dashboard from './dashboard/Dashboard'
import Signup from './dashboard/Signup/Signup'
import Login from './dashboard/Login/Login'


import MemberList from './dashboard/AffiliateManager/MemberList'
import CommissionReport from './dashboard/Report/CommissionReport'
import RechargeReport from './dashboard/Report/RechargeReport'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        
          <Route exact path='/' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/member-list' component={MemberList} />
          <Route exact path='/dashboard/commission-report' component={CommissionReport} />
          <Route exact path='/dashboard/recharge-report' component={RechargeReport} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
