// import Faq from "../components/Layouts/Faq";
import Hero from "../components/Fragments/Hero";
import FindCarForm from "../components/Layouts/FindCar";
import Footer from "../components/Layouts/FooterLayout";
// import GettingStarted from "../components/Layouts/GettingStarted";
// import Hero from "../components/Layouts/Hero";
// import Our from "../components/Layouts/Our";
// import Testimonial from "../components/Layouts/Testimonial";
// import WhyUs from "../components/Layouts/WhyUs";
import Navbar from "../components/Layouts/Navbar";
import WelcomeFindCar from "../components/Layouts/WelcomeFindCar";
// import HeroPicture from "../Fragments/Hero/HeroPicture";
// import HeroTitle from "../Fragments/Hero/HeroTitle";

export default function FindCar() {
  return (
    <main className="mb-5">
      <WelcomeFindCar />
      <section className="main lg:mb-5 lg:max-w-[100] lg:relative" id="main">
        <div className="bg-light-blue ps-5 lg:px-0">
          {/* <!-- NAVBAR --> */}
          {/* <nav className="border-gray-200 dark:bg-gray-900 dark:border-gray-700 lg:mx-28">
            <div className="max-w-[100%] flex flex-wrap items-center justify-between mx-auto py-4 lg:p-4">
              <a href="" className="w-28 h-8 my-4 bg-blue-800 inline-block">
                {" "}
              </a>

              <div className="hidden lg:block">
                <ul className="flex justify-evenly items-center gap-4 text-sm">
                  <li className="nav-item px-2">
                    <a
                      className="nav-link active font-semibold hover:font-extrabold"
                      href="#our-section"
                    >
                      Our Service
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a
                      className="nav-link font-semibold hover:font-extrabold"
                      href="#why-us"
                    >
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a
                      className="nav-link font-semibold hover:font-extrabold"
                      href="#testimonial"
                    >
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a
                      className="nav-link font-semibold hover:font-extrabold"
                      href="#faq"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a
                      className="inline-block mx-auto bg-lime-green text-sm text-white px-3 py-2 font-bold rounded hover:bg-lime-green-hover"
                      href="#"
                    >
                      Register
                    </a>
                  </li>
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
                tabIndex={-1}
                // tabindex="-1"
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
                <a href="#our-section" className="block py-2 font-semibold">
                  Our Service
                </a>
                <a href="#why-us" className="block py-2 font-semibold">
                  Why US
                </a>
                <a href="#testimonial" className="block py-2 font-semibold">
                  Testimony
                </a>
                <a href="#faq" className="block py-2 font-semibold">
                  FAQ
                </a>
                <a
                  href=""
                  className="inline-block bg-lime-green text-sm text-white px-3 py-2 my-4 font-bold rounded hover:bg-lime-green-hover"
                >
                  Register
                </a>
              </div>
            </div>
          </nav> */}
          <Navbar />

          <Hero style="lg:mb-28"></Hero>

          {/* <div className="lg:flex items-end">
            <div className="py-2 lg:py-0 w-11/12 lg:flex lg:w-1/2 lg:justify-end">
              <div className="lg:ps-32 lg:pt-16 lg:mb-20">
                
                <h1 className="font-extrabold text-4xl lg:text-[1.5em] pe-3 leading-normal">
                  Sewa & Rental Mobil Terbaik di kawasan Yogyakarta
                </h1>
                <p className="py-5 lg:py-2 lg:w-[95%]">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
              </div>
            </div>
            <div className="pe-0 lg:w-1/2 lg:ms-20">
              <img src="img/png/img_car.png" className="car" alt="Car Image" />
            </div>
          </div> */}
        </div>

        {/* <!-- FORM --> */}
        <FindCarForm />
      </section>

      {/* <!-- RESULT SECTION --> */}
      <section id="result testimonial" className="mx-5 pb-5 lg:pt-16">
        <div
          id="cars-container"
          className="flex flex-wrap justify-center gap-6 gap-y-6"
        ></div>
      </section>

      {/* <!-- FOOTER --> */}
      {/* <footer className="p-5 lg:mt-10 mb-10 max-w-max lg:max-w-[100%] lg:mx-28">
        <div className="lg:flex">
          <div className="lg:w-4/12">
            <ul className="">
              <li className="py-1">
                Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000
              </li>
              <li className="py-1">binarcarrental@gmail.com</li>
              <li className="py-1">081-233-334-808</li>
            </ul>
          </div>
          <div className="lg:w-2/12">
            <ul className="bg-primar">
              <li className="py-2 font-semibold">
                <a
                  href="#our-section"
                  className="text-decoration-none text-black"
                >
                  Our Services
                </a>
              </li>
              <li className="py-2 font-semibold">
                <a href="#why-us" className="text-decoration-none text-black">
                  Why Us
                </a>
              </li>
              <li className="py-2 font-semibold">
                <a
                  href="#testimonial"
                  className="text-decoration-none text-black"
                >
                  Testimonial
                </a>
              </li>
              <li className="py-2 font-semibold">
                <a href="#faq" className="text-decoration-none text-black">
                  {" "}
                  FAQ{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-4/12">
            <p className="font-semibold">Connect with us</p>
            <div className="flex gap-4 py-4">
              <a href="">
                <img src="img/icons/icon-facebook.png" width="30" alt="" />
              </a>
              <a href="">
                <img src="img/icons/icon-instagram.png" width="30" alt="" />
              </a>
              <a href="">
                <img src="img/icons/icon-twitter.png" width="30" alt="" />
              </a>
              <a href="">
                <img src="img/icons/icon-mail.png" width="30" alt="" />
              </a>
              <a href="">
                <img src="img/icons/icon-twitch.png" width="30" alt="" />
              </a>
            </div>
          </div>
          <div className="lg:w-3/12">
            <p className="font-semibold">Copyright Binar 2024</p>
            <a href="" className="w-28 h-8 my-4 bg-blue inline-block">
              {" "}
            </a>
          </div>
        </div>
      </footer> */}
      <Footer />
    </main>
  );
}
