import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import FindCar from "./pages/find-car";
import Login from "./pages/login";
import DashboardTable from "./components/Layouts/Dashboard/DashboardTable";
import DashboardCars from "./components/Layouts/Dashboard/DashboardCars";
import DashboardForm from "./components/Layouts/Dashboard/DashboardForm";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import ErrorPage from "./pages/error";
import ProtectedRoute from "./middleware/ProtectedRoute";
import ProtectedAdminRoute from "./middleware/ProtectedAdminRoute";
import FindCarProvider from "./contexts/FindCarContex";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/cars"
        element={
          <ProtectedRoute>
            <FindCarProvider>
              <FindCar />
            </FindCarProvider>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <ProtectedAdminRoute>
              <Dashboard title="Dashboard" type="Dashboard">
                <DashboardTable />
              </Dashboard>
            </ProtectedAdminRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/cars"
        element={
          <ProtectedRoute>
            <ProtectedAdminRoute>
              <Dashboard title="List Cars" type="Cars">
                <DashboardCars />
              </Dashboard>
            </ProtectedAdminRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/cars/add"
        element={
          <ProtectedRoute>
            <ProtectedAdminRoute>
              <Dashboard title="Add Cars" type="Cars">
                <DashboardForm />
              </Dashboard>
            </ProtectedAdminRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/cars/edit/:id"
        element={
          <ProtectedRoute>
            <ProtectedAdminRoute>
              <Dashboard title="Edit Cars" type="Cars">
                <DashboardForm />
              </Dashboard>
            </ProtectedAdminRoute>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

export const App = () => (
  <RouterProvider router={router} />
);

export default App;