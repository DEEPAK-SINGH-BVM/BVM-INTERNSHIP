// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getItem } from "../../action/crudAction";
// import './Home.css'
// export default function Home() {
//   const dispatch = useDispatch();
//   const { lists } = useSelector(state=> state.lists);
//   useEffect(()=>{
//     dispatch(getItem())
//   },[dispatch])
//     return(
//         <div>{lists && lists.map(list=>
//             <div key={list.id}>{list.title}</div>
//         )}</div>
//     )
// }
// 
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../action/crudAction";
import './home.css';
export default function Home() {
  const dispatch = useDispatch()
  const { lists } = useSelector(state => state.lists)
  useEffect(() => {
   dispatch(getItems())
  },[dispatch])
  
return (
   <div> {lists && lists.map(list=>
     <div key={list.id}>{list.title}</div> )}
   </div>
  )
}