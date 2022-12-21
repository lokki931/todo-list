import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      let newTodo = {
        id: new Date().toISOString(),
        body: action.payload.text,
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    },
    toggle: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((obj) => {
          if (obj.id === action.payload.id) {
            return { ...obj, completed: !obj.completed };
          }
          return obj;
        }),
      };
    },
    save: (state, action) => {
      // const todoBody = state.todos.find((todo) => todo.id === action.payload.id);
      // todoBody.body = action.payload.text;
      return {
        ...state,
        todos: state.todos.map((obj) => {
          if (obj.id === action.payload.id) {
            return { ...obj, body: action.payload.text };
          }
          return obj;
        }),
      };
    },
    remove: (state, action) => {
      // state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    },
  },
});

export const { add, remove, toggle, save } = todosSlice.actions;

export default todosSlice.reducer;
