import { NavLink } from 'react-router-dom';

interface LinkProps {
  label: string;
  to: string;

  preventScroll?: boolean;
}

export default function Link({ label, to, preventScroll = false, ...props }: LinkProps) {
  function clickHandler() {
    if (!preventScroll) {
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
      <NavLink
        {...props}
        onClick={clickHandler}
        className='w-48 h-full px-6 py-4
          bg-gradient-to-r from-teal-600 to-teal-400 text-white
          rounded-md shadow-md hover:shadow-lg'
        to={to}>
        {label}
      </NavLink>
    </>
  );
}
