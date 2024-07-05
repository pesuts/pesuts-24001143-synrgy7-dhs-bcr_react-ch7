// import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { CarsProvider } from './contexts/CarsContext';
import LandingPage from "./pages/landing-page";
import FindCar from "./pages/find-car";
import Login from "./pages/login";
import DashboardTable from "./components/Layouts/DashboardTable";
import DashboardCars from "./components/Layouts/DashboardCars";
import DashboardForm from "./components/Layouts/DashboardForm";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import ErrorPage from "./pages/404";
import ProtectedRoute from "./components/Fragments/ProtectedRoute";

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/cars"
        element={
          <ProtectedRoute>
            <FindCar />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard title="Dashboard">
              <DashboardTable />
            </Dashboard>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/cars"
        element={
          <ProtectedRoute>
            <Dashboard title="List Cars">
              <DashboardCars />
            </Dashboard>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/cars/add"
        element={
          <ProtectedRoute>
            <Dashboard title="Add Cars">
              <DashboardForm />
            </Dashboard>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/cars/edit/:id"
        element={
          <ProtectedRoute>
            <Dashboard title="Edit Cars">
              <DashboardForm />
            </Dashboard>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default App;
