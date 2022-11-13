import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({
        id: new Date().toISOString(),
        body: action.payload.text,
        completed: false,
      });
    },
    toggle: (state, action) => {
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
    },
    save: (state, action) => {
      const todoBody = state.todos.find((todo) => todo.id === action.payload.id);
      todoBody.body = action.payload.text;
    },
    remove: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { add, remove, toggle, save } = todosSlice.actions;

export default todosSlice.reducer;
