import { setIsCompleted, deleteTask } from "../redux/slices/tasksSlice";
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
  return (
    <>
      <li className="pb-[15px] pt-[15px] text-[1.3em] text-[#2f4f4f]">
        <span
          className="bg-[#ff6161] pr-[3px] pl-[3px] mr-[3px] ml-[3px] text-white cursor-pointer"
          onClick={() => dispatch(deleteTask(id))}
        >
          ×
        </span>
        <input
          className="mr-[3px]"
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
