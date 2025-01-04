import { Outlet } from "react-router-dom";

import { Link } from "./components/ui/Link";

export function Layout() {
  return (
    <div className="container mx-auto">
      <div className="grid p-4 grid-cols-6">
        <nav>
          <ul className="flex">
            <li className="mr-6">
              <Link to="/">Sandbox</Link>
            </li>
            <li className="mr-6">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="grid grid-cols-6 p-4 gap-4">
        <Outlet />
      </div>
    </div>
  );
}
