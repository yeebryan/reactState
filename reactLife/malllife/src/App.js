// USE Bootstrap
// TO see where ur bootstrap is
// CAN'T FIND THEN - npm install bootstrap
// go to NODE_Module > bootstrap > dist > css > bootstrap.min.css
// * NOTE WHENEVER We do a INSTALL, it will go under NODE_MODULE
// IMPORT bootstrap
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import LifeCycle2 from './LifeCycle2';
import LifeCycleMount from './LifeCycleMount';
import LCMountData from './LCMountData';

function App() {
  return (
    <div className='container'>
      <LCMountData/>
    </div>
  );
}

export default App;
