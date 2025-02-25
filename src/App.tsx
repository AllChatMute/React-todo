import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    <>
      <div className="w-100 flex justify-center flex-col m-auto">
        <h1 className="text-2xl text-white text-center">TO-DO LIST</h1>
        <TaskInput />
        <TaskList />
      </div>
    </>
  );
};

export default App;
