// Lab 7B - List Rendering of Complex Objects
// Lab 7.1 (MallDirectory) deals with array consisting of simple strings
// What if data is more complex consisting of objects instead of strings
// USE Bootstrap
// TO see where ur bootstrap is
// CAN'T FIND THEN - npm install bootstrap
// go to NODE_Module > bootstrap > dist > css > bootstrap.min.css
// * NOTE WHENEVER We do a INSTALL, it will go under NODE_MODULE
import React from "react";

// Allows us to display an array using JSX elements


// create class-based component

export default class Mall2 extends React.Component {
state = {
    // one array - event
    events: [
        "10% off at Coffee beans",
        "Caroling at Don Don Donki",
        "Free parking vouchers for spending above $100.00",
    ],
    // one array - shops
    shops: [
        {
        "id": 1, // unique id for shop can be used as KEY later on
        "name":"Macdonalds",
        "floor": 1,
        "unit":202,
        "type":"F&B"
        },
        {
        "id":2,
        "name":"Coffee Beans",
        "floor": 2,
        "unit":301,
        "type":"F&B"
        },
        {
        "id": 3,
        "name":"Uniqlo",
        "floor": 1,
        "unit":101,
        "type":"Clothing"
        },
        {
        "id": 4,
        "name":"Don Don Donki",
        "floor": 5,
        "unit":103,
        "type":"Supermarket"
        }
        ]
        ,
    };


    // Adding functions

    // Create array of JSX elements (Shops)
    // since we can't do 'for loop' in the render area, we do it here
    // renderShop will go through the SHOPS state property and
    // for each SHOP, create a JSX element and add it to the JSX array.
    // Each element always have a KEY - uniquely identifies created elements
    // USed by REACT for certain optimization such as CRUD
    renderShops() {
        let jsx = [];
        for (let s of this.state.shops) {
        jsx.push(<div key={s.id}>
        <h3>{s.name}</h3>
        <ul>
        <li>Floor: {s.floor}</li>
        <li>Unit: {s.unit}</li>
        <li>Type: {s.type}</li>
        </ul>
        </div>)
        }
        return jsx;
        }






    // render method 
    // since using class-based
    // return always needed
    // remember JSX element e.g., <h1>Hello World</h1> is JS object
    // hence variable can be assigned and can be store in array

render() {
    return <React.Fragment>
        <h1>Mall Directory</h1>
        <h2>Shops</h2>
        {/* 1. // we want everything inside a ul and tap on a function */}
            {this.renderShops()}

        {/*2. show events in a div  */}
        <h2>Events</h2>
        {
            this.state.events.map((event) => (
                <div
                    style={{
                        border: "1px solid black",
                        margin: "5px",
                        padding: "6px"
                    }}
                >
                    {event}
                </div>
            ))   
        }

    </React.Fragment>;
  }
}