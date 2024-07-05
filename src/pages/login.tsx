import { ReactNode } from "react";
// import Input from "../components/Fragments/InputForm";
import Auth from "../components/Layouts/Auth";

export default function Login() : ReactNode {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  // const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   alert("coba");
  // }

  return (
    <Auth type="login">
      {/* <Input
        name="email"
        type="email"
        placeholder="Masukkan email"
        style="mb-4"
      />
      <Input
        name="password"
        type="password"
        placeholder="Masukkan password"
        style="mb-4"
      /> */}
    </Auth>
  );
}
