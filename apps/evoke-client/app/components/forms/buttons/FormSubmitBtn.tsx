interface FormSubmitBtnProps {
  label: string;
  type?: 'submit' | 'button' | 'reset';
  islLoading: boolean;
}

const FormSubmitBtn: React.FC<FormSubmitBtnProps> = ({
  label,
  type = 'submit',
  islLoading,
}) => {
  return (
    <button
      type={type}
      disabled={islLoading}
      className={`h-14 w-full text-white bg-dark-gray-1 hover:bg-neutral-700 transition-colors duration-200 rounded font-light`}
    >
      {label}
    </button>
  );
};
export default FormSubmitBtn;
