import { useContext } from "react";
import PageNameContext from "./PageNameContext";

const ChildComponent2 =()=>{
    const pageName = useContext(PageNameContext);
    return <div>Component 2 {pageName}</div>
}
export default ChildComponent2