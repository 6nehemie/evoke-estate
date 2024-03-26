'use client';

import { useRef, useState } from 'react';

interface FormCheckboxProps {
  label: string;
  name: string;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({ label, name }) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  // console.log(checkboxRef);

  return (
    <div>
      <label htmlFor={name} className="flex items-center gap-2 cursor-pointer">
        <span
          className={`h-6 w-6 p-1 aspect-square rounded border-2 transition-colors duration-200 ${
            isChecked ? 'border-dark-gray-1' : 'border-neutral-400'
          }`}
        >
          <div
            className={`${
              isChecked ? 'bg-dark-gray-1' : 'bg-transparent'
            } transition-colors rounded-sm duration-150 h-full w-full`}
          ></div>
        </span>
        <p className="text-[15px] font-light break-words">{label}</p>
      </label>

      <input
        ref={checkboxRef}
        type="checkbox"
        name={name}
        id={name}
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
      />
    </div>
  );
};
export default FormCheckbox;
