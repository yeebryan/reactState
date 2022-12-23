// Understanding that state stores private data
// if we put "create task" form into a component 
// how does that component tell the parent component what user has entered
// This is where managed component comes in.

// [ Lab10 ]
// (1) App component to ask user to key in their username and email
// (2) When user clicks on Submit button
// (3) Display what user has entered in a separate page 

// Parent Component - App.js
// other component (child) - e.g., User.js, Form.js

// remember Props can pass data from Parent to someone else
// so, App.js can share information (e.g., function) to child component 

// Start in App.js
// Start RegisterForm.js (do our usual 2-way binding, create register form ...)