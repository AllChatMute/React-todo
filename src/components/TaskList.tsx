import Task from "./Task";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { clearTasks } from "../redux/slices/tasksSlice";

const TaskList: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="bg-white mt-[20px] pt-[10px] pb-[10px] pr-[40px]">
        <ul className="list-none">
          {tasks.map((item) => (
            <Task key={item.id} {...item} />
          ))}
        </ul>
        <a
          id="clear"
          className="float-right text-right text-[#ff6161] text-[1.2em] cursor-pointer"
          onClick={() => dispatch(clearTasks())}
        >
          Clear
        </a>
      </div>
    </>
  );
};

export default TaskList;
