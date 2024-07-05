import Testimony from "../Fragments/Testimony";

export default function Testimonial() { 
  return (
    <section className="testimonial mx-5 pb-5 lg:pt-16" id="testimonial">
    <h3 className="font-bold text-2xl text-center py-3">Testimonial</h3>
    <p className="pt-2 mb-6 text-center lg:pb-6">
      Berbagai review positif dari para pelanggan kami
    </p>

      <div className="owl-carousel owl-theme">
        <Testimony
          person="Budi Santoso 34, Bekasi"
          picture="profile_1"
          testimony="Saya telah menggunakan jasa rental mobil dari Binar Car
              Rental beberapa kali, dan setiap kali pengalaman saya selalu
              memuaskan. Mobil-mobil yang mereka sediakan selalu dalam
              kondisi terbaik, dan proses penyewaan sangat cepat dan mudah.
              Harga yang ditawarkan juga sangat kompetitif. Saya sangat
              merekomendasikan Binar Car Rental kepada siapa pun yang
              membutuhkan layanan rental mobil yang handal"
        />
        <Testimony
          person="Putri Cahaya Sari 28, Malang"
          picture="profile_2"
          testimony="Saya sangat puas dengan layanan rental mobil dari Binar Car
          Rental. Mobil yang disediakan dalam kondisi prima, bersih, dan
          nyaman untuk perjalanan terlebih untuk saya yang sangat cinta
          dengan kebersihan dan kulitnya sensitif akan kotoran/debu.
          Pelayanan dari timnya juga sangat ramah dan profesional.
          Terima kasih Binar Car Rental, saya pasti akan
          merekomendasikan kepada teman dan keluarga!"
        />
        <Testimony
          person="Toni Sunarto 37, Jakarta"
          picture="profile_3"
          testimony="Saya sangat puas dengan layanan rental mobil dari Binar Car
              Rental. Mobil yang disediakan dalam kondisi prima, bersih, dan
              nyaman untuk perjalanan terlebih untuk saya yang sangat cinta
              dengan kebersihan dan kulitnya sensitif akan kotoran/debu.
              Pelayanan dari timnya juga sangat ramah dan profesional.
              Terima kasih Binar Car Rental, saya pasti akan
              merekomendasikan kepada teman dan keluarga!"
        />
      {/* <div className="item mx-3">
        <div className="bg-light-blue rounded-xl px-14 py-12 lg:py-20 lg:flex lg:gap-12 lg:items-center lg:justify-center">
          <div className=" lg:align-items-center lg:justify-content-center lg:w-2/12">
            <img
              src="img/png/profile_1.png"
              className="mx-auto rounded-full object-cover h-20 w-20 lg:w-40"
              alt="User 1"
            />
          </div>
          <div className="lg:w-10/12">
            <div className="lg:-ms-[73%]">
              <img
                src="img/png/5_stars.png"
                className="lg:pb-2 py-6 mx-auto"
                width="100"
                alt=""
              />
            </div>
            <p className="text-left text-base">
              "Saya telah menggunakan jasa rental mobil dari Binar Car
              Rental beberapa kali, dan setiap kali pengalaman saya selalu
              memuaskan. Mobil-mobil yang mereka sediakan selalu dalam
              kondisi terbaik, dan proses penyewaan sangat cepat dan mudah.
              Harga yang ditawarkan juga sangat kompetitif. Saya sangat
              merekomendasikan Binar Car Rental kepada siapa pun yang
              membutuhkan layanan rental mobil yang handal"
            </p>
            <p className="font-bold py-3">Budi Santoso 34, Bekasi</p>
          </div>
        </div>
      </div>
      <div className="item mx-3">
        <div className="bg-light-blue rounded-xl px-14 py-12 lg:py-20 lg:flex lg:gap-12 lg:items-center lg:justify-center">
          <div className=" lg:align-items-center lg:justify-content-center lg:w-2/12">
            <img
              src="img/png/profile_2.png"
              className="mx-auto rounded-full object-cover h-20 w-20 lg:w-40"
              alt="User 1"
            />
          </div>
          <div className="lg:w-10/12">
            <div className="lg:-ms-[73%]">
              <img
                src="img/png/5_stars.png"
                className="lg:pb-2 mx-auto py-6"
                width="100"
                alt=""
              />
            </div>
            <p className="text-left text-base">
              “Saya sangat puas dengan layanan rental mobil dari Binar Car
              Rental. Mobil yang disediakan dalam kondisi prima, bersih, dan
              nyaman untuk perjalanan terlebih untuk saya yang sangat cinta
              dengan kebersihan dan kulitnya sensitif akan kotoran/debu.
              Pelayanan dari timnya juga sangat ramah dan profesional.
              Terima kasih Binar Car Rental, saya pasti akan
              merekomendasikan kepada teman dan keluarga!”
            </p>
            <p className="font-bold py-3">Putri Cahaya Sari 28, Malang</p>
          </div>
        </div>
      </div>
      <div className="item mx-3">
        <div className="bg-light-blue rounded-xl px-14 py-12 lg:py-20 lg:flex lg:gap-12 lg:items-center lg:justify-center">
          <div className=" lg:align-items-center lg:justify-content-center lg:w-2/12">
            <img
              src="img/png/profile_3.png"
              className="mx-auto rounded-full object-cover h-20 w-20 lg:w-40"
              alt="User 1"
            />
          </div>
          <div className="lg:w-10/12">
            <div className="lg:-ms-[73%]">
              <img
                src="img/png/5_stars.png"
                className="lg:pb-2 mx-auto py-6"
                width="100"
                alt=""
              />
            </div>
            <p className="text-left text-base">
              “Saya sangat puas dengan layanan rental mobil dari Binar Car
              Rental. Mobil yang disediakan dalam kondisi prima, bersih, dan
              nyaman untuk perjalanan terlebih untuk saya yang sangat cinta
              dengan kebersihan dan kulitnya sensitif akan kotoran/debu.
              Pelayanan dari timnya juga sangat ramah dan profesional.
              Terima kasih Binar Car Rental, saya pasti akan
              merekomendasikan kepada teman dan keluarga!”
            </p>
            <p className="font-bold py-3">Toni Sunarto 37, Jakarta</p>
          </div>
        </div>
      </div> */}
    </div>
  </section>
  );
}