import React, { useState } from "react";
import TodoLists from "./TodoLists";

/* const App = ()=>{
    const [itemList, inputList]= useState("");
    const [Items,itemSet] = useState([]);
    const itemEvent = (event)=>{
        inputList(event.target.value);



    };
    const listofItems = ()=>{
        console.log("clicked");
        itemSet((newItem)=>{
            return [...newItem,itemList];
        });
        itemList("");
         
    };
    
    
    return(
     <>
    <div className="main_div">
        <div className="inner_div">
            <br/>
          <h1>To-do items</h1>
          <br/>
          
          <input type="text" placeholder="Add items " onChange={itemEvent} />
          <button onClick={listofItems}>+</button>
        <ol>
            {/* <li>buy some apples</li> */

//            { Items.map((Itemval)=>{
//            return <li>{Itemval}</li>
//          })}
//        </ol>
//
//        </div>
//    </div>
//    </>
//
//    );
//};

const App = () => {
    const [itemList, listSet] = useState("");
    const [itemSet, inputList] = useState([]);
    const items = (event) => {
        listSet(event.target.value);
    }
    const listofItems = () => {
        inputList((finalItem) => {
            return [...finalItem, itemList];
        })
        listSet("");


    }
    return (
        <>
            <div className="main_div">
                <div className="inner_div">
                    <br />
                    <h1>To do items</h1>
                    <br />
                    <input type="text" placeholder="Add items here"
                        value={itemList} onChange={items} />
                    <button onClick={listofItems}>+</button>
                    <ol>
                        {/* <li>{itemList} </li> */}

                        {itemSet.map((itemVal) => {
                            return <TodoLists text={itemVal} />
                        })
                        }
                    </ol>
                </div>
            </div>

        </>
    )
}



export default App;