import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='bgnav p-3 font-bold text-white'>
            <ul className='flex justify-between'>
                <div className="logo">
                    <li className='md:ml-9 ml-6 md:text-2xl text-xl'>Taskly</li>
                </div>
                <div className='flex md:gap-8 gap-6 md:mr-5 mr-3 text-xl '>
                    <li className='transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer'>Home</li>
                    <li className='transition-all ease-in-out duration-500 hover:scale-110 cursor-pointer'>Your Tasks</li>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar