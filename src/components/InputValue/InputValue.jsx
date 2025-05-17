import React from 'react'

const InputValue = ({ text, id, nome, placeholder, onChange}) => {

  return (
    <div>
      <input 
      type={text}
      id={id}
      name={nome} 
      placeholder={placeholder}
      onChange={onChange}
      className=' flex justify-center my-4 w-[100%] bg-gray-200 border border-gray-300 p-2 rounded-xs'/>
    </div>
  )
}

export default InputValue
