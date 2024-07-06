import { ReactNode } from "react";
import Hero from "../Fragments/Hero";
import Navbar from "./Navbar";

type Props = {
  children?: ReactNode;
};

export default function WelcomeFindCar({ children }: Props) {
  return (
    <section className="main lg:mb-5 lg:max-w-[100] lg:relative" id="main">
      <div className="bg-light-blue ps-5 lg:px-0">
        <Navbar />
        <Hero style="lg:mb-28"></Hero>
      </div>
      {/* <FindCarForm /> */}
      {children}
    </section>
  );
}
