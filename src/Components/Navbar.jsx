import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='bgnav p-3 font-bold text-white'>
            <ul className='flex justify-between'>
                <div className="logo">
                    <li className='ml-9 md:text-2xl text-xl'>Taskly</li>
                </div>
                <div className='flex gap-8 mr-5 text-xl '>
                    <li className='transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer'>Home</li>
                    <li className='transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer'>Your Tasks</li>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar