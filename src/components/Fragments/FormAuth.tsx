import { useState } from "react";
import InputForm from "./InputForm";

import {
  login,
  SuccessResponse,
  ErrorResponse,
  register,
} from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { decodeJwt } from "../../utils/jwtVerify";
import { GoogleLogin } from "@react-oauth/google";

// type OAuthSuccessResponse = {
//   credential: string;
//   clientId: string;
//   select_by: string;
// };

type Error = {
  isError: boolean;
  message?: string;
};

type Props = {
  type: string;
  handleError: (error: Error) => void;
};

const FormAuth = ({ type, handleError }: Props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleEmail = (email: string) => {
    setEmail(email);
  };

  const handlePassword = (password: string) => {
    setPassword(password);
  };

  const handleName = (name: string) => {
    setName(name);
  };

  const handleLogin = () => {
    event?.preventDefault();
    if (email === "" || password === "") {
      handleError({ isError: true, message: "Semua kolom harus terisi" });
      return;
    }

    if (type === "login") {
      login({ email, password }, (status, res) => {
        // console.log(res);
        if (status) {
          const successResponse = res as SuccessResponse;
          localStorage.setItem("token", successResponse.token);
          handleError({ isError: false });
          const token = localStorage.getItem("token");
          const payload = decodeJwt(token!);
          if (payload.role === "superadmin" || payload.role === "admin") {
            window.location.href = "/dashboard";
          }
          if (payload.role === "user") {
            navigate("/");
          }
        } else {
          const errorResponse = res as ErrorResponse;
          handleError({ isError: true, message: errorResponse.message });
          console.log(errorResponse.message);
          return;
        }
      });
      return;
    }
    if (type === "register") {
      if (password.length < 8) {
        handleError({ isError: true, message: "Password minimal 8 karakter" });
        setPassword("");
        return;
      }
      register({ name, email, password }, (status, res) => {
        if (status) {
          handleError({ isError: false });
          navigate("/login");
        } else {
          const errorResponse = res as ErrorResponse;
          handleError({ isError: true, message: errorResponse.message });
          console.log(errorResponse.message);
          setEmail("");
          setPassword("");
          return;
        }
      });
    }
    return;
  };

  return (
    <form className="mt-3" onSubmit={handleLogin} method="post">
      {type !== "login" && (
        <InputForm
          name="name"
          type="text"
          placeholder="Masukkan nama"
          style="mb-3"
          styleInput="w-full"
          mandatory={true}
          handleInput={handleName}
        />
      )}
      <InputForm
        name="email"
        type="email"
        value={email}
        placeholder="Masukkan email"
        style="mb-3"
        styleInput="w-full"
        mandatory={true}
        handleInput={handleEmail}
      />
      <InputForm
        name="password"
        type="password"
        value={password}
        placeholder="Masukkan password"
        style="mb-3"
        styleInput="w-full"
        mandatory={true}
        handleInput={handlePassword}
      />
      <div className="flex items-center gap-6 pt-5">
        <button
          type="submit"
          className="w-full bg-blue-bcr text-white p-2 rounded hover:bg-dark-blue-bcr"
        >
          {type === "login" ? "Log In" : "Daftar"}
        </button>
        <div className="outline outline-gray-300 outline-[1px] shadow-lg">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              if (credentialResponse.credential)
                localStorage.setItem("token", credentialResponse.credential);
              navigate("/");
            }}
            onError={() => {
              handleError({ isError: true, message: "Login failed!" });
            }}
          ></GoogleLogin>
        </div>
      </div>
    </form>
  );
};

export default FormAuth;
