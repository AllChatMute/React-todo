import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    <>
      <div className="main">
        <h1>TO-DO LIST</h1>
        <TaskInput />
        <TaskList />
      </div>
    </>
  );
};

export default App;
