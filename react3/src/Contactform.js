    // Step 1. Setup Form + 1-Way BINDING
    // Step 2. Setup Function for each input
    // Step 3. Radio Buttons remember to modify checked attribute

import React from 'react';


export default class ContactForm extends React.Component{


state = {

// create state variable
firstName: "",
lastName:"",
enquiry: "",
//prepare for our conditional rendering later 
// when the button is pressed
btnPressed:""

};


// can have JSX anywhere
// refers to HTML code like <div>hi</div>
// e.g.,
test(){
    return <div>hi</div>
}


// Step 2. Setup Function for each input

// First name & Last name function
// if onChange detect any changes it will trigger the event
// give us the target which is the input box itself and the form element
// then we can modify the form element itself
updateFirstName = (event) => {
this.setState({
    firstName: event.target.value,
})
}


updateLastName = (event) => {
    this.setState({
        lastName: event.target.value,
    })
}


updateEnquiry = (event) => {
    this.setState({
        enquiry: event.target.value,
    })
}

submit = () => {
    alert("hey submitted")
}

checkIfDisabled(){

}
//render always has return
// returns JSX elements
// JSX looks like HTML

render(){
    // set up UI inside React Fragment
    // we set up our values based on the STATE (value={this.state.firstName})
    // tag it to the STATE itself
    // Set up a 1-way BINDING
    return (
    <React.Fragment>

    {/*set up First name*/}  
    <div>
        <label>First name:</label>
        <input type="text" 
        value={this.state.firstName}
        onchange={this.updateFirstName} />
    </div>
    {/*set up Last name*/}
    <div>
        <label>Last name:</label>
        <input type="text" 
        value={this.state.lastName}
        onchange={this.updateLastName} />
    </div>
    {/*set up various radio buttons for Enquiry*/}

    {/*For values in this case, we just set up to the value of itself
    meaning if the radio btn is Sales then value = sales*/}
    {/*We then add the 'checked' to check if radio btn has been selected = it will return true/false if not specific what you want it to check */}
    {/*for onChange, we just want to call our function hence this.updateEnquiry */}
    {/* SALES */}
    <div>
        <label>Enquiry:</label>
        <input type="radio" 
        value= "sales"
        name="enquiry"
        checked={this.state.enquiry === "sales"}
        onChange={this.updateEnquiry} 
        />
        <label>Sales</label>
    
    {/* MARKETING */}
    
        <input type="radio" 
        value= "marketing"
        name="enquiry"
        checked={this.state.enquiry === "marketing"}
        onChange={this.updateEnquiry} 
        />
        <label>Marketing</label>
    {/* SOCIAL MEDIA */}
        <input type="radio" 
        value= "socialmedia"
        name="enquiry"
        checked={this.state.enquiry === "socialmedia"} 
        onChange={this.updateEnquiry} 
        />
        <label>Social Media</label>
    </div>
    <div>
        <button onClick={this.submit} disabled={this.checkIfDisabled}>
            Send!!{" "}
        </button>
    </div>



    </React.Fragment>
    );
}



}