import { ReactNode } from "react";
import Auth from "../components/Layouts/Auth";

export default function Login(): ReactNode {
  const token = localStorage.getItem("token");
  if (token) window.location.href = "/";

  return (
    <Auth type="login">
    </Auth>
  );
}
