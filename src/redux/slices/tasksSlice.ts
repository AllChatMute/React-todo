import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ITask from "../../@types/taskInterface";
import isTokenValid from "../../utils/isTokenValid";
import IManageTasksParams from "../../@types/manageTasksParamsInterface";

interface InitialState {
  tasks: ITask[];
  status: "pending" | "success" | "rejected";
}

interface ResTasks {
  id: number;
  title: string;
  _id: string;
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
  status: "pending",
};

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  try {
    if (!isTokenValid()) return { message: "Unauthorized" };

    const response = await axios.get("http://localhost:3000/todos", {
      withCredentials: true,
    });
    const data = response.data.data.map((item: ResTasks) => {
      return {
        id: item.id,
        label: item.title,
        isCompleted: false,
      };
    });

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const manageTasks = createAsyncThunk(
  "tasks/manageTasks",
  async ({ method, body, ID }: IManageTasksParams) => {
    try {
      if (!isTokenValid()) return { message: "Unauthorized" };

      if (method === "POST") {
        await axios.post("http://localhost:3000/todos", body, {
          withCredentials: true,
        });
        return { message: "taskAdded" };
      }

      if (method === "DELETE" && ID) {
        await axios.delete(`http://localhost:3000/todos/${ID}`, {
          withCredentials: true,
        });

        return { message: "Deleted" };
      } else {
        return { message: "Didn't get ID" };
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
    },
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
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchTasks.rejected, (state) => {
      state.status = "rejected";
      console.log("Ошибка");
      state.tasks = [];
    });
  },
});
export const { setTasks, addTask, deleteTask, setIsCompleted, clearTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
