// 8.1 Component Lifecycle

import React from 'react'
import Axios from 'axios'

// Create JSON files shops.json & events.json in PUBLIC
// load data with Axios (.JSON file)
// make sure install axios - npm install axios
// import AXIOS

// Create component, remember close bracket at the end
export default class LifeCycle extends React.Component{

    state = {
        searchTerms: "",
        events: [],
        shops: []
    }

    // (async) function to load data from .json files dynamically

    loadData = async () => {
        // either reference any kind of URL/file
        // if in terms of file -> put it into public folder
        // react will look into public folder if reference using relative pathing
        // e.g., </filename>

        // for SHOPS
        const shopResponse = await Axios.get("shops.json");
        console.log(shopResponse.data); // gives us nice data output


        // for EVENTS
        const eventResponse = await Axios.get('events.json');
        console.log(eventResponse.data);

        //optimize our setState by combining it together
        // setState itself is async function, take sometime to set State
        // accumulate setting of state together
        // do update of data of our UI in render
        this.setState({
            shops: shopResponse.data.shops,
            events: eventResponse.data.events

        })

        // update our state using setState for EVENTS

    }

    render(){
        return (<React.Fragment>
                <h1>TAKA Mall Directory</h1>
                <button onClick={this.loadData} className= "btn btn-dark">Load</button>

            {/*update data of our UI in render */}
                <h2>Shops</h2>
                <div className='row'>
                {
                    this.state.shops.map(eachShop => {
                        return (
                            <div className="card mb-4" key={eachShop.id}>
                                <div className='card-body'>
                                <div className='card-title'>{eachShop.name}</div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </React.Fragment>
            )
        }
    }












