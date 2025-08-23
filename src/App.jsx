import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg1 h-screen overflow-hidden">
        <Navbar />
        <div className="container space-y-5 mx-auto w-[60%]  h-screen">
          <h1 className="flex justify-center items-center text-5xl pt-9 font-bold">
            Todo List
          </h1>
          <div className="write flex gap-3">
            <input
              className="bg-gray-700 w-[85%] h-8 ml-7 rounded placeholder-gray-400 p-4"
              type="text"
              placeholder="Add a new todo.."
            />
            <button className="bg-red-500 px-4 rounded">Add</button>
          </div>
          <div className="show ml-9 border-b-1 flex gap-3">
            <input type="checkbox" id="show" />
            <label htmlFor="show">Show Finished</label>
          </div>
          <div className="todos ml-9 flex flex-col gap-2">
            <h1 className="font-bold text-xl">Your todos</h1>
            <div className="todo flex gap-4">
              <div className="text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus, illum!
              </div>
              <div className="btns space-x-3 mb-4">
                <button className="bg-purple-500 px-4 rounded">Edit</button>
                <button className="bg-purple-500 px-4 rounded h-6">Delete</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
