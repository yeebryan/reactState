    // ContactForm but with added CHECKBOXES

    // CHECKBOXES is tricky because it is an Array
    // We are working with Array

    
    // Step 1. Setup Form + 1-Way BINDING
    // Step 2. Setup Function for each input
    // Step 3. Radio Buttons remember to modify checked attribute
    //         - Leave value to the value of the radio btn same as html
    // Step 4. Test Form
    // Step 5. Set Up 2-Way BINDING
    // Step 6. Set Up Submit Button
    // Step 7. Set Up Disabled for Submit
    // Step 8. Set Up Render Summary in Render First
    // Step 9. Create Function for Render Summary to check Btn Been Pressed
    // Check and test often before large chunk of code

    // ADD-ONS: CHECKBOX
    // CheckedBoxes remember to modify checked attribute with includes

    import React from 'react';


    export default class ContactForm extends React.Component{
    
    // create state variable

    state = {
    
    // create state variable
    firstName: "", // text input
    lastName:"", // text input
    enquiry: "", // radio
    source: "", // dropdown list
    //prepare for our conditional rendering later 
    // when the button is pressed
    btnPressed: false,

    // what data type to use for checkboxes?
    // we are going to use an array
    interest: [] // checkboxes
    
    };
    

    // end of state variable
    // -------------------------------------------- //
    // Start of functions 
    
    // can have JSX anywhere
    // refers to HTML code like <div>hi</div>
    // e.g.,
    test(){
        return <div>hi</div>
    }
    
    
    // Step 2. Setup Function for each input // Function that handle events
    
    // First name & Last name function
    // if onChange detect any changes it will trigger the event
    // give us the target which is the input box itself and the form element
    // then we can modify the form element itself

    // as you can see we need to replicate the function quite a number of times
    // we can rely on something based on the array itself
    // we want to bind all the form elements together so we can use it properly

    // Here //
    /* updateFirstName = (event) => {
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
    // checkbox
    updateSource= (event) => {
        this.setState({
            source: event.target.value
        })
    }
    */
    // end of Here //

    // bind all form element together
    // How?
    // form names need to be setup and be in-sync with the state keys
    // we can Change the onChange handler to the updateFormField

    // !!! state keys must match our form input names
    // Make sure in Render all elements reflect the same function name: updateFormField under onChange
    updateFormField = (event) => {
        // let's see what happens under the hood
        console.log("event.target.name:", event.target.name)
        // retrieves the "name" of that element (an input field name).
        console.log("event.target.value:", event.target.value)
        // retrieves the value of that element (an input field value).

        // never bind yet, haven't update all the state values

        // we tap onto array [] feature, this means key will be inside variable

        this.setState({
            [event.target.name] : event.target.value
            // what this means is our aim is based on target.name, whichever target name such as
            // "firstname", "lastname", "enquiry" will assign to the target.value
        })
    };




    // once user submitted form, set pressed status to true
    submit = () => {
        console.log('submitted');
        //alert(`Firstname: ${this.state.firstName} and Lastname: ${this.state.lastName} `);
        // change the state of the button using btnPressed 
        this.setState({
            btnPressed: true
        })
    
    }
    
    // conditional rendering to check if there's any value in our form
    // to check if button enable or not
    // just have to check if there is any value/state that is return to me
    checkIfDisabled(){
        // we are checking if it doesn't return firstname, lastname and enquiry
        // do a console log
        return !(
            this.state.firstName &&
            this.state.lastName &&
            this.state.enquiry &&
            this.state.source
        )
    }
    //render always has return
    // returns JSX elements
    // JSX looks like HTML
    // summary of details will be show in renderSummary
    
    renderSummary(){
        // only return the JSX only when the button is pressed
        // display summary of info user keyed in
        if(this.state.btnPressed){
            // what we can return
            return (
                <React.Fragment>
                    <h2>Summary of Details</h2>
                <ul>
                    <li>First name: {this.state.firstName}</li>
                    <li>Last name: {this.state.lastName}</li>
                    <li>Enquiry name: {this.state.enquiry}</li>
                    <li>Source name: {this.state.source}</li>
                </ul>
                </React.Fragment>
            )
        }
    }
    
    
    
    
    // RENDER CORNER //
    
    render(){
        // set up UI inside React Fragment
        // we set up our values based on the STATE (value={this.state.firstName})
        // tag it to the STATE itself
        // Set up a 1-way BINDING (means tagging what's inside the element's VALUE/CHECKED to the state)
        // example- value={this.state.Myname}

        // Set up a 2-way BINDING (means )

        // Set up "names" for all elements, must tally with state variable name

        return (
        <React.Fragment>
    
        {/*set up First name*/}  
        <div>
            <label>First name:</label>
            <input type="text" 
            name="firstName"
            value={this.state.firstName}
            onChange={this.updateFormField} />
        </div>
        {/*set up Last name*/}
        <div>
            <label>Last name:</label>
            <input type="text" 
            name = "lastName"
            value={this.state.lastName}
            onChange={this.updateFormField} />
        </div>

        {/*set up various RADIO BUTTONS for ENQUIRY*/}
    
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
            onChange={this.updateFormField} 
            />
            <label>Sales</label>
        
        {/* MARKETING */}
        
            <input type="radio" 
            value= "marketing"
            name="enquiry"
            checked={this.state.enquiry === "marketing"}
            onChange={this.updateFormField} 
            />
            <label>Marketing</label>
        {/* SUPPORT */}
            <input type="radio" 
            value= "support"
            name="enquiry"
            checked={this.state.enquiry === "support"} 
            onChange={this.updateFormField} 
            />
            <label>Support</label>
        </div>
        {/* WHERE U HEAR US FROM */}
        <div>
            <label>Where Did You Hear us from where?: </label>
              <select name="source" value={this.state.source}
                onChange={this.updateFormField}>
                <option value="word-of-mouth">Word-of-Mouth</option>
                <option value="Ads">Ads</option>
                <option value="Social Media">Social Media</option>
               <option value="Others">Others</option>
              </select>
        </div>
        {/* CHECKBOX */}
        {/* CHECKED */}
        <div>
            <label>Fruits:</label>
            {/* Apple */}
            <input type="checkbox" 
            name="fruits" 
            value="apple" checked={this.state.fruits.includes('apple')}/>Apple

            {/* Orange */}
            <input type="checkbox" 
            name="fruits" 
            value="orange" checked={this.state.fruits.includes('orange')}/>Orange

            {/* Pineapple */}
            <input type="checkbox" 
            name="fruits" 
            value="pineapple" checked={this.state.fruits.includes('pineapple')}/>Pineapple

            {/* Durian */}
            <input 
            type="checkbox" 
            name="fruits" 
            value="durian" checked={this.state.fruits.includes('durian')}/>Durian
        </div>

        {/* BUTTON */}
        <div>
            {/* Important to have () in the function */}
        <button onClick={this.submit} disabled={this.checkIfDisabled()}>Submit</button>
        </div>
        {/* RENDER SUMMARY DISPLAY */}
        {/*putting the code below means it will appear below the button */}
        {this.renderSummary()};
    
        </React.Fragment>
        );
    }
    
    
    
    }