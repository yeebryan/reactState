import React from 'react'

// 1. Create function based component that takes in Props
// 2. Take away all the Logic and Render Summary, Render also as it won't work anymore
// 3. Go back to App.JS
// 4. Props data is from parent

export default function RegisterFormFunc(props) {

        return (<React.Fragment>
            <div>
                            {/* Bind it to our input text, by just giving them values of the state */}
                            {/* Names of input should align with our state*/}
                            {/* onChange - bind it to call the function 'updateFormField' */}
                            {/* 'updateFormField' - whenever I keyed in something, the event will be triggered */}
                <label>Name</label>
                <input type="text" value={props.fullName} name="fullName" onChange={props.update}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={props.email} name="email" onChange={props.update}/>
            </div>
            <button onClick={props.register}>Register</button>
        </React.Fragment>
        )
    }
