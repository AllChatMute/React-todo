import { useRef, useState } from "react";
import { addTask } from "../redux/slices/tasksSlice";
import { useAppDispatch } from "../redux/hooks";

const TaskInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeValue = (value: string) => {
    setInputValue(value);
  };

  return (
    <>
      <div className="bg-white p-[15px]">
        <input
          className="w-[310px] h-[30px] outline-0 border-0 text-[1.5em] bg-white text-[#2f4f4f]"
          type="text"
          placeholder="new task"
          name="task"
          ref={inputRef}
          value={inputValue}
          onChange={() => handleChangeValue(inputRef.current!.value)}
        ></input>
        <button
          className="text-[1.5em] text-[#53bdff] bg-white outline-0 border-0 w-[50px]"
          onClick={() =>
            dispatch(
              addTask({
                label: inputValue,
                isCompleted: false,
                id: new Date().getMilliseconds() * Math.random(),
              })
            )
          }
        >
          ADD
        </button>
      </div>
    </>
  );
};

export default TaskInput;
