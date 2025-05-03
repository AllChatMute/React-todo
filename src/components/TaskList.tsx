import Task from "./Task";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { clearTasks, fetchTasks } from "../redux/slices/tasksSlice";
import { useEffect } from "react";

const TaskList: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const fetchTodos = async () => {
    try {
      const data = await dispatch(fetchTasks());
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  });
  return (
    <>
      <div className="taskBoard">
        <ul className="list-none">
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
