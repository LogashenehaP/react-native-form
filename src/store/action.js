import { REMOVE_TODO,UPDATE_TODO,ADD_TODO } from './actionType';
export const addTodo = payload => {
    return {
      type: ADD_TODO,
      payload,
    };
  };
  export const removeTodo = payload => {
    return {
      type: REMOVE_TODO,
      payload,
    };
  };
  
  export const handleEditSubmit = payload => {
    return {
      type: UPDATE_TODO,
      payload,
    };
  };