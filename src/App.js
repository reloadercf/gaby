import React,{Fragment, useState} from 'react';
//import {useFirebaseApp} from 'reactfire';
import Routes from './Routes';
import NavBar from './Components/NavBar';
//import 'firebase/auth';

function App() {
  // const firebase= useFirebaseApp();
  const [isLoggin, setisLoggin] = useState(true)

  return (
    <Fragment>
      {isLoggin &&
        <NavBar/>
      }
      
      <Routes setisLoggin={setisLoggin}/>
    </Fragment>
  );
}

export default App;