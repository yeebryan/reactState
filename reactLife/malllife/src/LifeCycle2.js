// 8.1 Component Lifecycle UPGRADED 

// UPGRADED INFO:
// 1. EVENTS FUNCTION ADDED

// LOAD data through JSON / axios <SIMPLE>

import React from 'react'
import axios from 'axios'


//* 
// We need to load data dynamically before the page is fully rendered
// this is where the react lifecycle comes in
// we tap on componentDidMount() function
// Once componentDidMount() "mounted", we can actually modify something
// we can in every API calls inside componentDidMount before actual render happen
// Makes it more natural before data fully loaded we can see it (esp when network slow)
// HENCE, WHAT WE WANT TO IS LOADING STIMULATION (X)

// [Lifecycle]
// 1. Components are created through the constructor
// What is constructor?
// 2. Mounting is when component is ready
// 3. Component is rendered once
// 4. ComponentDidMount will be called (after component is rendered once)
// --> It will never be called again
// 5. Update is called
// 6. Unmounting will be called (may happen)

//*

// Create JSON files shops.json & events.json in PUBLIC
// load data with Axios (.JSON file)
// make sure install axios - npm install axios
// import AXIOS

// Create component, remember close bracket at the end
export default class LifeCycle extends React.Component{

    state = {
        searchTerms: "",
        events: [],
        shops: [],
    };

    // (async) function to load data from .json files dynamically

    loadData = async () => {
        // either reference any kind of URL/file
        // if in terms of file -> put it into public folder
        // react will look into public folder if reference using relative pathing
        // e.g., </filename>

        // for SHOPS
        const shopResponse = await axios.get("shops.json");
        console.log(shopResponse.data); // gives us nice data output


        // for EVENTS
        const eventResponse = await axios.get('events.json');
        console.log(eventResponse.data);

        //optimize our setState by combining it together
        // setState itself is async function, take sometime to set State
        // accumulate setting of state together
        // do update of data of our UI in render
        // update our state using setState for EVENTS
        this.setState({
            shops: shopResponse.data.shops,
            events: eventResponse.data.events

        })
    }

    // X
    // Lifecycle
    // After 1st time a component instance is loaded/rendered
    // It will call the ComponentDidMount
    componentDidMount(){
        // place in all axios calls
        console.log(".....load.....");
    }




    renderEvents(){
        let elements = []; // simple array
        // SIMPLE FOR LOOPS TO CYCLE THRU ALL STATE EVENTS
        for(let eachEvent of this.state.events){
            //push in some UI, can put in render instead
            elements.push(<li className='list-group-item' key={eachEvent}>{eachEvent}</li>)
        }

        return (<ol className="list-group">{elements}</ol>)
    }

    // RENDER CORNER - UI

    render(){
        return (
        <React.Fragment>
                <h1>TAKA Mall Directory</h1>
                <button onClick={this.loadData} className= "btn btn-dark">Load</button>

            {/*update data of our UI in render */}
                <h2>Shops</h2>
                <div className='row'>
                {this.state.shops.map((eachShop) => {
                        return (
                            <div className="card mb-4" key={eachShop.id}>
                                <div className='card-body'>
                                <div className='card-title'>{eachShop.name}</div>
                                <ul>
                                    <li>{eachShop.floor}-{eachShop.unit}</li>
                                    <li>Type: {eachShop.type}</li>
                                </ul>
                                </div>
                            </div>
                        );
                    })
                }
                </div>
                <div className="row">
                    <h2>Events</h2>
                    {this.renderEvents()} {/*ALWAYS CALL IT HENCE () */}
                </div>
            </React.Fragment>
            )
        }
    }












