// USE Bootstrap
// TO see where ur bootstrap is
// CAN'T FIND THEN - npm install bootstrap
// go to NODE_Module > bootstrap > dist > css > bootstrap.min.css
// * NOTE WHENEVER We do a INSTALL, it will go under NODE_MODULE
// IMPORT bootstrap

import Mall2 from "./Mall2"
import "bootstrap/dist/css/bootstrap.min.css"
import MallDirectory from "./MallDirectory";

function App() {
  return (
    <div>
      {/*<ContactForm/>
      <FormCheckBox/> */}
      <MallDirectory/>
    </div>
  );
}

export default App;
