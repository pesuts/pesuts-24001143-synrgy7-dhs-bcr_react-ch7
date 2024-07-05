// type OnClickedProfile = () => void;

// import { useEffect, useState } from "react";
// import { decodeJwt } from "../../../utils/jwtVerify";
import { useLogin } from "../../../hooks/useLogin";
// import { useState } from "react";
// import * as base64url from 'base64-url';
// import jwtDecode from 'jwt-decode';
// import * as jwt_decode from "jwt-decode";
// import jwt_decode from 'jwt-decode';



type Props = {
  title: string;
  isClicked: boolean;
  onClickedProfile: (isClicked: boolean) => void;
};

function handleLogout() { 
  localStorage.removeItem("token");
  window.location.href = "/login";
}

export default function DashboardHeader({
  title,
  isClicked,
  onClickedProfile,
}: Props) {
  // const [localStorageData, setLocalStorageData] = useState<string>();
  // const [userName, setUserName] = useState<string>();
  const username = useLogin();



  // const umkm = localStorage.getItem("token");
  // alert(umkm);

  // try {
  //   // Panggil fungsi decodeJwt dan ambil payload
  //   const payload = decodeJwt(umkm!);

  //   // Ambil username dari payload
  //   const name = payload.name;
  //   console.log(`Name: ${name}`);
  // } catch (error) {
  //   console.error("Error decoding JWT:", error!);
  // }
  // useEffect(() => {
  //   try {
  //     // Panggil fungsi decodeJwt dan ambil payload
  //     const payload = decodeJwt(umkm!);
    
  //     // Ambil username dari payload
  //     // const username = payload.name;
  //     setUserName(payload.name);
  //     // console.log(`Username: ${username}`);
  //   } catch (error) {
  //     console.error('Error decoding JWT:', error);
  //   }
  // }, []);

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 border rounded-md"
        />
        <div
          className="relative dropdown hover:rounded px-3 py-2
            hover:bg-[#0C28A5] active:hover:bg-[#0C28A5] hover:text-white"
          onClick={() => onClickedProfile(!isClicked)}
        >
          <button className="flex items-center">
            <span className="mr-2">{username}</span>
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
              className="outline-[#0C28A5] outline outline-[2px] dropdown-menu absolute 
              right-0 top-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
            >
              {/* <a
                // href="#"
                
                className="block px-4 py-2 text-gray-700 hover:hover:bg-[#0C28A5] hover:text-white"
              >
                Profile
              </a> */}
              <a
                // href="#"
                onClick={() => handleLogout()}
                className="block px-4 py-2 text-gray-700 hover:hover:bg-[#0C28A5] hover:text-white"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
