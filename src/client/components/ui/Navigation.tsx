import { FaBicycle } from "react-icons/fa";

import { Link } from "./Link";

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <FaBicycle className="mr-4" />

        <span className="font-semibold text-xl tracking-tight">Velocipede</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link className="inline-block mt-0 mr-4" to="/login">
            Login
          </Link>
          <Link className="inline-block mt-0 mr-4" to="/me">
            Me
          </Link>
          <Link className="inline-block mt-0 mr-4" to="/workouts">
            Workouts
          </Link>
        </div>
      </div>
    </nav>
  );
};
