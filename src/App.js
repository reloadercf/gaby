import React,{Fragment, useState} from 'react';
// import {useFirebaseApp} from 'reactfire';
import Routes from './Routes';
import NavBar from './Components/NavBar';

function App() {
  // const firebase= useFirebaseApp();
  // console.log(useFirebaseApp);
  const [isLoggin, setisLoggin] = useState(false)

  return (
    <Fragment>
      { isLoggin &&
          <NavBar />
      }
      
      <Routes setisLoggin={setisLoggin}/>
    </Fragment>
  );
}

export default App;