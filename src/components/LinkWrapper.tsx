import { NavLink } from 'react-router-dom';

interface LinkWrapperProps {
  children: React.ReactNode;
  to: string;
  preventScroll?: boolean;
}

export default function LinkWrapper({ children, to, preventScroll = false }: LinkWrapperProps) {
  function clickHandler() {
    if (!preventScroll) {
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
      <NavLink
        onClick={clickHandler}
        to={to}>
        {children}
      </NavLink>
    </>
  );
}
