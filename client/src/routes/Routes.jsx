import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import ALLArtAndCraft from "../pages/ALLArtAndCraft/ALLArtAndCraft";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import MyArtAndCraftList from "../pages/MyArtAndCraftList/MyArtAndCraftList";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";
import CraftDetails from "../pages/CraftDetails/CraftDetails";
import Content from "../components/CraftDetailsComponent/Content";
import Author from "../components/CraftDetailsComponent/Author";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          fetch("https://art-and-craft-server-bice.vercel.app/crafts"),
      },
      {
        path: "all-art-&-craft",
        element: <ALLArtAndCraft />,
        loader: () =>
          fetch("https://art-and-craft-server-bice.vercel.app/crafts"),
      },
      {
        path: "add-craft-item",
        element: (
          <PrivateRoute>
            <AddCraftItem />
          </PrivateRoute>
        ),
      },
      {
        path: "my-art-&-craft-list/email/:email",
        element: (
          <PrivateRoute>
            <MyArtAndCraftList />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-server-bice.vercel.app/crafts/email/${params.email}`
          ),
      },

      {
        path: "/crafts/:id",
        element: <CraftDetails />,
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-server-bice.vercel.app/crafts/${params.id}`
          ),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) =>
              fetch(
                `https://art-and-craft-server-bice.vercel.app/crafts/${params.id}`
              ),
          },
          {
            path: "author",
            element: <Author />,
            loader: ({ params }) =>
              fetch(
                `https://art-and-craft-server-bice.vercel.app/crafts/${params.id}`
              ),
          },
        ],
      },
      {
        path: "subCrafts/:id",
        element: <CraftDetails />,
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-server-bice.vercel.app/subCrafts/${params.id}`
          ),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) =>
              fetch(
                `https://art-and-craft-server-bice.vercel.app/subCrafts/${params.id}`
              ),
          },
          {
            path: "author",
            element: <Author />,
            loader: ({ params }) =>
              fetch(
                `https://art-and-craft-server-bice.vercel.app/subCrafts/${params.id}`
              ),
          },
        ],
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
