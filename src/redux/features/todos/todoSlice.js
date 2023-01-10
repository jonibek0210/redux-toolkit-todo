import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid';


const initialState = {
   todos: [
      {
         id: uuid(),
         isDone: false,
         time: `${new Date().getHours()} : ${new Date().getMinutes()}`,
         task: 'buy bread'
      },
      {
         id: uuid(),
         isDone: false,
         time: `${new Date().getHours()} : ${new Date().getMinutes()}`,
         task: 'buy milk'
      },
      {
         id: uuid(),
         isDone: false,
         time: `${new Date().getHours()} : ${new Date().getMinutes()}`,
         task: 'buy sugar'
      },
      {
         id: uuid(),
         isDone: false,
         time: `${new Date().getHours()} : ${new Date().getMinutes()}`,
         task: 'buy coffe'
      }
   ]
}

export const todoSlice = createSlice({
   name: 'todo',
   initialState,
   reducers: {
      createTask: (state, action) => {
         state.todos = [...state.todos, action.payload]
      },
      removeTask: (state, action) => {
         // state.todos = state.todos.filter(item => item.id !== action.payload)
         console.log(action.payload);
      },
      editTask: (state, action) => {
         // state.todos = state.todos.filter(item => {
         //    if (item.id === action.payload.id) {
         //       item.task = action.payload.task
         //    }
         //    return item
         // })
         console.log();
      }
   }
})

export const { createTask, removeTask, editTask } = todoSlice.actions
export default todoSlice.reducer