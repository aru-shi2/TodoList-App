import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [Todo, setTodo] = useState("")
  const [todos, settodos] = useState([])

const handleEdit = () => {
   
  };

const handleDelete = () => {
   
  };

const handleChange = (e) => {
   setTodo(e.target.value)
  };

  
const handleAdd = () => {
   settodos([...todos, {Todo, isCompleted: false}])
   setTodo("")
  };  
 

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
            onChange={handleChange} value={Todo}
              className="bg-gray-700 w-[85%] h-8 ml-10 rounded-xl placeholder-gray-400 p-5 flex"
              type="text"
              placeholder="Add a new todo.."
            />
            <button onClick={handleAdd} className="bg-purple-900 px-4 rounded-xl text-white">
              Add
            </button>
          </div>
          <div className="show ml-10 pb-2 border-b-1 flex gap-3">
            <input type="checkbox" id="show" />
            <label htmlFor="show">Show Finished</label>
          </div>
          <div className="todos ml-9 flex flex-col gap-3">
            <h1 className="font-bold text-2xl">Your todos</h1>
            <div className="todo gap-4">
              {todos.map(item=>{
                
              return  <div className="todoss flex w-[98%] justify-between">
                  <div className="todoo text-xl flex">
                    {/* <input type="checkbox" id="completed" value={Todo.isCompleted}/> */}
               {item.Todo}
              </div>
              <div className="btns space-x-3 mb-4">
                <button
                  onClick={handleEdit}
                  className="bg-purple-900 px-4 rounded h-7 text-gray-300"           
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-purple-900 px-3 rounded h-7 text-gray-300"
                >
                  Delete
                </button>
              </div>
                </div>
              })}
              
            </div>
          </div>         
        </div>
      </div>

    </>
  );
}

export default App;
