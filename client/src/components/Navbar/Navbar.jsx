import { NavLink, useLocation } from "react-router-dom";
import Container from "../../components/ui/Container";
import logo from "./../../assets/logo-white.png";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "./Drawer";

const Navbar = () => {
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

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 4, path: "/blogs", name: "Blogs" },
    { id: 2, path: "/register", name: "Register" },
  ];

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
                    isActive ? "text-blue-500" : ""
                  }
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
      />
    </div>
  );
};

export default Navbar;
