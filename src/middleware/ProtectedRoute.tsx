import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isTokenExpired } from "../utils/jwtVerify";

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (token === null || token === undefined || isTokenExpired(token)) {
      navigate("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate, token]);

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
