import { Outlet } from "react-router-dom";

import { Navigation } from "./components/ui/Navigation";

export function Layout() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <div className="grid grid-cols-12 p-4 gap-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}
