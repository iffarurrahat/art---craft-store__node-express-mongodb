import { NavLink, useLocation } from "react-router-dom";
import Container from "../../components/ui/Container";
import logo from "./../../assets/logo-white.png";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "./Drawer";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setNavbarBackgroundColor("text-white");
    } else {
      setNavbarBackgroundColor("bg-white shadow");
    }
  }, [location.pathname]);

  // logout
  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful");
        setDrawerOpen(false); // Close drawer on logout
      })
      .catch((error) => {
        if (error.message) {
          toast.error("Something wrong");
        }
      });
  };

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/blogs", name: "Blogs" },
  ];
  // Conditional rendering of login
  if (user) {
    routes.push({
      id: 3,
      path: "",
      name: "Logout",
      onClick: handleSignOut,
    });
  } else {
    routes.push({ id: 4, path: "/login", name: "Login" });
  }

  return (
    <div
      className={`${navbarBackgroundColor} font-roboto text-xs font-semibold absolute top-0 left-0 right-0 z-50 transition-colors duration-300 ]`}
    >
      <Container>
        <div className="flex items-center justify-between py-4 ">
          <img src={logo} alt="logo" className="w-36" />

          <div
            className="md:hidden text-3xl"
            onClick={() => setDrawerOpen(true)}
          >
            <AiOutlineMenu />
          </div>

          <ul className="hidden md:flex items-center gap-14">
            {routes.map((route) => (
              <li key={route.id}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive && route.name !== "Logout" ? "text-blue-500" : ""
                  }
                  onClick={route.onClick ? route.onClick : null}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        routes={routes}
        handleSignOut={handleSignOut}
      />
    </div>
  );
};

export default Navbar;

/*
Firebase: Error (auth/network-request-failed). === connect your internet 
*/
