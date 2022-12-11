// Lab 7.1 - List Rendering 

import React from "react";

// Allows us to display an array using JSX elements

// MallDirectory - emulate a shopping mall directory application 
// user can see a list of shops and filter shops by categories

// create class-based component

export default class MallDirectory extends React.Component {
state = {
    // one array - event
    events: [
        "10% off at Coffee beans",
        "Caroling at Don Don Donki",
        "Free parking vouchers for spending above $100.00",
    ],
    // one array - shops
    shops: [
        "Macdonalds",
        "Coffee Beans",
        "Uniqlo",
        "Don Don Donki",
        "Giants Supermarket",
    ],
    };


    // Adding functions

    // Create array of JSX elements (Shops)
    // since we can't do 'for loop' in the render area, we do it here
    // renderShop will go through the SHOPS state property and
    // for each SHOP, create a JSX element and add it to the JSX array.
    // Each element always have a KEY - uniquely identifies created elements
    // USed by REACT for certain optimization such as CRUD
    renderShops(){
        let jsx = [];
        // converting array into JSX 
        for (let shop of this.state.shops){
            // KEY is 
            //jsx.push(<li key={s}></li>) - this will just give bullet points with blank shops
            jsx.push(<li key={shop}>{shop}</li>)
            // key={s} gives numbering to shops 
            // {s} gives the shops name
            console.log(`hello duck ${jsx}`)
            // 
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
        {/* 1. // we want everythign inside a ul and tap on a function */}
        <ul>
            {this.renderShops()}
        </ul>

        {/*2. show events in a div  */}
        <h2>Events</h2>
        {
            this.state.events.map((event) => (
                <div
                    style={{
                        border: "1px solid black",
                        margin: "5px",
                        padding: "5px"
                    }}
                >
                    {event}
                </div>
            ))   
        }

    </React.Fragment>;
  }
}