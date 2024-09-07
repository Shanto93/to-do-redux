import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TTodos = {
  id: string;
  task: string;
  details: string;
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
  },
});

export const { addToDo, removeToDo } = todoSlice.actions;
export default todoSlice.reducer;
