// React Lab 9 - CRUD

// Build toDo List 
// Ask user to 
// (1) add LIST of TASKS (2) MARK THEM AS DONE (3) DELETE/CHANGE TASK'S DESCRIPTION

import React from 'react'

export default class TaskList extends React.Component{


// declare states

state = {
    'tasks' :[
    
        {
            id: 1,
            description:'Walk the dog',
            done:false
            },
            {
            id: 2,
            description:'Water the plants',
            done:false
            },
            {
            id: 3,
            description:'Pay the bills',
            done:false
            }

    ],
    // Add state variable 
    'newTaskName': "",
    'taskBeingEdited': 0,  // keep track of ID of Task being edited, set to 0 to indicate no task being edited at the moment
    'modifiedTaskName': "", // this variable is for the text input
}


// function 
// Event Handling function
// Function that allows us to update state based on changes in a form
// receive an Event Object(holds )
updateFormField = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
    console.log(e.target.name)
}

// 2nd function

addTask = e => {
    // 1. create new task object
    let newTask = {
        'id': Math.random() * 10000 + 9999,
        'description': this.state.newTaskName,
        'done': false
    }
    // 2. add task to back of the task list
    let currentValues = this.state.tasks;
    console.log(`currentValues IS THIS: ${currentValues}`)

    // 2.1 clone out all tasks so far, and add new task at the back
    // React don't allow us to modify state directly HENCE CLONING!
    let modifiedValues = [...currentValues, newTask]

    // 2.2 update the state
    this.setState({
        'tasks': modifiedValues
    })
}


// 3rd Function

// to check a TASK as DONE
// we have to 
// 1. Find task that is being modified
// 2. Clone the task, 3. Mark task as Done
// 4. Clone the 'tasks' array 
// 5. Replace CLONED Task in the CLONED 'tasks' array at the position that it belongs to
// 6. SET CLONED 'tasks' back into the state


checkTask = (task_id) => {
    // 1. find task that is being modified 
    // for this, we use FILTER function

    let currentTask = 
    this.state.tasks.filter(t => t.id === task_id)[0]
    console.log(`THIS IS FILTER RESULT: ${currentTask}`)
    console.log(`This is task ID: ${task_id}`)

    // 2. Clone task
    let modifiedTask = {...currentTask};

    // 3. Modify task; if 'done' was false, invert to 'true'
    modifiedTask.done = !currentTask.done;

    // 4. Clone tasks array using map; return each task as it is,
    // if that task is not the one we are modifying.
    // if it is, then return modified task instead
    let modifiedTasksList = this.state.tasks.map( t => {
        if (t.id !== task_id) {
            return t;
            console.log(`t IS THIS LA: ${t}`)
        }
        else{
            return modifiedTask
        }
    })

    this.setState({
        'tasks': modifiedTasksList
    })
}


// 4th Function; DELETE

deleteTask = task_id => {
    // 1. Find Index of the Task
    let task_index = this.state.tasks.findIndex(t=> t.id === task_id);
    console.log(`TRIGGER DELETE - task_index is: ${task_index}`)
    // 2. Make a copy of the array, but skip over the task that we want to delete
    let modifiedTask = [
        ...this.state.tasks.slice(0, task_index), // stop at task_index
        ...this.state.tasks.slice(task_index + 1) 
    ];

    this.setState({
        tasks: modifiedTask
    });
}


// 5th function: Normal Task Display 
// return just the JSX to display task normally

displayTask = t => {

return(
    <li key={t.id}>
        {t.description}
        <input type="checkbox" value={t.description === true} 
        onChange={()=> {this.checkTask(t.id)
        }}
        />
        <button onClick={async ()=> {
            this.setState({
                taskBeingEdited: t.id,
                modifiedTaskName: t.description
            })
        }}
        >
        Edit
        </button>
        <button onClick={()=> this.deleteTask(t)}>
            Delete
        </button>
    </li>
)};

// 6th function to display edit form for the TASK
displayEditTask = t => {
    return (
        <li>
        <input type="text" name="modifiedTaskName" 
        value={this.state.modifiedTaskName} placeholder="Enter new description"
        onChange={this.updateFormField}
    />
    <button onClick={() => {this.updateTask(t.id);
    this.setState({taskBeingEdited: 0});
    }}
    >
    Update
    </button>
    </li>
    );
    };


    // 7th function: Update Task
    updateTask = task_id => {
        // 1. find the task that is being modified. For this, we use the filter function
        let currentTask = this.state.tasks.filter(t => t.id === task_id)[0];
        // 2. Clone the task
        let modifiedTask = { ...currentTask };
        // 3. Modify the task description
        modifiedTask.description = this.state.modifiedTaskName;
        // 4. Clone the tasks array using map; return each task
        // as it is if that task is not the one we are modifying. if
        
        // it is, then return the modified task instead.
let modifiedTasksList = this.state.tasks.map(t => {
    if (t.id !== task_id) {
    return t;
    } else {
    return modifiedTask;
    }
    });
    this.setState({
    tasks: modifiedTasksList
    });
    };
    


    render() {
        return (
        <React.Fragment>
        <h1>Todo List</h1>
        <ul>
        {this.state.tasks.map(t =>
        this.state.taskBeingEdited !== t.id
        ? this.displayTask(t)
        : this.displayEditTask(t)
        )}
        </ul>
        <h2>Create new Task</h2>
        <div>
        <label>Task Description</label>
        <input
        type="text"
        name="newTaskName"
        value={this.state.newTaskName}
        onChange={this.updateFormField}
        />
        <button onClick={this.addTask}>Add</button>
        </div>
        </React.Fragment>
        );
        }
        }
        