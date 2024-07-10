import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isTokenExpired } from "../utils/jwtVerify";

type Props = {
  children: ReactNode;
};

const ProtectedAuthRoute = ({ children }: Props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (token) {
      if (isTokenExpired(token)) {
        localStorage.removeItem("token");
        navigate("/login");
        return;
      } else {
        setIsAuthenticated(true);
        navigate("/");
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [navigate, token]);

  if (isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedAuthRoute;
