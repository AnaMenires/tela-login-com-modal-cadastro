import React from 'react'




const InputClick = ( { label, Icon, iconColor = 'text-green-600' } ) => {
  return (
    <div className='flex justify-center my-4 w-[50%] bg-gray-200 border border-gray-300 p-2 rounded-xs place-content-center'>
        <button
        type='button'
        className='flex items-center gap-2 justify-center text-center ' >
           <Icon size={20} className={`relative top-[1px] ${iconColor}`} />

            {label}
             

        </button>


    </div>
  )
}

export default InputClick;