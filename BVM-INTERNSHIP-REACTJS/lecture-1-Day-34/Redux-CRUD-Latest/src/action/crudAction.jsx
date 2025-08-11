const LIST_ITEM = "LIST_ITEM ";
import { listArray } from "../utils/data";
export const getItems =()=>{
    return {
      type: LIST_ITEM,
      payload:listArray
    };
    
}
// 
// const LIST_ITEMS = "LIST_ITEMS";
// import { listArray } from "../utils/data";
// export const getItems = () => {
//   return {
//     type: LIST_ITEMS,
//     payload: listArray,
//   };
// };