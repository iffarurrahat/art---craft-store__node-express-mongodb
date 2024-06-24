import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[calc(100vh-85px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
