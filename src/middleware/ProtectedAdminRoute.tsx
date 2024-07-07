import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { decodeJwt } from "../utils/jwtVerify";

type Props = {
  children: ReactNode;
};

const ProtectedAdminRoute = ({ children }: Props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const payload = decodeJwt(token!);
    if (payload.role === "superadmin" || payload.role === "admin") {
      setIsAuthenticated(true);
    }
    else navigate("/");
  }, [navigate, token]);

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedAdminRoute;
