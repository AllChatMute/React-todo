import {
  setIsCompleted,
  manageTasks,
  fetchTasks,
  setTasks,
} from "../redux/slices/tasksSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

interface Props {
  label: string;
  isCompleted: boolean;
  id: number;
}

const Task: React.FC<Props> = ({ label, id }) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const currentTask = tasks.find((item) => item.id === id);

  const handleDeleteTask = async () => {
    try {
      await dispatch(manageTasks({ method: "DELETE", ID: id }));

      const response = await dispatch(fetchTasks());
      dispatch(setTasks(response.payload));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <li>
        <span className="delete" onClick={() => handleDeleteTask()}>
          ×
        </span>
        <input
          type="checkbox"
          checked={currentTask?.isCompleted}
          onChange={() => dispatch(setIsCompleted(id))}
        ></input>
        <label>{label}</label>
      </li>
    </>
  );
};

export default Task;
