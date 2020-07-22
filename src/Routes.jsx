import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Products from './Components/Products';
import Cookmodule from './Components/Kitchen/Cookmodule';
import { useFirebaseApp, useUser } from 'reactfire';

const Routes = ({setisLoggin, isLoggin}) => {
  const firebase= useFirebaseApp();
    const user = useUser();
    return (
        <Switch>
            <Route path="/Products" component={Products}/>
            <Route path="/Kitchen" component={Cookmodule}/>
            <Route path="/">
              <Login 
              user={user}
              firebase={firebase} 
              setisLoggin={setisLoggin} 
              isLoggin={isLoggin} 
              />
            </Route>
        </Switch>
     );
}
 
export default Routes;
