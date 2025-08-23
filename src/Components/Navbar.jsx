import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-purple-700 p-3 font-bold text-white'>
            <ul className='flex justify-between'>
                <div className="logo">
                    <li className='ml-9 text-2xl'>Taskly</li>
                </div>
                <div className='flex gap-4 mr-5 text-xl'>
                    <li>Home</li>
                    <li>Your Tasks</li>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar