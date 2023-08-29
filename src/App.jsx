import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import UserSignUpPage from "./pages/UserSignUp";
import { action as logoutAction } from "./pages/Logout";
import {
  loader as profileLoader,
  action as editingProfileAction,
} from "./pages/Profile";
import ProfilePage from "./pages/Profile";
import { tokenLoader } from "./utils/auth";
import HomePage from "./pages/Home";
import CompanyPage, {
  loader as companyLoader,
  action as creatingCompanyAction,
} from "./pages/Company";
import { action as enterCompanyAction } from "./pages/enterCompany";
import CreateCompanyToken, {
  loader as createCompanyTokenLoader,
} from "./pages/createCompanyToken";
import ProjectsPage from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root-router",
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
        loader: profileLoader,
        action: editingProfileAction,
      },
      {
        path: "company",
        element: <CompanyPage />,
        loader: companyLoader,
        action: creatingCompanyAction,
      },
      {
        path: "enterCompany",
        action: enterCompanyAction,
      },
      {
        path: "createToken",
        loader: createCompanyTokenLoader,
        element: <CreateCompanyToken />,
        id: "CompanyToken",
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "signup",
        element: <UserSignUpPage />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
