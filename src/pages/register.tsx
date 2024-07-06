import Auth from "../components/Layouts/Auth";

export default function Register() {
  const token = localStorage.getItem("token");
  if (token) window.location.href = "/";

  return (
    <Auth type="register"/>
  );
}
