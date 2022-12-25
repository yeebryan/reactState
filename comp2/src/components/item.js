// display of ITEM jsx
// change to const declaration 

// we use const over here in order to use arrow function
// props is derived from BobaTeaShop
// remember to apply export at the end
const Item = (props) => {

    // port the entire RenderItem from 'BobaTeaShop' to here
    // normally we change item. to props.
    // but we take in an item obj
    // we don't need key={props.item.id}, this is handled in BobaTeaShop.js
    return(
        // can see under CHROME > PROPS > ITEMS
        <div className="item-info">
            <h2>Name: {props.item.name}</h2>
            <h3>Price: {props.item.price}</h3>
            <h4>Sugar level: {props.item.sugar}</h4>
            <button onClick={() => props.beginEdit(props.item)}>Edit</button>
            {/* CREATE DELETE! - By Index*/}
            <button onClick={() => props.delete(props.index)}>Delete By Index</button>
            {/* CREATE DELETE! - By Item*/}
            <button onClick={() => props.deleteByItem(props.item)}>Delete By Item</button>


        </div>
        )
}


export default Item;