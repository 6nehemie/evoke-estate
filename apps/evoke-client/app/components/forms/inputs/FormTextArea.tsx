interface FormTextAreaProps {
  name: string;
  label: string;
  defaultValue?: string;
  placeholder: string;
  required?: boolean;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
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
      <textarea
        name={name}
        id={name}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        rows={5}
        className={`py-2 w-full rounded font-light font-exo2 px-5 placeholder:text-[14px] placeholder:font-light placeholder:text-text-light-gray outline-none border-b-2 focus:border-neutral-400 transition-colors duration-200`}
      />
    </div>
  );
};
export default FormTextArea;
