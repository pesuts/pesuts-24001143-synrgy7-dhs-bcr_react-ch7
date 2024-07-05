import GreenButton from "../Elements/Button/GreenButton";

export default function GettingStarted() {
  return (
    <section
      className="getting-started lg:mx-28 px-5 my-12"
      id="getting-started"
    >
      <div className="text-white p-14 rounded-4 bg-blue-800 rounded-xl">
        <h3 className="mb-3 text-3xl font-bold text-center my-4 p-4">
          Sewa mobil di Yogyakarta! Sekarang
        </h3>
        <p className="mb-5 text-center col-md-6 mx-auto">
          Temukan pengalaman berkendara yang tak tertandingi dengan layanan
          kami. Mobil yang bersih, nyaman, dan siap mengantar Anda menuju
          petualangan yang tak terlupakan!
        </p>
        <div className="flex justify-center">
          {/* <a
            href="cars"
            className="inline-block mx-auto bg-lime-green text-sm text-white px-4 py-3 my-6 font-bold rounded hover:bg-lime-green-hover"
          >
            Mulai Sewa Mobil
          </a> */}
          <GreenButton text="Mulai Sewa Mobil" style="px-4 py-3 my-6" href="cars"/>
        </div>
      </div>
    </section>
  );
}
