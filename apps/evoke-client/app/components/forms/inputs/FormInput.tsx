interface FormInputProps {
  type: 'email' | 'password' | 'text' | 'number';
  name: string;
  label: string;
  defaultValue?: string;
  placeholder: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  label,
  name,
  placeholder,
  defaultValue,
  required,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-xs font-light text-text-light-gray uppercase"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        className={`h-12 w-full rounded font-light font-exo2 px-5 placeholder:text-[14px] placeholder:font-light placeholder:text-text-light-gray outline-none border-b-2 focus:border-neutral-400 transition-colors duration-200`}
      />
    </div>
  );
};
export default FormInput;
