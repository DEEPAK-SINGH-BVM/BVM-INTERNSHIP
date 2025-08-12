// const LIST_ITEMS = "LIST_ITEMS";
// import { listArray } from "../utils/data";
// export const getItems =()=>{
//     return {
//       type: LIST_ITEMS,
//       payload:listArray
//     };
    
// }
export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  payload: id,
});