// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
   // constructor() {
   //    super();
   // }

   render() {
      return (
         <div className="cardwrapper">
            {this.props.tasks.map((i) => (
               <Todo
                  i={i}
                  toggleComplete={this.props.toggleComplete}
                  key={i.id}
               />
            ))}
         </div>
      );
   }
}

export default TodoList;
