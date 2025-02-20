import Task from "./Task";

const TaskList: React.FC = () => {
  return (
    <>
      <div className="tasksBoard">
        <ul>
          <Task />
          <Task />
          <Task />
        </ul>
        <a id="clear">Clear</a>
      </div>
    </>
  );
};

export default TaskList;
