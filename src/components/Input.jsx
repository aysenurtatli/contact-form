import React from 'react'

const Input = ({ label, type, name, value, register, error, validation}) => {
  return (
    <div className='text-base text-[#2A4144] mb-[24px]'>
        <label htmlFor={name} className='block mb-[15px]'>{label}</label>
        <input
            type={type}
            value={value}
            name={name}
            {...register(name, validation)}
            className={`h-[51px] px-[23px]  text-[#2A4144] text-lg border ${
                error ? 'border-red-500' : 'border-[#86A2A5]'
              } focus:outline-[#0C7D69] rounded-lg w-full hover:border-[#0C7D69] cursor-pointer`}
        />
        {error && (
            <p className='text-[#D73C3C] text-base'>{error.message}</p>
        )}
    </div>
    
  )
}

export default Input