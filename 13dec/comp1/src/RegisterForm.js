import React from 'react'


// 1. Start with simple display 
// 2. Test form UI (render)
// 3. setUp form values with 1 way binding and test
// 4. Later, set up 2 way bind with updateFormField = () => {}
//    . also onChange={this.updateFormfield}
// 5. Create register button with onChange with register function
//    . register = () => {} ... is to handle our onClick
// 6. Create a simple renderSummary function and display some JSX content

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// SIMPLE FORM FINISHED!
// but now, we are going to deal PROPS & STATE 
// upgrade our APP.JS - holds our logic of our Register Form
// APP.JS - also manages and send information to our
// RegisterForm.JS (UI) & Summary.JS (UI)
// Therefore, we going to split RegisterForm + Summary into 2 separate components
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //


export default class RegisterForm extends React.Component {

    // state hold temp values
    // states r private data tied to class itself
    // only component holds the state values

    state = {
        fullName: "",
        email: "",
        isButtonClicked: false // by default is not click ma
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
    register = () => {
        console.log(`Click on register to renderSummary`)
        // introduce new State
        // checking if button is being clicked
        this.setState({
            isButtonClicked: true // setting Conditional Rendering
        })
    }



    // renderSummary FUNCTION - do Function Call, print whatever is in the STATE
    // typical function for JSX, is to do a RETURN
    // our CONDITIONAL RENDERING
    // render Summary only when user clicks on Register button
    renderSummary = () => {
        // Next, we going to set up our conditional renderer function
        // We only display 'renderSummary' when the state is being click/updated
        // we set our condition in this function itself
        // add 'isButtonClicked' as new state above
        if(this.state.isButtonClicked){
        return(
            <React.Fragment>
                <h1>Summary</h1>
                <ul>
                    <li>{this.state.fullName}</li>
                    <li>{this.state.email}</li>
                    <li>NATALIE</li>
                </ul>
            </React.Fragment>
            // [this.state.fullName & email]
            // the state is always updated 
            // and every time it did is because of the updateFormField
            // every time state is updated, our "render()" basically re-render
        )  }
    }

    render (){
        return <React.Fragment>
            <div>
                            {/* Bind it to our input text, by just giving them values of the state */}
                            {/* Names of input should align with our state*/}
                            {/* onChange - bind it to call the function 'updateFormField' */}
                            {/* 'updateFormField' - whenever I keyed in something, the event will be triggered */}
                <label>Name</label>
                <input type="text" value={this.state.fullName} name="fullName" onChange={this.updateFormFields}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={this.state.email} name="email" onChange={this.updateFormFields}/>
            </div>
            <button onClick={this.register}>Register</button>
        
        {this.renderSummary()}
        </React.Fragment>
    }
}