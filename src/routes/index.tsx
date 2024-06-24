import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../root/RootLayout";
import AuthLayout from "../auth/AuthLayout";
import Login from "../auth/forms/Login";
import Register from "../auth/forms/Register";
import {
  Home,
  InternalCategory,
  ProductDetails,
  ProductsByCategory,
} from "../root/pages";
import ErrorPage from "../components/shared/Error/ErrorPage";
import LostPassword from "@/auth/forms/LostPassword";
import VerifyEmail from "@/auth/forms/VerifiyEmail";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/product-category/:categoryName",
        element: <ProductsByCategory />,
      },
      {
        path: "/product-category/:categoryName/:specificCategory",
        element: <InternalCategory />,
      },
      { path: "/product/:productId", element: <ProductDetails /> },
      {
        element: <AuthLayout />,
        children: [
          { path: "/my-account/login", element: <Login /> },
          { path: "/my-account/register", element: <Register /> },
          {path:"/my-account/verify-code/:userId" , element:<VerifyEmail/>},
          {path:"/my-account/lost-password",element:<LostPassword/>}
        ],
      },
    ],
  },
]);
