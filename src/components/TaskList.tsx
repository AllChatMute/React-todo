import Task from "./Task";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchTasks, setTasks } from "../redux/slices/tasksSlice";
import { useEffect } from "react";

const TaskList: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const fetchTodos = async () => {
    try {
      const response = await dispatch(fetchTasks());

      dispatch(setTasks(response.payload));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="taskBoard">
        <ul className="list-none">
          {tasks.map((item) => (
            <Task key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
