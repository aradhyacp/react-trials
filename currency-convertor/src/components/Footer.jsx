import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex mt-30 flex-col items-center border-t-2 border-[#f0f2f4]'>
        <div className="flex mt-10">
            <a class="text-[#637488] text-base font-normal leading-normal min-w-40" href="#">About</a>
                <a class="text-[#637488] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
                <a class="text-[#637488] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
        </div>
        <div className="flex mt-5 mb-5 text-[#637488] text-base font-normal leading-normal">© 2025 Currency Exchange</div>
    </div>
  )
}

export default Footer