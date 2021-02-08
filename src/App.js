import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./style.css";

class App extends React.Component {
   // you will need a place to store your state in this component.
   // design `App` to be the parent component of your application.
   // this component is going to take care of state, and any change handlers you need to work with your state

   constructor() {
      super();
      this.state = {
         tasks: JSON.parse(localStorage.tasks),
         searchterm: "",
      };
   }

   addItem = (taskname) => {
      if (taskname === "") {
         return;
      }

      const newitem = {
         task: taskname,
         id: Math.abs((Math.random() * 56345823453) >>> 2) + taskname, // sort of randomly get a ID
         completed: false,
         toggle: function () {
            this.completed = !this.completed;
         }, // for experiment
      };

      this.setState({ tasks: this.state.tasks.concat(newitem) });
   };

   toggleComplete = (ref) => {
      let targetindex = 0;
      while (true) {
         if (this.state.tasks[targetindex].id === ref.id) {
            break;
         }
         targetindex++;
         if (targetindex > this.state.tasks.length) {
            console.log("something went wrong");
            break;
         }
      }
      let newstate = [...this.state.tasks];
      newstate[targetindex].completed = !newstate[targetindex].completed;
      this.setState({ tasks: newstate });
   };

   clear = () => {
      const newstate = this.state.tasks.filter((i) => !i.completed);
      this.setState({ tasks: newstate });
   };

   filter = (tasks) => {
      return tasks.filter((i) => i.task.search(this.state.searchterm) !== -1);
   };

   render() {
      localStorage.tasks = JSON.stringify(this.state.tasks);
      return (
         <div className="outer">
            <h2>Welcome to your Todo App!</h2>

            <TodoForm addItem={this.addItem} clear={this.clear} />
            <input
               type="text"
               name="search"
               className="searchbar"
               placeholder="search"
               onChange={(e) => {
                  this.setState({ searchterm: e.target.value });
               }}
            />
            <TodoList
               tasks={this.filter(this.state.tasks)}
               toggleComplete={this.toggleComplete}
            />
         </div>
      );
   }
}

export default App;
