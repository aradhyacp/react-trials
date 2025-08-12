import React from 'react'

const Header = () => {
  return (
    <div className='px-5 py-6 border-b-2 border-b-[#3a3827] mb-5 flex flex-row items-center justify-between'>
        <div className="flex text-white flex-row items-center gap-4">
            <div className="size-5 ">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
            </div>
            <div className="text-xl font-bold">Todo App</div>
        </div>
        <div className="">
            <div class="flex items-center gap-9">
              <a class="text-white text-m font-medium leading-normal" href="#">Home</a>
              <a class="text-white text-m font-medium leading-normal" href="#">About</a>
              <a class="text-white text-m font-medium leading-normal" href="#">Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Header