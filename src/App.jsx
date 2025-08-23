import { useState } from 'react'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="bg1 h-screen overflow-hidden">
        <div className="container space-y-10 mx-auto w-[60%]">
          <h1 className='flex justify-center items-center text-5xl pt-9 text-white font-bold'>Todo List</h1>
          <div className="write flex gap-3 bg-white">
            <input className='bg-gray-700 w-[85%] h-8 ml-9' type="text" placeholder='Add a new todo..'/>
          <button className='bg-red-500 px-4 rounded'>Add</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
