import React from "react";

const Todo = (props) => {
   return (
      <div className={props.i.completed ? "card done" : "card"}>
         <p key={props.i.id}>{props.i.task}</p>
         <button onClick={() => props.toggleComplete(props.i)}>
            {props.i.completed ? "Set Incomplete" : "Set Complete"}
         </button>
      </div>
   );
};

export default Todo;
