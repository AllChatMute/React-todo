import { useRef, useState } from "react";
import { fetchTasks, setTasks } from "../redux/slices/tasksSlice";
import { useAppDispatch } from "../redux/hooks";
import { manageTasks } from "../redux/slices/tasksSlice";

const TaskInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeValue = (value: string) => {
    setInputValue(value);
  };

  const handleAddTask = async () => {
    try {
      if (inputValue === "") return;

      await dispatch(
        manageTasks({ method: "POST", body: { title: inputValue } })
      );

      const response = await dispatch(fetchTasks());

      dispatch(setTasks(response.payload));
      setInputValue("");
    } catch (error) {
      console.log(error);
      dispatch(setTasks([]));
    }
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
        <button onClick={handleAddTask}>ADD</button>
      </div>
    </>
  );
};

export default TaskInput;
