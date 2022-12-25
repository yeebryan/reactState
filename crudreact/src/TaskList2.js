// Malcolm Version of CRUD 9.1

// React Lab 9 - CRUD

// Build toDo List 
// Ask user to 
// (1) add LIST of TASKS (2) MARK THEM AS DONE (3) DELETE/CHANGE TASK'S DESCRIPTION

// Step 1. Start with Base List and Do Some Basic Render
//
// Step 2. Remember to use 'return' in the .map function
//
// Step 3. 1-WAY bind our CHECKBOX with .DONE state of each item
// . checked={eachTask.done} - 1 WAY BIND
//
// Step 4. Test by setting .Done with true in react dev tools
// . This means going to CHROME>INSPECT>COMPONENT 
// . Deal with the onChange mechanisms and the Checked of the checkBox
// . Check under the State>Tasks>Click on one of the option>change status of "DONE" to "true"
// 
// Step 5. Create I/P Boxes for C-Create Option
//
// Step 6. Create Button & Assign onClick Handler function (inside render)
// 
// Step 7. Test 1-Way Binding and onClick function (chrome)
// 
// Step 8. AddTask -> create Temp obj -> retrieve data from TEXT BOX using state -> set new state
// 
// Step 9. Setup 2-WAY BINDING for updateFormField by setting value={this.state.newTaskName}
//
// At this stage, you should be able to AddTask internally 
//
// Step 10. test adding OF NEW TASK
//
// Step 11. setUp onChange for each checkBox
//
// Step 12. 2 WAY BIND using checkTask with closure
// . understand what is closure
//
// STEP 13. the Moment we click on EDIT, it change the input BOX
// . edit button . Make use of CLOSURE also
// . ADD onClick beginEditTask function
//
// STEP 14: Write function beginEditTask that handles 2 state variable: 
// 1st one: taskBeingEDITED (store selected edit task obj)
// 2nd one: editedTaskName (store edited task description)
//
// STEP 15: Test edit button when click .. state values are updated
//
// STEP 16: Enhance render function with conditional rendering
// . match eachTask.id vs current edited task id OBJ
// . if match show input box, update, cancel
// . if not show - task, edit, delete
//
// STEP 17: Make the 'update' and 'cancel' button work when edit Task
// . check 2-way bind for edit input box works
// . same as CREATE function - clone task, modify task, put it back again
// . modify 'update' and 'cancel' button to have onClick handler
// 
// STEP 18: CREATE ProcessEditTask 
// . clone the selected task OBJ
// . modify with latest task details 
// . find index to replace
// . setState to task with latest modifiedTasks ...
// . setState "TaskBeingEdit" when no more edit to null or {}



import React from 'react'

export default class TaskList extends React.Component{


// For now, we create some base data
// Something to work with. Eventually we will tap on APIs/Mongo + Express(API)
// With data, we work with objects. For every obj, we will need an ID.
// in Mongo, _id ObjectID(..id value..) is always created for each object
// task: [ {task1}, {task2}]
// How to access tasks? this.state.tasks
// In this Scenario .. tasks represents all existing data | used as mock data first
// every key is unique and should represent 1 task item

state = {
    'tasks' :[
    
        {
            id: 1,
            description:'Walk the dogs',
            done: false, // the checkbox
            },
            {
            id: 2,
            description:'Water the plants',
            done: false,
            },
            {
            id: 3,
            description:'Pay the bills',
            done:false,
            }

    ],
    newTaskName: "", 
    taskBeingEDITED: null, // rem which task is being edited
    editedTaskName: ""
    // this holds the value of what users type
    // the moment user click on "Add Task", 
    // it will retrieve the value and the state of newTaskName
    // and modify the entire state object to reflect the new Added Tasks
    // updateFormField function
    // make sure <input name> equal to this name

}


// create task
// when we create task, we also need something that will hold our task' value
// we do that by adding another state ABOVE



// ADD NEW TASK 
// create a temp obj to place a task
// using existing value of newTaskName "derived from our 2way binding"
// binding -> changes the value of newTaskName from the input box
// assumption: all task created is not done .done = false
// REMEMBER: use arrow function as dealing with EVENTS 
// because by default will have event handler()
addTask = () => {
    // temp holding obj
    // can chunk everything later on in state?
    const newTask = {
        id: Math.floor(Math.random() * 10000 +1),
        description: this.state.newTaskName, // refers to latest holding value from input box
        done: false
    }

    // test whether really have new task
    console.log(`newTask is this la: ${JSON.stringify(newTask)}`)



    //reactive programming we do not mutate the original
    // we also cannot simply assign values to the state properties
    
    // cloned is a array
    // hence push
    // this method is old because not reactive programming still creating array in this manner
    //|||||||||| OLD METHOD ||||||||
    /* let cloned = this.state.tasks.slice(); // slice gives copy of array
    cloned.push(newTask); // add in the new item */

    //|||||||||| NEW METHOD ||||||||
    // new method is use spread operator
    // add "newTask" into "tasks" through this.state.tasks
    let cloned = [...this.state.tasks, newTask]

    // update tasks with new task created
    this.setState({
        tasks: cloned
    })
    console.log(`Task being added ${newTask.id}`)

    // NEXT, actually update our STATE to show user it is being added in
}


// input names must tally with the state keys for this to work
// e.g., <input name="bryan" onChange={...}>  <-- our "target", 
// ------- once this function is called, we can use this event
// state = {bryan: "food"}
// do our 2way bind
// basically update the moment we type something in input
updateFormField = (event) => {
    this.setState({
        [event.target.name] : event.target.value
        // what is actually trying to do:
        // bryan            : event.target.value
        // event.target.name will retrieve the "name: bryan"
    })
    console.log(`event is: ${event.target.name}`)
    // event.target.name is - newTaskName
}


//CHECK TASK//
// 
//
// check boxed the task//
// CHECK TASK function - arrow function since need event handler
// HOWEVER unlike usual arrow functions, we are getting the task from the closure
// Task derived from the checkbox onChange .. > closure function

/* checkTask = (task) => {
    console.log(task);
}
// test it out, it will print out the task when we click on checkbox
// this means we successful sent back the Task object back to our CheckTask function
*/
// (task) here is eachTask --> currently selected task
checkTask = (task) => {
    console.log(task);
// we now want to modify the object
// STEP 1: use SPREAD operator on the object
//         - use SPREAD to clone original
// using SPREAD on OBJ

let clonedTask = { ...task };
console.log(`See our spread operator work: ${JSON.stringify(clonedTask)}`)

// we know the spread will distribute everything inside

// STEP 2: make change based on user interaction 
clonedTask.done = !clonedTask.done; // we are accessing the DONE property & invert whatever the result
// if true make it false, if false make it true

// STEP 3: find Index to replace
// we have some many TASKS in the giant array : Walk the dog, mop the floor ... (many tasks objects)
// we need to find which is the TASKS we are modifying
// in our STATE itself, there are many TASKS objects
// e.g., I need to know is it ID: 2, 3 ...
// how we know this, will be based on the INDEX itself
// we do it by using function findIndex .. returns truthy value for 1st found

const indexToReplace = this.state.tasks.findIndex((eachTask) =>{
    if(eachTask.id === task.id) return true;
    else return false;
    // for every Task that is inside our STATE state
    // remember 'task' comes from the checkTask function
        // return this: {id: 1, description: 'Walk the dog', done: true}
    // loop thru all tasks, compared the looped task id vs selected task id
    // if match -> return true -> returns the index
});

console.log(`Index is: ${indexToReplace}`)

// STEP 4. Modify and update current state with the task to replace

// doing left and right, create left and right boundary items
// we then insert the newly cloned task

const left = this.state.tasks.slice(0, indexToReplace)
// take index 0 and before indexToReplace
// for Walk the Dog [ID = 1], this means left = is blank
// for Water the Plant [ID = 2], this means
// chop off left hand side
console.log(`left is: ${JSON.stringify(left)}`)

// right
const right = this.state.tasks.slice(indexToReplace + 1);
console.log(`right is: ${JSON.stringify(right)}`);


// const cloned = [...left, clonedTask, ...right];
// set state back of the tasks

this.setState({
    tasks: [...left, clonedTask, ...right] // remember TASKS with a 's"
})
console.log(`task is: ${JSON.stringify(task)}`)

}
// end of checkTask function


// EDIT function
//
//
// process similar to ADD function
// task parameter comes from our CLOSURE
// later we tap onto taskBeingEDITED
// taskBeingEDIT : this will contain object that is currently being edited
// --> why we need to know??? SO THAT IN OUR RENDER, WE CAN IDENTIFY WHICH OBJ
// --> TELL REACT TO RE-RENDER

// editedTaskName: store current selected editing task description
beginEditTask = (task) => {
    console.log(task)
 this.setState({
    //add in 1 more TASK call
    // sent in entire obj call TASK, itself
    taskBeingEDITED: task,
    editedTaskName: task.description
    // this let us know which one task is being edited
    // next will be setting up conditional render
    // with eachTask is it current one being EDITED?
    // if not, just show normal UI
    // if yes, show a textbox
    // setup ternary operator as if-else statement inside EDIT render button
 })
}

// end of EDIT function







// ProcessEditTask function
// same - clone>modify>put it back

ProcessEditTask = (task) => {
    console.log(task); // this returns the event 

    // we are going to depend on current state values and 
    // replace our task

    // method 1 of clone and update value: create clonedTask
    /*const clonedTask = {...this.state.taskBeingEDITED}
    console.log(clonedTask);
    clonedTask.description = this.state.editedTaskName;*/

    // method 2: 
    const clonedTask = {...this.state.taskBeingEDITED,
    description: this.state.editedTaskName
    }

    // when you do spread an obj, all the key/pair values are extracted and separated by a comma,
    // basically like our states
    // => ...(spread operator) will cause key/value pair to be extracted like below
    // {
    // id: 1,
    // description: "some task",
    // description: this.state.editedTaskNam, --> supercedes the original
    // done: false
    // }
    // having this> description: this.state.editedTaskName overwrites any key/value pair, superceding the original 

    // findIndex again

    const indexToReplace = this.state.tasks.findIndex((eachTask)=>{
        if(eachTask.id === clonedTask.id) return true;
        else return false;
    })

    // combine everything back
    const modifiedTasks = [...this.state.tasks.slice(0, indexToReplace), clonedTask, ...this.state.tasks.slice(indexToReplace +1),
    ];

    // change back the state
    this.setState({
        tasks: modifiedTasks, // replace latest tasks
        taskBeingEDITED: null  // tell render no task being edit
    })
}


// End of ProcessEditTask function


// Cancel Function

cancelEdit = () => {
    this.setState({
        taskBeingEDITED: null,
    })
}



// DELETE Function 

  //task is derived from the closure 
  deleteTask = (task) => {
    const indexToDelete = this.state.tasks.findIndex((eachTask) => {
      if (eachTask.id === task.id) return true;
      else return false;
    });

    // combine them and setState

    //combine them and set state
    const modifiedTasks = [
      ...this.state.tasks.slice(0, indexToDelete),
      ...this.state.tasks.slice(indexToDelete + 1),
    ];

    this.setState({
      tasks: modifiedTasks,
    });
  };



// Adding value={this.state.newTaskName} is 2-WAY BIND
// Whatever value inside newTaskName, I will just input in as it is, it will be the input box value.
// onChange - detect change: then call the updateFormField 
// update the newTaskName state 
// the name/value passed it to the VALUE of input
render(){
        return (
            <React.Fragment>

            {/*CREATE TASK */}

            <div>
                <label>Task Name: </label>
                <input type="text" name="newTaskName" value={this.state.newTaskName} 
                onChange={this.updateFormField}/>
                <button oClick={this.addTask}>Add Task</button>
            </div>

            <ul>
            {
                this.state.tasks.map((eachTask) => {
                // match eachTask id VS currently edited TASK id
                // taskBeingEDITED is obj TASK
                if(this.state.taskBeingEDITED && eachTask.id === this.state.taskBeingEDITED.id){
                    return (
                    // UI if matches 
                    <li key={eachTask.id}>
                        <input type="text" value={this.state.editedTaskName} name="editedTaskName"
                        onChange={this.updateFormField}/>
                        {/*Make some buttons to update and cancel for edit*/}
                        {/*Add onClick*/}
                        {/*ProcessEditTask - this function allow us to process the EDIT TASK*/}
                        <button onClick={this.ProcessEditTask}>Update</button>
                        <button onClick={this.cancelEdit}>Cancel</button>

                    </li>);
                }else{


                    return (
                        <li key={eachTask.id}>
                        {eachTask.description}
                        <input
                          type="checkbox"
                          checked={eachTask.done}
                          onChange={() => {
                            this.checkTask(eachTask);
                          }}
                        />

                    {/* use a closure to remember which task object */}
                    <button onClick={()=> {
                        this.beginEditTask(eachTask)
                    }}>Edit</button>

<button
                    onClick={() => {
                      this.deleteTask(eachTask);
                    }}
                  >
                    Delete
                  </button>
                </li>

);
}
})}
</ul>
</React.Fragment>
        )
    }   
    }

    // CHECKBOX // 
    // FUNCTION to CHECK status of CHECKBOX 
    // usually we use onChange - updateFormField
    // but it won't work well with our checkbox
    // it doesn't understand that state
    // as there is no name attached to checkbox 
    // hence we need create function - closure function
    // * CLOSURE *
    
    // this is closure ->  onChange={() => {}}/>
    // onChange you have the expression but I also want to execute
    // -> this.checkTask(eachTask);  < this function also
    // anonymous arrow function inside the closure function
    // -> this.checkTask(eachTask);  < this function also
    // this code will be sent to the checkTask function
    // go to checkTask to insert "eachTask" which is the 
    // task you have selected/checked

    // under else is where
    // Place entire <li> checkbox inside 



