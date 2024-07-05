import Faq from "../components/Layouts/Faq";
import FooterLayout from "../components/Layouts/FooterLayout";
import GettingStarted from "../components/Layouts/GettingStarted";
import Hero from "../components/Layouts/Welcome";
import Our from "../components/Layouts/Our";
import Testimonial from "../components/Layouts/Testimonial";
import WhyUs from "../components/Layouts/WhyUs";

export default function LandingPage() {
  return (
    <main className="mb-5">
      {/* <!-- HERO SECTION --> */}
      <Hero />

      {/* <!-- OUR CAR RENTAL SECTION --> */}
      <Our />

      {/* <!-- WHY US SECTION --> */}
      <WhyUs />

      {/* <!-- TESTIMONIAL SECTION --> */}
      <Testimonial />

      {/* <!-- GETTING STARTED SECTION --> */}
      <GettingStarted />

      {/* <!-- FAQ --> */}
      <Faq />

      {/* <!-- FOOTER --> */}
      <FooterLayout />
    </main>
  );
}
