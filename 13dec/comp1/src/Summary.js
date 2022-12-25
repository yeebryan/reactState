import React from 'react'


// Managed Component

// Similarly, change 'this' to props
// and remove .state
// go back to App.JS

export default function Summary(props){
    return (
    <React.Fragment>
        <h1>Summary</h1>
            <ul>
                <li>{props.fullName}</li>
                <li>{props.email}</li>
                <li>Joanne</li>
            </ul>
    </React.Fragment>
    )
}