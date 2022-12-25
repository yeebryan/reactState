# Creating Boba CRUD using Managed Components

1. Create BobaTeaShop Class
2. Import into App.js
3. Give some items to BobaTeaShop ("state")
4. Render some items using map  (this.state.items.map(eachItem))
5. upgrade our render to a function RenderItems = (item) => {} // which is a arrow function 

##### upgrade this #####

{this.state.items.map(eachItem=>{
    return (
<div key={eachItem.id}>
    <h2>Name: {eachItem.name}</h2>
    <h3>Price: {eachItem.price}</h3>
    <h4>Sugar level: {eachItem.sugar}</h4>
    <button>Edit</button>
</div>)
   
   this one turns to:

    return this.renderItem(eachItem);




#### to this RenderItem function ####
    // simple render function that churns each item JSX

``
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
``



> App.JS
    |
    |
> BobaTeaShop (State, Logic here)
----/------\------------
---/--------\-----------
-- pass through props----
--/----------\-----------
Add.js, Edit.js, Item.js


6. Throw RenderItem's eachItem into a prop

need to create a file > set up our props > throw our item into the props

Firstly, create our component folder
> keep all our UI, JSX content

> Create Item.js to contain our renderItem

> Then in BobaTeaShop's render:

replace: 

  {this.state.items.map(eachItem=>{
                return this.renderItem(eachItem);
  })}

with this: 

      {this.state.items.map((eachItem)=>{
                return <Item 
                item={eachItem}
                key={eachItem.id}
                />
            })}

// Create a 'Item' function inside / components folder if doesn't exist. This allows us to keep JSX separate.

7. Place display JSX content into Item.js
8. Change render to use 'Item' component and send 'eachItem' as a prop. Port renderItem function over to 'Item' component
9. Change value to using 'props.item'
10. Import 'item' into 'BobaTeaShop'
11. Test test  ~~ whether each is rendered properly
12. Put key into 'BobaTeaShop` iteration instead of 'item'
13. Create an arrow function handle form Field 'updateFormField'
14. Create a function beginEdit that takes in an item and updates the state of the currently edited item
15. Update state to have edit states
    . 'editedItemName', 'editedItemPrice', 'editedItemSugar'
    . 'itemBeingEdited'
16. Use a closure inside the onClick on 'Item' 
    ```javascript 
    onClick={() => props.beginEdit(props.item)}

17. But's let - addItem.js
18. EditItem.js