//1. display form to add item. text boxes and button
//2. ensure 2 way binding works

import React from "react";
export default function EditItem(props) {
  return (
    <React.Fragment>
      <div className="item-info">
      <h2>Add New Boba Item</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="editedItemName" value={props.name} onChange={props.update} />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" name="editedItemPrice" value={props.price} onChange={props.update} />
      </div>
      <div>
        <label>Sugar:</label>
        <input type="text" name="editedItemSugar" value={props.sugar} onChange={props.update}/>
      </div>
      {/* closure function */}
      {/* sending Index back over to finishEdit in Boba.js */}
      <button onClick={() => {props.confirmUpdate(props.index)}}>Update</button>
      <button onClick={props.cancelUpdate}>Cancel</button>
      </div>
    </React.Fragment>
  );
}
