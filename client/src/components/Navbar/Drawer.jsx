import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import logo from "./../../assets/logo.png";

const Drawer = ({ isOpen, onClose, routes, handleToggle }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4">
          <img src={logo} alt="logo" className="h-8" />
          <div className="text-2xl" onClick={onClose}>
            <AiOutlineClose className="text-black cursor-pointer" />
          </div>
        </div>
        <ul className="mt-8">
          {routes.map((route) => (
            <li
              key={route.id}
              className="p-4 border-b border-gray-200 text-center"
            >
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive && route.name !== "Logout"
                    ? "text-primary"
                    : "text-black"
                }
                onClick={route.onClick ? route.onClick : null}
              >
                {route.name}
              </NavLink>
            </li>
          ))}

          {/* Added: Theme Toggle */}
          <li className="p-4">
            <label className="grid cursor-pointer place-items-center">
              <input
                onChange={handleToggle}
                type="checkbox"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  routes: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
export default Drawer;
