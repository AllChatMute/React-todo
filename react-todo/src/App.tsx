import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <h1>TO-DO LIST</h1>
        <form className="" action="index.html" method="post">
          <input type="text" placeholder="new task" name="task"></input>
          <button type="submit">
            <strong>ADD</strong>
          </button>
        </form>
        <div className="tasksBoard">
          <ul>
            <li>
              <span className="delete">×</span>
              <input type="checkbox"></input>
              <label>Vanilla JavaScript</label>
            </li>
            <li>
              <span className="delete">×</span>
              <input type="checkbox"></input>
              <label>Vue.js</label>
            </li>
            <li>
              <span className="delete">×</span>
              <input type="checkbox"></input>
              <label>React.js</label>
            </li>
            <li>
              <span className="delete">×</span>
              <input type="checkbox"></input>
              <label>Node.js</label>
            </li>
          </ul>
          <a id="clear">Clear</a>
        </div>
      </div>
    </>
  );
}

export default App;
