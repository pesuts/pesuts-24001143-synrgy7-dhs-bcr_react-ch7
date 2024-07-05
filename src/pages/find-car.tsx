// import { useState } from "react";
import FooterLayout from "../components/Layouts/FooterLayout";
import WelcomeFindCar from "../components/Layouts/WelcomeFindCar";
import FindCarForm from "../components/Layouts/FindCar";
import { useLogin } from "../hooks/useLogin";

export default function FindCar() {
  // const [cars, setCars] = useState();
  useLogin();

  return (
    <main className="mb-5">
      {/* <!-- HERO SECTION --> */}
      <WelcomeFindCar>
        <FindCarForm />
      </WelcomeFindCar>

      {/* <!-- RESULT SECTION --> */}
      <section id="result testimonial" className="mx-5 pb-5 lg:pt-16">
        <div
          id="cars-container"
          className="flex flex-wrap justify-center gap-6 gap-y-6"
        ></div>
      </section>

      {/* <!-- FOOTER --> */}
      <FooterLayout />
    </main>
  );
}
