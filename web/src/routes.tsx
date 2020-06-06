import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CreatePoint from './pages/CreatePoint';
import Home from './pages/Home';

const Routes = () => (
    <BrowserRouter>
        <Route component={Home} exact path="/" />
        <Route component={CreatePoint} path="/create-point" />
    </BrowserRouter>
);

export default Routes;
