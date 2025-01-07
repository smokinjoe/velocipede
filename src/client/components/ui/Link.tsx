import { NavLink, NavLinkRenderProps } from "react-router-dom";

type LinkProps = {
  className?: string;
  to: string;
  children: React.ReactNode;
};

export const Link = ({ to, children, className = "" }: LinkProps) => {
  const navLinkClassName = ({ isActive }: NavLinkRenderProps) => {
    const navLinkClass = `text-red-200 hover:text-white ${className}`;
    const activeLinkClass = `font-bold text-red-500 hover:text-red-800 ${className}`;
    return isActive ? activeLinkClass : navLinkClass;
  };

  return (
    <NavLink className={navLinkClassName} to={to}>
      {children}
    </NavLink>
  );
};
