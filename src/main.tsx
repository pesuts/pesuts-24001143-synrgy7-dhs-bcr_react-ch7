import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FindCar from "./pages/find-car.tsx";
import Login from "./pages/login.tsx";
import Register from "./pages/register.tsx";
import Dashboard from "./pages/dashboard.tsx";
import DashboardTable from "./components/Layouts/DashboardTable.tsx";
import LandingPage from "./pages/landing-page.tsx";
import ErrorPage from "./pages/404.tsx";
import DashboardCars from "./components/Layouts/DashboardCars.tsx";
import DashboardForm from "./components/Layouts/DashboardForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/cars",
    element: <FindCar />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard title="Dashboard" children={<DashboardTable />} />,
    // element: <Dashboard children={<DashboardTable />}></Dashboard>,
  },
  {
    path: "/dashboard/cars",
    element: <Dashboard title="List Cars" children={<DashboardCars />} />,
    // element: <Dashboard title="Dashboard" children={<DashboardTable />}/>,
    // element: <DashboardCar />,
  },
  {
    path: "/dashboard/cars/add",
    element: <Dashboard title="Add Cars" children={<DashboardForm />} />,
    // element: <Dashboard title="Dashboard" children={<DashboardTable />}/>,
    // element: <DashboardCar />,
  },
  {
    path: "/dashboard/cars/add",
    element: <Dashboard title="Add Cars" children={<DashboardForm />} />,
    // element: <Dashboard title="Dashboard" children={<DashboardTable />}/>,
    // element: <DashboardCar />,
  },
  {
    path: "/dashboard/cars/edit/:id",
    element: <Dashboard title="Add Cars" children={<DashboardForm />} />,
    // element: <Dashboard title="Dashboard" children={<DashboardTable />}/>,
    // element: <DashboardCar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);
