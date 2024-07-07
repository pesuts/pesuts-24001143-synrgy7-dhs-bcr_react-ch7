import { useEffect } from "react";
import Auth from "../components/Layouts/Auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) { 
      navigate("/");
    }
  }, []);

  return (
    <Auth type="register"/>
  );
}
