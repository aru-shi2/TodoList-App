import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg1 h-screen overflow-hidden pacifico-regular">
        <Navbar />
        <div className="container space-y-6 mx-auto w-[67%]  h-screen ">
          <h1 className="flex justify-center items-center text-5xl pt-9 font-bold text-white">
            Todo List
          </h1>
          <div className="write flex gap-3">
            <input
              className="bg-gray-700 w-[85%] h-8 ml-10 rounded-xl placeholder-gray-400 p-5"
              type="text"
              placeholder="Add a new todo.."
            />
            <button className="bg-purple-900 px-4 rounded-xl text-white">Add</button>
          </div>
          <div className="show ml-10 pb-2 border-b-1 flex gap-3">
            <input type="checkbox" id="show" />
            <label htmlFor="show">Show Finished</label>
          </div>
          <div className="todos ml-9 flex flex-col gap-3">
            <h1 className="font-bold text-2xl">Your todos</h1>
            <div className="todo flex gap-4">
              <div className="text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus, illum!
              </div>
              <div className="btns space-x-3 mb-4">
                <button className="bg-purple-900 px-4 rounded h-7 text-gray-300">Edit</button>
                <button className="bg-purple-900 px-3 rounded h-7 text-gray-300">Delete</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
