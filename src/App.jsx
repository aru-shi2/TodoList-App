import { useState } from "react";
import Navbar from "./Components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function App() {
  const [Todo, setTodo] = useState("");
  const [todos, settodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      settodos(todos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].Todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newTodos);
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newTodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), Todo, isCompleted: false }]);
    setTodo("");
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos);
  };

  return (
    <>
      <div className="bg1 h-screen overflow-hidden">
        <Navbar />
        <div className="container space-y-6 mx-auto w-[67%] bg2 h-screen ">
          <h1 className="flex justify-center items-center text-5xl pt-9 font-bold text-white">
            Todo List
          </h1>
          <div className="write flex flex-col md:flex-row md:justify-center items-center gap-3">
            <input
              onChange={handleChange}
              value={Todo}
              className="bg-gray-700 w-[81%] h-10 rounded-xl placeholder-gray-400 p-5 flex"
              type="text"
              placeholder="Add a new todo.."
            />
            <button
              onClick={handleAdd}
              disabled={Todo.length <= 3}
              className="bg-purple-900 disabled:opacity-50 w-[81%] rounded-xl text-white md:px-4 md:w-fit md:h-9 transition-all ease-in-out duration-500 hover:scale-90"
            >
              Add
            </button>
          </div>
          <div className="show ml-13 flex gap-3 font-xl">
            <input
              type="checkbox"
              id="show"
              onChange={toggleFinished}
              checked={showFinished}
            />
            <label htmlFor="show">Show Finished</label>
          </div>
          <div className="border-1 w-4/5 md:w-6/7 md:ml-15 ml-12 opacity-40"></div>
          <div className="todos gap-3 flex flex-col   ml-14">
            <h1 className="font-bold text-2xl">Your todos</h1>
            <div className="todo gap-4">
              {todos.length === 0 && (
                <div className="m-5 text-base font-thin">
                  No Todos to display
                </div>
              )}
              {todos.map((item) => {
                return (
                  (showFinished || !item.isCompleted) && (
                    <div
                      key={item.id}
                      className="todoss flex w-[90%] justify-between"
                    >
                      <div className="flex gap-2 text-xl justify-center items-center">
                        <input
                          name={item.id}
                          onChange={handleCheckbox}
                          type="checkbox"
                          checked={item.isCompleted}
                          id=""
                        />
                        <div className={item.isCompleted ? "line-through" : ""}>
                          {item.Todo}
                        </div>
                      </div>
                      <div className="btns space-x-3 md:mb-4 mb-2">
                        <button
                          onClick={(e) => {
                            handleEdit(e, item.id);
                          }}
                          className="bg-purple-900 cursor-pointer px-4 rounded md:h-7 h-6 text-gray-300 transition-all ease-in-out duration-500 hover:scale-90"
                        >
                          <FiEdit />
                        </button>
                        <button
                          onClick={(e) => {
                            handleDelete(e, item.id);
                          }}
                          className="bg-purple-900 cursor-pointer px-4 rounded md:h-7 h-6 text-gray-300 transition-all ease-in-out duration-500 hover:scale-90 hover:bg-red-500"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
