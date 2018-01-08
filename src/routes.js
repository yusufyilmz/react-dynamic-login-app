import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginFormMain from './components/LoginFormMain';
import LoginFormErrorBoundary from './components/LoginFormErrorBoundary';

export const Routes = () => (

  <LoginFormErrorBoundary>
    <main>
      <Switch>
        <Route exact path='/' component={LoginFormMain} />
      </Switch>
    </main>
  </LoginFormErrorBoundary>
)