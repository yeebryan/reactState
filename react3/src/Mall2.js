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
        "type":"Supermarket",
        },
        ],
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


        /*
        for (let s of this.state.shops) {
        jsx.push(<div key={s.id}>
        <h3>{s.name}</h3>
        <h4>Unit: {s.floor}--{s.unit}</h4>
        <strong>Type: </strong>{s.type}
        </div>)
        }
        */

        // upgrade to BOOTSTRAP

        for (let shop of this.state.shops) {
            jsx.push(
            <div key={shop.id} className="card col-12 col-md-4 mb-3">
                <div className="card-body">
                    <h3 className="card-title">{shop.name}</h3>
                    <div className="card-text">
                        <h4>
                            Unit: {shop.floor}-{shop.unit}
                        </h4>
                        <strong>Type: </strong>{shop.type}
                    </div>
                    </div>
                </div>

                //for loop
        )}
        return (<div className="row">{jsx}</div>);
        // return our JSX content
        }






    // render method 
    // since using class-based
    // return always needed
    // remember JSX element e.g., <h1>Hello World</h1> is JS object
    // hence variable can be assigned and can be store in array

render() {
    return <React.Fragment>
        <h1>ROSEWOOD Mall Directory</h1>
        <h2>Shops</h2>
        {/* 1. // we want everything inside a ul and tap on a function */}
            {this.renderShops()}

        {/*2. show events in a div  */}
        <h2>ROSEWOOD Mall Directory - using MAPPING</h2>
        <div className="row">
        {
            // use MAP = for each shop, print out each and every one 
            // and enclose it nicely with BOOTSTRAP card
            this.state.shops.map((shop) => (
                // INSERT KEY
                <div key={shop.id} className="card col-12 col-md-4 mb-3">
                <div className="card-body">
                    <h3 className="card-title">{shop.name}</h3>
                    <div className="card-text">
                        <h4>
                            Unit: {shop.floor}-{shop.unit}
                        </h4>
                        <strong>Type: </strong>{shop.type}
                    </div>
                    </div>
                </div>
            ))   
            
        }
    </div>
    </React.Fragment>;
  }
}