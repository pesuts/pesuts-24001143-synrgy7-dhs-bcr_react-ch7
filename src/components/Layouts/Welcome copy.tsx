import GreenButton from "../Elements/Button/GreenButton";
import HeroPicture from "../Fragments/Hero/HeroPicture";
import HeroTitle from "../Fragments/Hero/HeroTitle";
import Navbar from "./Navbar"

export default function Welcome() {
  return (
    <section className="main mb-5 lg:max-w-[100]" id="main">
      <div className="bg-light-blue ps-5 lg:px-0">
        {/* <!-- NAVBAR --> */}
        <Navbar />

        <div className="lg:flex items-end">
          <div className="py-2 lg:py-0 w-11/12 lg:flex lg:w-1/2 lg:justify-end">
            <div className="lg:ps-32 lg:pt-16">
              <HeroTitle />
              {/* <h1 className="font-extrabold text-4xl lg:text-[1.5em] pe-3 leading-normal">
                Sewa & Rental Mobil Terbaik di kawasan Yogyakarta
              </h1>
              <p className="py-5 lg:py-2 lg:w-[95%] lg:text-[.90em]">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p> */}
              {/* <a
                className="inline-block bg-lime-green text-sm text-white px-3 py-2 lg:mt-4 lg:mb-20 font-bold rounded hover:bg-lime-green-hover"
                href="cars"
              >
                Mulai Sewa Mobil
              </a> */}
              <GreenButton text="Mulai Sewa Mobil" href="cars"
                style="lg:mt-4 lg:mb-20" />
            </div>
          </div>
          {/* <div className="pe-0 lg:w-1/2 lg:ms-20">
            <img src="img/png/img_car.png" className="car" alt="Car Image" />
          </div> */}
          <HeroPicture />
        </div>
      </div>
    </section>
  );
}
