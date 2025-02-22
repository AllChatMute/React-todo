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
      <div>
        <input
          type="text"
          placeholder="new task"
          name="task"
          ref={inputRef}
          value={inputValue}
          onChange={() => handleChangeValue(inputRef.current!.value)}
        ></input>
        <button
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
