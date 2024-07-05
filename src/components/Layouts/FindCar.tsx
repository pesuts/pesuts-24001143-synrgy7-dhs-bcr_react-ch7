import FindCarForm from "../Fragments/FindCarForm";

export default function FindCar() {
  return (
    <section className="find-car -mt-12 lg:absolute lg:-bottom-16 left-0 right-0 ms-auto me-auto scale-[0.9] z-50">
      <div className="lg:flex lg:justify-center">
        <div className="p-5 lg:flex justify-center rounded-xl shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] bg-white">
          <FindCarForm />
        </div>
      </div>
    </section>
  );
}
