import GreenButton from "../Elements/Button/GreenButton";
import Hero from "../Fragments/Hero";
// import HeroPicture from "../Fragments/Hero/HeroPicture";
// import HeroTitle from "../Fragments/Hero/HeroTitle";
import Navbar from "./Navbar";

export default function Welcome() {
  return (
    <section className="main mb-5 lg:max-w-[100]" id="main">
      <div className="bg-light-blue ps-5 lg:px-0">
        {/* <!-- NAVBAR --> */}
        <Navbar />
        {/* <Hero /> */}
        <Hero>
          <GreenButton
            text="Mulai Sewa Mobil"
            href="cars"
            style="lg:mt-4 lg:mb-20"
          />
        </Hero>
        {/* <div className="lg:flex items-end">
          <div className="py-2 lg:py-0 w-11/12 lg:flex lg:w-1/2 lg:justify-end">
            <div className="lg:ps-32 lg:pt-16">
              <HeroTitle />
              <GreenButton text="Mulai Sewa Mobil" href="cars"
                style="lg:mt-4 lg:mb-20" />
            </div>
          </div>
          <HeroPicture />
        </div> */}
      </div>
    </section>
  );
}
