import React from 'react'

const RightCardContent = (props) => {
  console.log(props)
  return (
         <div className="absolute inset-0 flex flex-col p-3 justify-between bg-black/10">
        <h1 className='bg-white text-gray-950 m-4 font-semibold flex justify-center items-center w-10 h-10 rounded-full'>{props.id}</h1>
        <div>
        <p className='m-5 text-white text-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae pariatur saepe impedit officia ut? Deserunt fuga voluptas illum distinctio dolor!
        </p>
            <div className='flex justify-between mb-2'>
            <button className='bg-white text-black py-1 px-4 mx-4 rounded-full'>{props.tag}</button>
            <button className='bg-white text-black px-3 py-1 mr-3 rounded-full'><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent