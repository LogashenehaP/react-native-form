import { REMOVE_TODO,UPDATE_TODO,ADD_TODO } from './actionType';

const initialState = [{id: 1, todo: 'buylaptop'}];
export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      const filteredTodos = state.filter(todo => todo.id !== action.payload);
      return filteredTodos;
    case UPDATE_TODO:
      let data = action.payload;
      const updatedArray = [];
      state.map(i => {
        if (i.id === data.id) {
          i.todo = data.todo;
        }
        updatedArray.push(i);
      });
      return updatedArray;
    default:
      return state;
  }
};