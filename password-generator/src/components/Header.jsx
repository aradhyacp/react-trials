import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="flex items-center gap-3 bg-[#122118] border-b-2 border-b-[#264532] px-10 py-3">
            <div className=""><img src="/header-logo.svg" alt="logo" className='h-12 '/></div>
            <div className="text-white text-[25px]">Password Generator</div>
        </div>
    </div>
  )
}

export default Header