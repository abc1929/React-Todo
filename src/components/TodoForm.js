import React from "react";

class TodoForm extends React.Component {
   constructor(props) {
      super();
      this.state = {
         task: "",
      };

      // this.addItem = props.addItem;
   }

   render() {
      return (
         <div>
            <input
               type="text"
               name="todoname"
               placeholder="Task Name"
               onChange={(e) => this.setState({ task: e.target.value })}
            />
            <button
               onClick={() => {
                  this.props.addItem(this.state.task);
                  this.setState({ task: "" });
                  document.querySelector("input").value = "";
               }}
            >
               Add Todo
            </button>
            <button onClick={() => this.props.clear()}>
               {" "}
               Clear Completed{" "}
            </button>
         </div>
      );
   }
}

export default TodoForm;
