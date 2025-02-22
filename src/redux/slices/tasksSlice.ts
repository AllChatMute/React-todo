import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ITask from "../../@types/taskInterface";

interface InitialState {
  tasks: ITask[];
}

const initialState: InitialState = {
  tasks: (() => {
    try {
      const stored = localStorage.getItem("tasks");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Ошибка при загрузке задач:", error);
      return [];
    }
  })(),
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setIsCompleted: (state, action: PayloadAction<number>) => {
      state.tasks.forEach((item) => {
        if (item.id === action.payload) {
          item.isCompleted = !item.isCompleted;
          localStorage.setItem("tasks", JSON.stringify(state.tasks));
        }
      });
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    clearTasks: (state) => {
      state.tasks = [];
      localStorage.setItem("tasks", "[]");
    },
  },
});
export const { addTask, deleteTask, setIsCompleted, clearTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
