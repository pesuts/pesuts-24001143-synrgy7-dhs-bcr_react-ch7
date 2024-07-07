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
      <Hero />
      <Our />
      <WhyUs />
      <Testimonial />
      <GettingStarted />
      <Faq />
      <FooterLayout />
    </main>
  );
}
