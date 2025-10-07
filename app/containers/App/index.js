/**
 * Clean App.js for Login Page
 */

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import MainPage from 'containers/MainPage/index';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';

export default function App() {
  console.log('App loaded');

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/main" component={MainPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
