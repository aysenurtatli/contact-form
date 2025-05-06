import Checkbox from './Checkbox'
import Input from './Input'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import Textarea from './Textarea'
import successIcon from '../assets/images/icon-success-check.svg'


const Form = () => {
    const { register, reset, handleSubmit, formState: { errors }} = useForm();
    const [showToast, setShowToast] = useState(false);

    
  const onSubmit = () => {
    setShowToast(true)
    reset();
    

    setTimeout(() => {
        setShowToast(false)
    },[3000])
    
  }
  



  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-white max-w-[736px] text-[#2A4144] mx-auto rounded-2xl p-[40px] my-[32px] md:my-[128px]'>
         <div className={`bg-[#2A4144] text-white rounded-lg max-w-[450px] p-[24px] fixed top-[24px] left-0 right-0 mx-auto transition-all duration-500 ease-in-out ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        >
            <div className='flex items-center gap-[10px] font-bold text-lg'>
                <img src={successIcon} className='w-[20px] h-[20px]' alt="success icon" />
                <span>Message Sent!</span>
            </div>
            <span className='text-[#E0F1E8] text-base'>
                Thanks for completing the form. We’ll be in touch soon!
            </span>
        </div>
        <h2 className='font-bold text-[32px] mb-[32px]'>Contact Us</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[16px]'>
            <Input
                type={"text"}
                name={"firstName"}
                label={"First Name *"}
                register={register}
                error={errors.firstName}
                validation={{required: "This field is required"}}
            />
            <Input
                type={"text"}
                name={"lastName"}
                label={"Last Name *"}
                register={register}
                error={errors.lastName}
                validation={{required: "This field is required"}}
             />
        </div> 
        <Input
            type={"email"}
            name={"email"}
            label={"Email Address *"}
            register={register}
            error={errors.email}
            validation={{required: "This field is required", 
                pattern: {value: /^\S+@\S+$/i,
                    message: 'Please enter a valid email address'
                }
            }}
        />
        <label className='block mb-[15px]'>Query Type *</label>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[16px]'>
            <Checkbox
                name={"querytype"}
                label={"General Enquiry"}
                register={register}
                error={errors.querytype}
                validation={{required: "Please select a query type"}}
            />
            <Checkbox
                name={"querytype"}
                label={"Support Request"}
                register={register}
                error={errors.querytype}
                validation={{required: "Please select a query type"}}
            />
            {errors.querytype && (
            <p className='text-[#D73C3C] text-base mt-2'>{errors.querytype.message}</p>
            )}
        </div>
        <Textarea
            name={"message"}
            label={"Message *"}
            register={register}
            error={errors.message}
            validation={{required: "This field is required"}}
        />
       <label htmlFor='check' className='block cursor-pointer my-[40px]'>
            <input
                type="checkbox"
                id="check"
                {...register("check", {
                required: "To submit this form, please consent to being contacted"
                })}
                className='accent-[#0C7D69]'
            />

            <span className='pl-[16px]'>I consent to being contacted by the team *</span>
             
            {errors.check && (
                <p className='text-[#D73C3C] text-base mt-2'>{errors.check.message}</p>
            )}
        </label>
        <button type='submit' className='cursor-pointer w-full bg-[#0C7D69] h-[59px] rounded-lg font-bold text-lg text-white hover:bg-[#0D4238]'>Submit</button>
       
    </form>
  )
}

export default Form