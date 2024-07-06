import { useState } from "react";
import InputForm from "./InputForm";

import { login, SuccessResponse, ErrorResponse, register } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

type Error = {
  isError: boolean;
  message?: string;
}

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
    if (email === '' || password === '') { 
      handleError({isError: true, message: 'Semua kolom harus terisi'});
      return;
    }

    if (type === "login") {
      login({ email, password }, (status, res) => {
        console.log(res);
        if (status) {
          const successResponse = res as SuccessResponse;
          localStorage.setItem("token", successResponse.token);
          handleError({ isError: false });
          navigate('/dashboard');
        }
        else { 
          const errorResponse = res as ErrorResponse;
          handleError({isError: true, message: errorResponse.message});
          console.log(errorResponse.message);
        }
      });
      return;
    }
    if (type === "register") { 
      register({ name, email, password }, (status, res) => {
        if (status) {
          handleError({ isError: false });
          navigate("/login");
        }
        else { 
          const errorResponse = res as ErrorResponse;
          handleError({isError: true, message: errorResponse.message});
          console.log(errorResponse.message);
        }
      });
    }

  };

  return (
    <form className="mt-3" onSubmit={handleLogin} method="post">
      {type !== "login" && (
        <InputForm
          name="name"
          type="text"
          placeholder="Masukkan nama"
          style="mb-4"
          handleInput={handleName}
        />
      )}
      <InputForm
        name="email"
        type="email"
        placeholder="Masukkan email"
        style="mb-4"
        handleInput={handleEmail}
      />
      <InputForm
        name="password"
        type="password"
        placeholder="Masukkan password"
        style="mb-4"
        handleInput={handlePassword}
      />
      <button
        type="submit"
        className="w-full bg-[#0C28A5] text-white p-2 rounded hover:bg-[#081B6E]"
      >
        {type === "login" ? "Log In" : "Daftar"}
      </button>
    </form>
  );
};

export default FormAuth;
