const LIST_ITEM = "LIST_ITEM";
const initialState = {
  lists: [],
  item: {},
};
// console.log(initialState);
// console.log('working');

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_ITEM:
      return {
        ...state,
        lists: action.payload,
      };
    default:
      return state;
  }
}
