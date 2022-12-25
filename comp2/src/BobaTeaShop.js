// class by itself 

import React from 'react';
import AddItem from './components/AddItem';
import Item from './components/item'; // to use our ITEM
import EditItem from './components/EditItem';

export default class BobaTeaShop extends React.Component{
    state = {
        items:[
        {
            id: 1,
            name: "Brown Sugar Milk Tea with Pearls",
            price: 5.5,
            sugar: 4

        },
        {
            id: 2,
            name: "Green Tea with Pearls",
            price: 4.5,
            sugar: 2
        },
        {
            id: 3,
            name: "Oolong Peach with Aiyu Jelly",
            price: 4.5,
            sugar: 2.
        },
        ],
        itemBeingEdit: {}, // false change to {} obj, default is empty, when clicked then filled with item obj
        newItemName: "",
        newItemPrice: "",
        newItemSugar: "",
        // our state is always our holding content
        editedItemName: "",
        editedItemPrice: "",
        editedItemSugar: "",
        

    };

    // 1. click on EDIT btn
    // 2. store item values
    // 3. text boxes values will come from here
    // hold currently edited object when user clicks on EDIT button
    // user clicks on this button, send a closure back that contains props.item
    // using props.beginEdit function

    beginEdit = (item) => {
        this.setState({
            itemBeingEdit: item, // when click, the state is updated with an object ItemBeingEdit
            editedItemName: item.name,
            editedItemPrice: item.price,
            editedItemSugar: item.sugar,
        })
    }

    //add new item
    // use spread operator

    addNewItem = () => {
        const newItem = {
            id: Math.floor(Math.random() * 10000 + 1),
            name: this.state.newItemName,
            price: this.state.newItemPrice,
            sugar: this.state.newItemSugar,
        }   

        // set back state, to update state values
        // spread current items, insert in new item at the last
        this.setState({
            items: [...this.state.items, newItem],
        })
        console.log(`new Item inserted: ${newItem.id}`)
    }


    // binding start!
    // evaluate form name
    // updates state based on form name
    updateFormField = (event) => {
        this.setState({
        [event.target.name] : event.target.value
        })
    }

    // confirm Edit
    // index is derived from map function
    // will have index of the item being edited
    finishEdit = (index) => {
        const modifiedItem = {
            id: this.state.itemBeingEdit.id,
            name: this.state.editedItemName,
            price: this.state.editedItemPrice,
            sugar: this.state.editedItemSugar
        }
        // spread
        // create temp array and replace 1 that was edited
        const updatedItem = [...this.state.items.slice(0, index), modifiedItem, ...this.state.items.slice(index +1)]
    
        // update latest items
        // reset 'edit' holding item and states
        this.setState({
            items: updatedItem,
            itemBeingEdit: {},
            editedItemName: "",
            editedItemPrice: "",
        })
    }


    // delete by index

    delete = (index) => {
        this.setState({
            items:[
            ...this.state.items.slice(0, index),
            ...this.state.items.slice(index +1),
        ]
        })
    }

    // delete by item (findIndex)
    // there can be no index to be found which may lead to error
    // hence if statement needed

    deleteByItem = (itemToDelete) => {
        const indexToDelete = this.state.items.findIndex(
            (eachItem) => eachItem.id === itemToDelete.id
        )


        // now we know our item's index, we can SET STATE!
        // execute updates only when index is found
        if(indexToDelete !== -1) {
        this.setState({
            items:[
            ...this.state.items.slice(0, indexToDelete),
            ...this.state.items.slice(indexToDelete +1),
        ]
        })}

    }



    // simple render function that churns each item JSX
    renderItem = (item) => {
        return(
        <div key={item.id}>
            <h2>Name: {item.name}</h2>
            <h3>Price: {item.price}</h3>
            <h4>Sugar level: {item.sugar}</h4>
            <button>Edit</button>
        </div>
        )
    }





    render(){
        return (
        <React.Fragment>
            <h1>Panda Boba Tea</h1>


            {// initial render option with separating JSX
            /* 
            {this.state.items.map(eachItem=>{
                return this.renderItem(eachItem);
            })}
            */}
            
            {/* Each part of map returns, uses an item instance.
                Values are generated from the props that is sent over to them */}

                {/* Second way to call with Index in ref. to FinishEdit */}
                {/* For every map item, we can tap into the Index */}
            {this.state.items.map((eachItem, index)=>{
                
                if(this.state.itemBeingEdit && eachItem.id === this.state.itemBeingEdit.id){
                    // here for EditItem.js
                   return <EditItem
                        key={eachItem.id}
                        index={index}
                        name={this.state.editedItemName}
                        price={this.state.editedItemPrice}
                        sugar={this.state.editedItemSugar}
                        update={this.updateFormField}
                        // cancel editing
                        cancelUpdate={() => {
                            this.setState({
                                itemBeingEdit: {} // when clicked, current holding object itemBeingEdit is reset
                            })
                        }}
                        // confirm edit finish
                        confirmUpdate ={this.finishEdit}
                    />
                }else{

                    return ( 
                <Item 
                item={eachItem}
                key={eachItem.id}
                beginEdit={this.beginEdit}
                index={index}
                delete={this.delete}
                deleteByItem={this.deleteByItem}
                />
                );

                }
                
                
            })}
            <AddItem
                name={this.state.newItemName}
                price={this.state.newItemPrice}
                sugar={this.state.newItemSugar}
                update={this.updateFormField}
                create={this.addNewItem} // send over to AddItem.js props.create, once onClick will trigger AddNewItem function
            
            />

        </React.Fragment>
        )
    }
}