import React from 'react';
import {useFirebaseApp} from 'reactfire';
import Login from './Components/Login'

function App() {
  const firebase= useFirebaseApp();
  console.log(useFirebaseApp);

  return (
    <div className="App">
      <p>Usuario</p>
      <Login />
    </div>
  );
}

export default App;