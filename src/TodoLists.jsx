import React from "react";
const TodoLists = (props) => {
    return(
    <>
        <div className="todo_style">
        <i class="fas fa-minus-circle"></i>
             <li>{props.text}</li>
        </div>
    </>
    );
}
export default TodoLists;