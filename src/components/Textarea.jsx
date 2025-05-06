import React from 'react'

const Textarea = ({label, name, register, error, validation}) => {
    
  return (
    <div>
        <label htmlFor={name}  className='block  mb-[15px]'>{label}</label>
        <textarea
            name=""
            id="" 
            {...register(name, validation)}
            className={`h-[105px] resize-none p-[15px] text-[#2A4144] text-lg border border-[#86A2A5] focus:outline-[#0C7D69] rounded-lg w-full hover:border-[#0C7D69] cursor-pointer ${
                error ? 'border-red-500' : 'border-[#86A2A5]'
              }`}>
        </textarea>
        {error && (
            <p className='text-[#D73C3C] text-base'>{error.message}</p>
        )}
    </div>
  )
}

export default Textarea