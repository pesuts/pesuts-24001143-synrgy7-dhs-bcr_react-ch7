import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import FormAuth from "../Fragments/FormAuth";

type Props = {
  handleLogin?: () => void;
  type: string;
  children?: ReactNode;
  header?: string;
  subHeader?: string;
};

type Error = {
  isError: boolean;
  message?: string;
}

export default function Auth({
  type,
  // children,
  header,
  subHeader,
  // buttonText,
}: Props) {
  const [error, setError] = useState<Error>({
    isError: false
  });

  function handleError(error: Error) { 
    setError(error);
  }

  return (
    <main className="flex items-center justify-center">
      <div className="flex w-full shadow-lg h-screen">
        <div
          className="hidden md:block lg:w-7/12 w-1/2 bg-cover bg-center
      bg-[linear-gradient(to_right,rgba(60,80,200,0.3),rgba(60,80,200,0.3)),url('/img/jpg/login-bg.jpg')]
      "
        ></div>

        <div className="w-full md:w-1/2 lg:w-5/12 bg-white p-8 flex">
          <div className="m-auto align-middle w-10/12">
            <Link
              to="/"
              className="w-28 h-8 my-2 bg-indigo-200 inline-block"
            ></Link>
            <h2 className="text-2xl font-extrabold mb-4 text-blue-900">
              {header || type === "login"
                ? "Selamat Datang Kembali! "
                : "Selamat Datang di BCR"}
            </h2>
            {error.isError && (
              <p className="text-center bg-red-200 text-red-700 font-semibold px-4 py-2
                my-3 rounded-sm outline outline-red-500 outline-[1px] relative">
                {/* Account not found! */}
                { error.message || "Masukkan email dan password yang benar." }
                <span
                  onClick={() => setError({isError: false})}
                  className="absolute top-0 right-0 px-2 text-md
                  text-red-900 font-bold hover:font-extrabold cursor-pointer">
                  x
                </span>
              </p>
            )}
            <p className="mb-4">
              {subHeader || type === "login"
                ? "Silakan login untuk melanjutkan. "
                : "Isi formulir di bawah ini untuk membuat akun baru."}
            </p>
            <FormAuth type={type} handleError={handleError} />
            <p className="text-center py-4">
              {type === "login" ? "Belum " : "Sudah"} memiliki akun?
              <Link
                to={type === "login" ? "/register" : "/login"}
                className="text-blue-600 font-semibold px-1 hover:text-blue-800"
              >
                {type === "login" ? "Daftar " : "Login"} Sekarang
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
