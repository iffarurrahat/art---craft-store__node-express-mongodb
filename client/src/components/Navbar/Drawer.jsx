import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import logo from "./../../assets/logo.png";

const Drawer = ({ isOpen, onClose, routes }) => {
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
        } transition-transform`}
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
                    ? "text-blue-500"
                    : "text-black"
                }
                onClick={route.onClick ? route.onClick : null}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  routes: PropTypes.array.isRequired,
};
export default Drawer;
