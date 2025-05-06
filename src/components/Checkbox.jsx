import React from 'react';

const Checkbox = ({ label, name, validation, error, register }) => {
  return (
      <label className="cursor-pointer has-checked:bg-[#E0F1E8] rounded-xl mb-[15px]">
        <div className="flex items-center h-[51px] border border-[#86A2A5] hover:border-[#0C7D69]  rounded-lg w-full pl-[25px] gap-[15px]">
          <div className='relative flex items-center'>
            <input
              type="radio"
              name={name}
              {...register(name, validation)}
              className="appearance-none h-5 w-5 border-2 border-[#86A2A5] rounded-full peer checked:border-[#0C7D69] checked:bg-transparent"
            />
            <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 peer-checked:bg-[#0C7D69]"></div>
          </div>
          {label}
        </div>
      </label>
  );
};

export default Checkbox;
