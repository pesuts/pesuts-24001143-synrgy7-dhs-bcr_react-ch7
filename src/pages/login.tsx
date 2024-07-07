import { ReactNode, useEffect } from "react";
import Auth from "../components/Layouts/Auth";
import { useNavigate } from "react-router-dom";

export default function Login(): ReactNode {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) { 
      navigate("/");
    }
  }, []);

  return (
    <Auth type="login">
    </Auth>
  );
}
