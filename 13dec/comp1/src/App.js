// App.Js become a Class
import RegisterFormFunc from './RegisterFormFunc';
import React from 'react'
import Summary from './Summary';

// MANAGED COMPONENT will be managed by App.JS (PARENT) - update our content etc...
// 1. Upgrade App.Js into a Class
// 2. Place in States, function/logic
// 3. Place in Managed Components
// 4. After transforming RegisterFormFunc.JS to Function Component
// 5. Import in RegisterFormFunc and implement in Render
// --- We going to rely on Props to handle everything for us ----
//



class App extends React.Component {
  // state is going to hold temp values
  // states are private data tied to class itself
  // only component holds state values

  state = {
    fullName: "",
    email: "",
    isButtonClicked: false,
  }

// create function for 2 way bind, onChange trigger

updateFormFields = (event) => {
  this.setState({
  [event.target.name] : event.target.value
  // target means the entire input <input type='text' .....
  // .name means the name="fullName" and 'email'
  // set e.target.name to e.target.value (which is the current Form value > state)
})
}


// register FUNCTION
// set CONDITIONAL TO render(isButtonClicked) Summary to true
registerButtonPressed = () => {
  console.log(`Click on register to renderSummary`)
  // introduce new State
  // checking if button is being clicked
  this.setState({
      isButtonClicked: true // setting Conditional Rendering
  })
}






// how Props work 
// it will be illustrated here in Render
// 1. It works like an attribute
// 2. To use props, give an attribute key
//    . how we access is - props.<key or attribute>

// So, ALL the information in <RegisterFormFunc> will be sent over via
// Props to RegisterFormFunc.JS
// Go over to that JS, and upgrade value, onChange with Props (basically replacing 'this' with props)
// and ensure no .state 
// create Summary.JS


render () {
  return (<React.Fragment>
    <RegisterFormFunc
    fullName ={this.state.fullName}
    email={this.state.email}
    update={this.updateFormFields}
    register={this.registerButtonPressed}
    />

    {/* if button clicked, display Summary if not display NULL */}
  { this.state.isButtonClicked ? (
  <Summary fullName ={this.state.fullName} email={this.state.email} />) : null}
  </React.Fragment>
  )}
}

export default App;

