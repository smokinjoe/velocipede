import { NavLink, NavLinkRenderProps } from "react-router-dom";

type LinkProps = {
  to: string;
  children: React.ReactNode;
};

export const Link = ({ to, children }: LinkProps) => {
  const navLinkClassName = ({ isActive }: NavLinkRenderProps) => {
    const navLinkClassText = "text-blue-500 hover:text-blue-800";
    return isActive
      ? "font-bold text-red-500 hover:text-red-800"
      : navLinkClassText;
  };

  return (
    <NavLink className={navLinkClassName} to={to}>
      {children}
    </NavLink>
  );
};
