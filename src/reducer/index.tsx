import { createSlice } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  name: string;
  description: string;
  date: Date;
}
export interface TaskList {
  list: Task[];
}
const initialState: TaskList = { list: [] };

const taskSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const updatedTask = action.payload;
      const existingTaskIndex = state.list.findIndex(
        (task) => task.id === updatedTask.id
      );

      if (existingTaskIndex !== -1) {
        state.list[existingTaskIndex] = updatedTask;
      }
    },
  },
});
export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
