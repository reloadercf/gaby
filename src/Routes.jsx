import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Products from './Components/Products';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            {/* <Route path="/Products/:idProducto" component={Products}/> */}
            <Route path="/Products" component={Products}/>
        </Switch>
     );
}
 
export default Routes;
