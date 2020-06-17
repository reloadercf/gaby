import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useFirebaseApp} from 'reactfire';

function App() {
  const firebase= useFirebaseApp();
  console.log(useFirebaseApp);

  return (
    <div className="App">
      <h1>Hola Gaby hermosa!!!!!</h1>
    </div>
  );
}

export default App;