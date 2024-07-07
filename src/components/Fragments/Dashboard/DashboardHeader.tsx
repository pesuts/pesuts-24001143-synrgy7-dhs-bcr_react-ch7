import { useEffect, useState } from "react";
import { decodeJwt } from "../../../utils/jwtVerify";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

type Props = {
  title: string;
  isClicked: boolean;
  href?: string;
  onClickedProfile: (isClicked: boolean) => void;
};

export default function DashboardHeader({
  title,
  isClicked,
  onClickedProfile,
}: Props) {
  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  const [userName, setUserName] = useState<string>("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    try {
      const payload = decodeJwt(token!);
      setUserName(payload.name);
    } catch (error) {
      console.error("Error decoding JWT:", error);
    }
  }, []);

  return (
    <header className="mb-8">
      <div className="flex justify-between items-center ">
        {/* <h1 className="text-2xl font-bold text-gray-800">{title}</h1> */}
        <h3 className="flex gap-2">
          <Link to={"/dashboard"} className="font-bold">
            Dashboard
          </Link>
          <span>/</span>
          <Link to={"#"} className="">
            {title.replace(" ", "")}
          </Link>
          {/* <Link to={"/dashboard/cars"} className="font-bold">Cars</Link> */}
        </h3>
        <div className="flex items-center relative">
          <span className="absolute left-7">
            <MagnifyingGlassIcon className="w-5 h-5 text-slate-600"/>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="ms-4 ps-10 p-2 border rounded-md"
          />
          <button className="outline outline-blue-bcr text-blue-bcr hover:bg-blue-bcr hover:text-white
            font-bold p-2 m-0 outline-[2px] rounded-sm">
            Search
          </button>
          <div
            className="relative dropdown hover:rounded ms-4 px-3 py-2
            hover:bg-blue-bcr active:hover:bg-blue-bcr hover:text-white"
            onClick={() => onClickedProfile(!isClicked)}
          >
            <button className="flex items-center">
              <span className="p-2 bg-slate-300 rounded-full px-4 mx-1 font-bold">{userName[0]}</span>
              <span className="mr-2">{userName}</span>
              {/* <span className="mr-2">{userName}</span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isClicked && (
              <div
                className="outline-blue-bcr outline outline-[2px] dropdown-menu absolute 
              right-0 top-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
              >
                <a
                  onClick={() => handleLogout()}
                  className="block px-4 py-2 text-gray-700 hover:hover:bg-blue-bcr hover:text-white"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-2 bg-blue-900 mr-2 h-10"></div>
        <h1 className="text-2xl font-extrabold text-gray-900 my-4">{title}</h1>
      </div>
    </header>
  );
}
