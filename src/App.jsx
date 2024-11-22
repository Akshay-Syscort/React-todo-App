import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";

function App() {
  return (
    <div>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItem1></TodoItem1>
    </div>
  );
}

export default App;
