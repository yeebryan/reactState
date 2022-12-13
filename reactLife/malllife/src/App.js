// USE Bootstrap
// TO see where ur bootstrap is
// CAN'T FIND THEN - npm install bootstrap
// go to NODE_Module > bootstrap > dist > css > bootstrap.min.css
// * NOTE WHENEVER We do a INSTALL, it will go under NODE_MODULE
// IMPORT bootstrap
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Lifecycle from './Lifecycle';

function App() {
  return (
    <div className='container'>
      <Lifecycle/>
    </div>
  );
}

export default App;
