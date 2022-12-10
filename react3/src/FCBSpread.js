// exact same as FormCheckBox 
// but instead of using push
// we uses spread operator ... instead


import React from 'react';


export default class FormCheckBox extends React.Component{
        
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
            // whatever input/selection is done to element will print out element's name
            console.log("event.target.value 123:", event.target.value)
            // retrieves the value of that element (an input field value).
            // whatever input/selection done will print out value of elements

            // never bind yet, haven't update all the state values

            // we tap onto array [] feature, this means key will be inside variable
            // [] -> produces the end-result/value of item inside
            // e.g. [event.target.name] --> end result of event.target.name -> which is the name of the form element
            // hence it becomes -> form element name: form element value
            
            this.setState({
                [event.target.name] : event.target.value
                // what this means is our aim is based on target.name, whichever target name such as
                // "firstname", "lastname", "enquiry" will assign to the target.value
            })
        };

        // BIND CHECKBOX so can check the CHECKBOX
        // First thing we can do is SETSTATE
        // There are different ways
        // 1 way: add it to the array and remove it later

        updateInterest = (event) => {
            console.log(`event.target.value haha 123: ${event.target.value}`);
            // CHECKING INTEREST IF IT INCLUDE THE VALUE
            if(this.state.interest.includes(event.target.value) === false){
                // CLONE THE ARRAY (INTEREST). 
                // Because in React, we are dealing with functional programming, 
                // React don't like us changing VALUES or reassign
                // PUSH IT INSIDE THE FORM
                // METHOD 1

                let cloned = this.state.interest.slice();
                console.log(`the clone array: ${cloned}`)
                // slice() - empty bracket means return all elements in array
                // Slice itself, return a copy of the array

                // Change the CLONE array
                // push stuffs/values into CLONED

                cloned.push(event.target.value);
                console.log(`push shown into cloned array: ${cloned}`)

                // SWAP out original array with CLONE
                this.setState({
                    interest: cloned // interest replace with CLONED
                })

            }else{
                // if the checkbox value is already in the array, it means it has been checked
                // so we have to remove existing one
                console.log('removing ...', event.target.value);
                // event.target.value here is what is unchecked
                // how to set up removal once user uncheck the box

                // process repeat -> clone -> change -> swap

                // remove item in checkbox array
                // SLICE - return selected elements in an array as new array
                // CLONE array again in order to remove item
                let cloned = this.state.interest.slice();
                // haven't remove unchecked item yet

                // find particular one to remove
                // we know that it is an array, we can manipulate it using the index that was clicked on
                
                // what findIndex do is, it return the index we trying to search for the targeted value
                let itemToRemove = cloned.findIndex(function(pikachu){
                    return pikachu === event.target.value // pikachu refers to element
                    // find the 1 that was unchecked, the one unchecked means event.target.value --> return the index
                })
            
                // Index is found, so modify array 'state'
                // It will show in console but not in the chrome's component
                // currently copy state.interest (currently being checked items)
                console.log(`return me index: ${itemToRemove}`);

                // remove item; splice - add/remove array elements
                cloned.splice(itemToRemove, 1);
                this.setState({
                    interest: cloned
                })
        }}


        updateInterestSpread = (event) => {
            if(this.state.interest.includes(event.target.value) === false){
                // makes a copy of original array and push in new value
                let cloned = [...this.state.interest, event.target.value];
                this.setState({
                    interest: cloned
                })
            }else{
                let cloned = this.state.interest.slice();
                // removal 
                // find index to remove first
                let indexToRemove = cloned.findIndex(function (pikachu)
                {
                    return element === event.target.value;
                });

                // copy to the part before index to remove  [a,b,c]
                // copy last part after the index to remove [d, e,f]
                // e.g., [a,b,c , itemToRemove, d, e,f]
                cloned = [...this.state.interest.slice(0, itemToRemove), ...this.state.interest.slice(0, itemToRemove+1) ]

                this.setState({
                    interest: cloned
                })
            }

        }


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
                this.state.source &&
                this.state.interest // how to separate each element with comma
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
                        <li>Fruits selection: {this.state.interest}</li>
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
            {/* IF you can't check the checkbox means BINDING haven't been set up */}
            {/* set up onChange, remember includes is SQUARE BRACKETS since array*/}
            {/* But if you just update onChange with 'updateInterest', you will be under Chrome's component when you ticked the element, it won't reflect in the state>interest */}
            {/* SO LET'S SETUP THE BINDING! */}
            <div>
                <label>Fruits:</label>
                {/* Apple */}
                <input type="checkbox" 
                name="interest" 
                value="apple" checked={this.state.interest.includes['apple']}
                onChange={this.updateInterestSpread}/>Apple

                {/* Orange */}
                <input type="checkbox" 
                name="interest" 
                value="orange" checked={this.state.interest.includes['orange']}
                onChange={this.updateInterestSpread}/>Orange

                {/* Pineapple */}
                <input type="checkbox" 
                name="interest" 
                value="pineapple" checked={this.state.interest.includes['pineapple']}
                onChange={this.updateInterestSpread}/>Pineapple

                {/* Durian */}
                <input 
                type="checkbox" 
                name="interest" 
                value="durian" checked={this.state.interest.includes['durian']}
                onChange={this.updateInterestSpread}/>Durian
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