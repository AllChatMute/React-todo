import Task from "./Task";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { clearTasks } from "../redux/slices/tasksSlice";

const TaskList: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="tasksBoard">
        <ul>
          {tasks.map((item) => (
            <Task key={item.id} {...item} />
          ))}
        </ul>
        <a id="clear" onClick={() => dispatch(clearTasks())}>
          Clear
        </a>
      </div>
    </>
  );
};

export default TaskList;
