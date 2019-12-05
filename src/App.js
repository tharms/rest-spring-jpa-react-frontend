import React from 'react';
import { Switch } from 'react-router-dom';

import HomeView from './components/home/HomeView';
import PageNotFound from './components/pagenotfound/PageNotFound';
import AppRoute from './AppRoute';

import './App.css';

const App = () => {
    return (
        <Switch>
            <AppRoute
                exact
                path="/home"
                component={HomeView}
            />
            <AppRoute
                path="*"
                component={PageNotFound}
            />
        </Switch>
    );
  };


export default App;
