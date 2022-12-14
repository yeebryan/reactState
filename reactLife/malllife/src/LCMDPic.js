// This is a follow up for the Life Cycle Mount Data 
// BUT With Images, Lottie player
// Add a my-lottie.json file with the desired animation from their website
// IMPORT Lottie and the JSON

// CHECK SHOPS.JSON on how to add IMAGES

// IMPORT LOTTIE 

import React from 'react'
import axios from 'axios'
import Lottie from "react-lottie-player"
import lottieJson from "./hamster.json"


// Create component, remember close bracket at the end of program
export default class LCMDPic extends React.Component{
// because componentDidMount is only called after the first render
// make sure the state contains correct info or show loading 
// because data haven't been retrieved yet
    state = {
        events: [],
        shops: [],
        // add one more state, which works like a BOOLEAN state
        isDataLoaded: false,
        // in the start, nothing is loaded hence FALSE
    };


// We going to do a conditional render in RENDER / UI
// if it is false - we show UI (isDataLoaded)
// else - we show simple loading text

async componentDidMount(){
    // place in all axios calls
    // make api calls that are very useful in my initial UI showcase
    console.log(".....load.....");

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
        events: eventResponse.data.events,
        isDataLoaded: true // now is TRUE

    })
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


// We going to do a conditional render in RENDER / UI
// if data is still loading in ComponentDidMount - show loading text(isDataLoaded)
// else - we show UI


render() {
    return (
      <React.Fragment>
        <h1>TAKA Mall Directory</h1>
        <h2>Shops</h2>
        <div className="row">
          {this.state.isDataLoaded ? (
            <React.Fragment>
              {this.state.shops.map((eachShop) => {
                return (
                  <div className="col-3" key={eachShop.id}>
                    <div className="card mb-4 shadow-sm">
                      <img src={eachShop.img} class="card-img-top" alt="..." />
                      <div className="card-body">
                        <div className="card-title">
                          <h3>{eachShop.name}</h3>
                        </div>
                        <ul>
                          <li>
                            Unit: {eachShop.floor}-{eachShop.unit}
                          </li>
                          <li>Type: {eachShop.type}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="row">
                <h2>Events</h2>
                {this.renderEvents()}
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* 
              <div className="card mb-4" key="1">
                <div className="card-body">
                  <div className="card-title">
                    <h3>Loading.....</h3>
                  </div>
                  <ul>
                    <li>Unit: Loading.....</li>
                    <li>Type: Loading.....</li>
                  </ul>
                </div>
              </div>
          */}
              <div className="row">
              <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  className="col-3"
                />
                <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  className="col-3"
                />
                <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  className="col-3"
                />
                <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  className="col-3"
                />
              </div>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}













