import GreenButton from "../Elements/Button/GreenButton";
import NavButton from "../Elements/Button/NavButton";
import SideNavButton from "../Elements/Button/SideNavButton";
import NavList from "../Fragments/NavList";

export default function Navbar() {
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
              <GreenButton text="Register" href="register" />
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
          <GreenButton text="Registrasi" href="#" style="my-4 px-4"/>
        </div>
      </div>
    </nav>
  );
}
