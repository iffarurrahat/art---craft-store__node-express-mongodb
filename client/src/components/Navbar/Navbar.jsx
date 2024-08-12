import { NavLink, useLocation } from "react-router-dom";
import Container from "../../components/ui/Container";
import logo from "./../../assets/logo-white.png";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "./Drawer";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut, loading } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("");
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  //theme functionality
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("nord");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setNavbarBackgroundColor("text-white");
    } else {
      setNavbarBackgroundColor("shadow");
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

  // loading
  if (loading) {
    return loading;
  }

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 4, path: "/all-art-&-craft", name: "All Art & Craft" },
    { id: 5, path: "/add-craft-item", name: "Add Craft Item" },
    {
      id: 6,
      path: user ? `/my-art-&-craft-list/email/${user?.email}` : "/login",
      name: "My Art & Craft List",
    },
  ];

  // Conditional rendering of login
  if (user) {
    routes.push({
      id: 2,
      path: "",
      name: "Logout",
      onClick: handleSignOut,
    });
  } else {
    routes.push({ id: 3, path: "/login", name: "Login" });
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
            <AiOutlineMenu className="cursor-pointer" />
          </div>

          <ul className="hidden md:flex items-center gap-14">
            {routes.map((route) => (
              <li key={route.id}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive && route.name !== "Logout" ? "text-primary" : ""
                  }
                  onClick={route.onClick ? route.onClick : null}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}

            {/* Added: Theme Toggle */}
            <li>
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
      </Container>

      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        routes={routes}
        handleSignOut={handleSignOut}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default Navbar;
