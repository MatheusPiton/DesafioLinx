import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import NewProd from './pages/newprod';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact patch="/" component={Main} />
            <Route patch="/new-prod" component={NewProd} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
