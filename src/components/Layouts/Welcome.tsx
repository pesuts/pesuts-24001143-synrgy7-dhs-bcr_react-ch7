import GreenButton from "../Elements/Button/GreenButton";
import Hero from "../Fragments/Hero";
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
      </div>
    </section>
  );
}
