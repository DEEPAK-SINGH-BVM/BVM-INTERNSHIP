import shoot from "./components/event";

function App() {
  return (
    <div>
      {/* <h1>Hello Events</h1> */}
      {/* <button onClick={shoot}>Click</button> */}
      <button onClick={()=>shoot("Goal")}>Click</button>
    </div>
  );
}
export default App;
