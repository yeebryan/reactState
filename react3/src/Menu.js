// 7.2 MENU
import React from "react";

// Allows us to display an array using JSX elements


// create class-based component

export default class Menu extends React.Component {
state = {
    // one array - Menu
    Menu: [
        {
        "_id": 101,
        "name":"Chicken Udon Soup",
        "price": 11.99,
        "ingredients":["chicken stock", "udon", "chicken breast"]
        },
        {
        "_id": 203,
        "name":"Salmon Teriyaki Don",
        "price": 9.9,
        "ingredients":["salmon", "rice", "soya sauce"]
        },
        {
        "_id": 401,
        "name":"Raw Salmon Slices",
        "price": 15.99,
        "ingredients":["salmon"]
        },
        {
        "_id": 402,
        "name":"Chicken Miso Ramen",
        "price": 15.99,
        "ingredients":["chicken", "miso", "ramen"]
        }
        ],
    };


    // standalone function to deal with ingredient no comma

    renderIngredient(ingredients){
         //cycle thru ingredients and add JSX to them
            // because printing blindly is ugly
            // setup base temp, ingredient with empty array
            let ingredientJSX = [];
            for(let eachIngredient of ingredients){
                ingredientJSX.push(<li key={eachIngredient}>{eachIngredient}</li>)
            } // outcome is a temp arr ingredient
            return ingredientJSX
    }


    renderMenu(){
        //setup base temp array
        // we will add jsx items inside using push

        let items = [];

        for(let eachItem of this.state.Menu){

            // add second loop to add comma for ingredient

            //cycle thru ingredients and add JSX to them
            // because printing blindly is ugly
            // setup base temp, ingredient with empty array
            let ingredient = [];
            for(let eachIngredient of eachItem.ingredients){
                ingredient.push(<li key={eachIngredient}>{eachIngredient}</li>)
            } // outcome is a temp arr ingredient



            items.push(
                <div key={eachItem._id}>
                    <h3>{eachItem.name}</h3>
                    <h4>{eachItem.price}</h4>
                    <ul>{ingredient}</ul>
                </div>


            )
        }
        return items;
    }

render() {
    return ( 
    <React.Fragment>
            {this.renderMenu()}

            {/* DO MAPS for complex object*/}
            {
                this.state.Menu.map(item=>
                 <div key={item._id}>
                     <h3>{item.name}</h3>
                     <h4>{item.price}</h4>
                     <ul>
                        {item.ingredients.map((eachIngredient, index)=> (<li key={index}>{eachIngredient}</li>))}
                     </ul>
                </div>)
            }
    </React.Fragment>);
  }
}