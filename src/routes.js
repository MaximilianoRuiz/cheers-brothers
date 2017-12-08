// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './App';
import Buy from './component/Buy';
import Stock from './component/Stock';
import Info from './component/Info';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/buy" component={Buy}/>
            <Route path="/stock" component={Stock}/>
            <Route path="/info" component={Info}/>
        </Switch>
    </App>;

export default AppRoutes;