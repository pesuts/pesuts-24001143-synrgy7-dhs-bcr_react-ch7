import { useEffect, useState } from "react";
import CTAButton from "../Elements/Button/CTAButton";
import NavButton from "../Elements/Button/NavButton";
import SideNavButton from "../Elements/Button/SideNavButton";
import NavList from "../Fragments/NavList";
import { decodeJwt, isTokenExpired } from "../../utils/jwtVerify";
import { googleLogout } from '@react-oauth/google';
// import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState<string>("");

  // const navigate = useNavigate()

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (isTokenExpired(token!)) {
        setIsLogin(false);
        return;
      }
      const payload = decodeJwt(token!);
      setUserName(payload.name);
      setIsLogin(true);
    } catch (error) {
      setIsLogin(false);
      console.error("Error decoding JWT:", error);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    googleLogout();
    // navigate();
    window.location.href = "/";
  }

  return (
    <nav className="border-gray-200 dark:bg-gray-900 dark:border-gray-700 lg:mx-28">
      <div className="max-w-[100%] flex flex-wrap items-center justify-between mx-auto py-4 lg:p-4">
        <a href="" className="w-28 h-8 my-4 bg-blue-800 inline-block"></a>

        <div className="hidden lg:block">
          <ul className="flex justify-evenly items-center gap-4 text-sm">
            <NavList>
              <NavButton text="Our Service" />
            </NavList>
            <NavList>
              <NavButton text="Why Us" />
            </NavList>
            <NavList>
              <NavButton text="Testimonial" />
            </NavList>
            <NavList>
              <NavButton text="FAQ" />
            </NavList>
            <NavList>
              {/* <CTAButton text="Register" href="register" /> */}
              {isLogin && (
                <a
                  onClick={() => setIsClicked(!isClicked)}
                  className="inline-block mx-auto bg-blue-bcr text-sm text-white px-3 py-2 font-bold rounded hover:bg-lime-green-hove cursor-pointer hover:bg-blue-950"
                >
                  <p className="flex items-center gap-1">
                    {/* <UserIcon className="w-4 h-4" /> {userName} */}
                    <span className="p-2 bg-white text-blue-800 rounded-full px-3 mx-1 font-bold">
                      {userName[0]}
                    </span>
                    {userName}
                  </p>
                </a>
              )}
              {!isLogin && (
                <CTAButton
                  text="Registrasi"
                  href="register"
                  style="my-4 px-4"
                />
              )}
              {isClicked && (
                <div
                  className="outline-blue-bcr outline outline-[2px] dropdown-menu absolute 
              right-[135px] top-18 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
                >
                  <a
                    onClick={() => handleLogout()}
                    className="block px-4 py-2 text-gray-700 hover:hover:bg-blue-bcr hover:text-white"
                  >
                    Logout
                  </a>
                </div>
              )}
            </NavList>
          </ul>
        </div>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="drawer-right-example"
          className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-60 dark:bg-gray-800"
          //  tabindex="-1"
          tabIndex={-1}
          aria-labelledby="drawer-right-label"
        >
          <h5
            id="drawer-right-label"
            className="mt-6 inline-flex items-center mb-4 text-lg font-extrabold text-gray-500 dark:text-gray-400"
          >
            BCR
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="mt-6 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <SideNavButton text="Our Services" />
          <SideNavButton text="Why US" />
          <SideNavButton text="Testimonial" />
          <SideNavButton text="FAQ" />
          <CTAButton text="Registrasi" href="register" />
        </div>
      </div>
    </nav>
  );
}
