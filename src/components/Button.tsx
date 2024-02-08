import { useNavigate } from 'react-router';

interface ButtonProps {
  label: string;
  to?: string;
}

export default function Button({ label, to, ...props }: ButtonProps) {
  const navigate = useNavigate();

  function clickHandler() {
    if (to) {
      navigate(to);
    }
  }

  return (
    <>
      <button
        {...props}
        onClick={clickHandler}
        className='w-48 h-full px-6 py-4
        bg-gradient-to-r from-teal-600 to-teal-400 text-white
        rounded-md shadow-md hover:shadow-lg'>
        {label}
      </button>
    </>
  );
}
