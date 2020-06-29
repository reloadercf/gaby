import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Products from './Components/Products';
import Card from './Components/Card';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/Products" component={Products}/>
            <Route path="/Card" component={Card}/>
        </Switch>
     );
}
 
export default Routes;
