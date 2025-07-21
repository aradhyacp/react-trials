import React from 'react'

const Header = () => {
  return (
    <div className='sticky z-50 top-0 mb-5'>
        <div className="flex bg-white px-5 py-4 border-b-2 border-b-[#dadada] items-center justify-between">
            <div className="flex"><img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="logo" className='h-12'/></div>
            <div className="flex gap-10">
                <div className="cursor-pointer">Home</div>
                <div className="cursor-pointer">About</div>
                <div className="cursor-pointer">Contact</div>
                <div className="cursor-pointer">Github</div>
            </div>
            <div className="flex items-center gap-4">
                <div className=" cursor-pointer">Login</div>
                <div className="text-white bg-orange-600 px-5 py-3 rounded-lg cursor-pointer">Get started</div>
            </div>
        </div>
    </div>
  )
}

export default Header