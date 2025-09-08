import { useState } from "react";
import Navbar from "./Components/Navbar";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [count, setCount] = useState(0);
  const [Todo, setTodo] = useState("")
  const [todos, settodos] = useState([])

  const saveToLS=(params) => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }
  
  useEffect(() => {
    let todos=
  }, [third])
  

const handleEdit = (e,id) => {
  let t=todos.filter(i=>i.id===id) 
  setTodo(t[0].Todo)
  let newTodos=todos.filter(item=>{
    return item.id!==id
   })
   settodos(newTodos)
   saveToLS()
  };

const handleDelete = (e,id) => {
   let newTodos=todos.filter(item=>{
    return item.id!==id
   })
   settodos(newTodos)
   window.confirm("are you sure you want to delete this todo")
    saveToLS()
  };

const handleChange = (e) => {
   setTodo(e.target.value)
  };

  
const handleAdd = () => {
   settodos([...todos, {id: uuidv4(), Todo, isCompleted: false}])
   setTodo("")
    saveToLS()
  };  
 
const handleCheckbox=(e) => {
  let id=e.target.name
 let index=todos.findIndex(item=>{
  return item.id===id;
 })
 let newTodos=[...todos]
 newTodos[index].isCompleted=!newTodos[index].isCompleted;
 settodos(newTodos)
  saveToLS()
}
  

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
              {todos.length===0 && <div className="m-5 text-base font-thin">No Todos to display</div>}
              {todos.map(item=>{
                
              return  <div key={item.id} className="todoss flex w-[98%] justify-between">
                <div className="right flex gap-2 text-xl items-center">
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
                  <div className = {item.isCompleted?"line-through":""}>
               {item.Todo}
              </div>
                </div>
              <div className="btns space-x-3 mb-4">
                <button
                  onClick={(e)=>{handleEdit(e,item.id)}}
                  className="bg-purple-900 px-4 rounded h-7 text-gray-300"           
                >
                  Edit
                </button>
                <button
                  onClick={(e)=>{handleDelete(e,item.id)}}
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
