import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TTodos = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitial = {
  todos: TTodos[];
};

const initialState: TInitial = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<TTodos>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeToDo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleToDo: (state, action) => {
      const task = state.todos.find((item) => item.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
    },
  },
});

export const { addToDo, removeToDo, toggleToDo } = todoSlice.actions;
export default todoSlice.reducer;
