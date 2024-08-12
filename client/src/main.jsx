import ReactDOM from "react-dom/client";
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";
import router from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
        <Tooltip id="my-tooltip" />
      </AuthProvider>
    </HelmetProvider>
  </>
);
