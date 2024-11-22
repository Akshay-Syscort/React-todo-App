import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";

function App() {
  return (
    <div>
      <AppName></AppName>
      <AddTodo></AddTodo>

      <div class="container text-center">
        <div class="row">
          <div class="col">By milk</div>
          <div class="col">1/1/2002</div>
          <div class="col">
            <button type="button" class="btn btn-danger">
              Danger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
