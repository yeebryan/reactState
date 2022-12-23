import React from "react";

// STEP 1: set up skeleton code 
// STEP 2: create array/ base data 
// STEP 3: create UI (render / renderAddUser) to display current users in base data (button/name/email)
// STEP 4: set up the UPDATE form field function 
// STEP 5: set up ADD user function for the "ADD USER" button
// . Create variable to generate new ID, new name, new email (newUser)
// . Add it to existing base data
// . set the state (update the state)
// STEP 6. 


export default class App extends React.Component {
  state = {
    users: [
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Jon Snow",
        email: "jonsnow@winterfell.com"
      },
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Ned Stark",
        email: "nedstark@winterfell.com"
      },
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Frodo Baggins",
        email: "frodo@bagend.com"
      }
    ],
    newUserName: "", // use for addUser
    newUserEmail: "", // use for addUser
    beingUpdated: false, // status of user being updated
    updatedID: null,
    updatedName: "", 
    updatedEmail: ""
  };

// UPDATE FORM FIELD function for the input to work /event handler
// when someone input stuff
    updateFormField = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
      console.log(e.target.name)
  }

  
  // ADD NEW USER
    addUser = (e) => {
        // create new user object call newUserMe
      let newUser = {
        _id: Math.floor(Math.random() * 10000 +1),
        name: this.state.newUserName,
        email: this.state.newUserEmail
      }
      console.log(`this is the new object and its field: ${JSON.stringify(newUser)}`);

        // add the new user back to the existing user list
        // so newUser is added to ...this.state.users
      let cloned = [...this.state.users, newUser]

        // update the state 
        // now added user will be in the list
      this.setState({
        users: cloned 
      })
      console.log(`New user added: ${this.state.newUserName}`)
    };

    // user is a new parameter, not to be confused with users (base data object)
    // arrow function 
    // same as writing:  displayEdit = function(user) { return ....}
    displayEdit = (user) => {
        if (this.state.beingUpdated === true && user._id === this.state.updatedID){
        return (
            <div>
                <input
                    type="text"
                    value= {this.state.updatedName}
                    onChange={this.updateFormField}
                    name="updatedUserName"/>
                
                <input  
                    type="text"
                    value={this.state.updatedEmail}
                    onChange={this.updateFormField}
                    name="updatedUserEmail"/>

                <button
                    onClick={() => {
                        this.processEdit(user) // this function yet to write
                        // when click, user can edit the text
                    }}
                    >Edit Me</button>
            </div>
        );
    }   else {
        return null // don't need to return anything, stay the same
    } // <--- this curly brace is for the if statement
    }


    // now we begin, to do processEdit function
    processEdit = (user) => {

        let selectedUser = {
            _id: this.state.updatedID,
            name: this.state.updatedName,
            email: this.state.updatedEmail
        }
        // event handler
        let userIndex = 
        this.state.users.findIndex(e => e === user)
        // it return true, if e is the same as user
        // then it will returns the index
        console.log(`this is userIndex: ${userIndex}`)

        let modifiedUsers = 
        [...this.state.users.slice(0, userIndex), selectedUser, ...this.state.users.slice(userIndex +1) ]
        // get left, get right and join then into selectedUser 
        console.log(`this is left&right join: ${JSON.stringify(modifiedUsers)}`);


        // update state
        this.setState({
            users: modifiedUsers,
            beingUpdated: false,
            updatedID: null,
            updatedName: "",
            updatedEmail: ""
        })
        
    }




  // render new User - got UI hence react fragment
  // add it to bottom of RENDER
  renderAddUser() {
    return (
      <React.Fragment >
        <input
          type="text"
          placeholder="User name"
          value={this.state.newUserName}
          onChange={this.updateFormField}
          name="newUserName"
        />
        <input
          type="text"
          placeholder="User email"
          value={this.state.newUserEmail}
          onChange={this.updateFormField}
          name="newUserEmail"
        />
        {/* ADD USER function is inserted here */}
        <button onClick={this.addUser}>Add</button>
      </React.Fragment>
    );
  }




  // Delete function
  deleteUser = () => {
    console.log('this shows that DELETE btn being pressed')
  };






  


// understanding key props
/* 
https://www.linkedin.com/pulse/everything-you-need-know-key-prop-react-denis-bunchenko#:~:text=React's%20key%20prop%20gives%20you,if%20all%20the%20props%20changed.
*/

  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => {
            {/* return name, update btn, delete btn based on user._id */ }
          return (
            <React.Fragment key={user._id}> {/* user of Props : user_.id, user.name*/}
              <div className="box">
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>


                
                <button onClick={async() => {await this.setState({
                    beingUpdated: true,
                    updatedID: user._id,
                    updatedName: user.name,
                    updatedEmail: user.email
                })
                console.log(this.state) 
                // when click, update the state variable 
            }}
                >Update</button>
                
                <button onClick={() => {this.deleteUser(user)}}
                >Delete</button>

                {this.displayEdit(user)}






                
              </div>
            </React.Fragment>
          );
        })}
        {this.renderAddUser()}
      </div>
    );
  }
}