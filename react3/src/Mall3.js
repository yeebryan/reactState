import React from 'react';


// 7.3 Client Search-bar
// Thought process
// Step 1. Add Input Box for Search as part of UI
// Step 2. Add in State >> key "searchTerms"
// Step 3. Setup 2-Way Binding for Input Box / User actually key in blah ....
// Step 4. Setup and Modify Loop To Check on State.ShopName
// and Filter according based on search terms
// Step 5. Check for conditionals (upper/lowercase or any other edge cases-> How??)

// remember the class component close bracket needs to be at the bottom
export default class Mall3 extends React.Component {

    // data copied from lab sheet
    // add in key "searchTerms"


state = {
    searchTerms: "",
    shops: [
        {
        id: 1, // unique id for shop can be used as KEY later on
        name:"Macdonalds",
        floor: 1,
        unit: 202,
        type:"F&B",
        },
        {
        id:2,
        name:"Coffee Beans",
        floor: 2,
        unit:301,
        type:"F&B",
        },
        {
        id: 3,
        name:"Uniqlo",
        floor: 1,
        unit:101,
        type:"Clothing",
        },
        {
        id: 4,
        name:"Don Don Donki",
        floor: 5,
        unit:103,
        type:"Supermarket",
        },
        ],

};


// Set up IF statement in order to make search works
// As we cycle/render through, R we matching what is inside the searchTerms
renderShops(){
    let jsx = [];


    /*
    // shop object are complex 
    for(let shop of this.state.shops){
        jsx.push(<div>
            <h3>{shop.name}</h3>
            <h3>{shop.floor}-{shop.unit}</h3>
            <strong>Type: </strong> {shop.type}
        </div>)
    }
    */

    // this for loop includes if statement
    // filter and check based on search terms
    // then tap on bootstrap card layout
    // check that does the shop name have what is inside the searchTerms - 77
    // if it satisfy it will push all the shop.name, shope.floor,unit, type into temporary array, JSX
    // As right now, search bar is case-sensitive, we change it by amending if-statement
    // Next, make app nicer by Bootstrap - card

    for(let shop of this.state.shops){
        if (
            shop.name.toUpperCase().includes(this.state.searchTerms.toUpperCase())
          ) {
        jsx.push(
        <div className="card mb-4" key={shop.id}>
            <div className='card-body'>
            <h3 className="card-title">{shop.name}</h3>
            <h3>{shop.floor}-{shop.unit}</h3>
            <strong>Type: </strong> {shop.type}
        </div>
        </div>
        );
      }
    }
    return jsx;
}



    render() {
        return (<React.Fragment>
            <h1>Panda3 Mall Directory</h1>
            {/* Accept input from user - 63*/}
            {/* Set up our 1 WAY bind - 63*/}
            {/* Every time Input Box, i type in something, it will trigger onChange - 64 66 */}
            {/* Then it will modify the searchTerms/state 66 */}
            {/* Remember to setState - 65 */}
            <input type="text" value={this.state.searchTerms}
                onChange={(event) =>{
                    this.setState({                        
                        searchTerms: event.target.value,
                    });
                }} className="form-control mb-4"
            />
            {this.renderShops()}
        </React.Fragment>)
    }
}