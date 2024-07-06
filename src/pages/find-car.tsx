import FooterLayout from "../components/Layouts/FooterLayout";
import WelcomeFindCar from "../components/Layouts/WelcomeFindCar";
import FindCarForm from "../components/Layouts/FindCar";
import { useContext } from "react";
import { FindCarContex } from "../contexts/FindCarContex";
import CarCard from "../components/Fragments/CarCard";

export default function FindCar() {
  const findCarContext = useContext(FindCarContex);

  const { filteredCars } = findCarContext!;

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
        >
          {filteredCars.map((car) => (
            <CarCard
              capacity={car.capacity}
              description={car.description}
              image={car.image}
              manufacture={car.manufacture}
              rentPerDay={car.rentPerDay}
              transmission={car.transmission}
              type={car.type}
              year={car.year}
            />
          ))}
        </div>
      </section>

      {/* <!-- FOOTER --> */}
      <FooterLayout />
    </main>
  );
}
