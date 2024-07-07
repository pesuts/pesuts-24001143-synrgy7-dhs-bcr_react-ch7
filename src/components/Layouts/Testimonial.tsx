import Testimony from "../Fragments/Testimony";
import "@/assets/css/owl.carousel.min.css";
import "@/assets/css/owl.theme.default.min.css";
import "@/assets/css/owl.css";

import ReactOwlCarousel from "react-owl-carousel";

const options = {
  loop: true,
  margin: 10,
  nav: true,
  items: 1,
  responsive: {
    768: {
      stagePadding: 100,
    },
    1024: {
      stagePadding: 250,
    },
  },
};

export default function Testimonial() {
  const testimonies = [
    {
      person: "Budi Santoso 34, Bekasi",
      picture: "profile_1",
      testimony:
        "Saya telah menggunakan jasa rental mobil dari Binar Car Rental beberapa kali, dan setiap kali pengalaman saya selalu memuaskan. Mobil-mobil yang mereka sediakan selalu dalam kondisi terbaik, dan proses penyewaan sangat cepat dan mudah. Harga yang ditawarkan juga sangat kompetitif. Saya sangat merekomendasikan Binar Car Rental kepada siapa pun yang membutuhkan layanan rental mobil yang handal",
    },
    {
      person: "Putri Cahaya Sari 28, Malang",
      picture: "profile_2",
      testimony:
        "Saya sangat puas dengan layanan rental mobil dari Binar Car Rental. Mobil yang disediakan dalam kondisi prima, bersih, dan nyaman untuk perjalanan terlebih untuk saya yang sangat cinta dengan kebersihan dan kulitnya sensitif akan kotoran/debu. Pelayanan dari timnya juga sangat ramah dan profesional. Terima kasih Binar Car Rental, saya pasti akan merekomendasikan kepada teman dan keluarga!",
    },
    {
      person: "Toni Sunarto 37, Jakarta",
      picture: "profile_3",
      testimony:
        "Saya sangat puas dengan layanan rental mobil dari Binar Car Rental. Mobil yang disediakan dalam kondisi prima, bersih, dan nyaman untuk perjalanan terlebih untuk saya yang sangat cinta dengan kebersihan dan kulitnya sensitif akan kotoran/debu. Pelayanan dari timnya juga sangat ramah dan profesional. Terima kasih Binar Car Rental, saya pasti akan merekomendasikan kepada teman dan keluarga!",
    },
  ];
  return (
    <section className="testimonial mx-5 pb-5 lg:pt-16" id="testimonial">
      <h3 className="font-bold text-2xl text-center py-3">Testimonial</h3>
      <p className="pt-2 mb-6 text-center lg:pb-6">
        Berbagai review positif dari para pelanggan kami
      </p>

      {/* <div className="owl-carousel owl-theme"> */}
      <ReactOwlCarousel className="owl-theme" {...options}>
        {testimonies.map((testimony, index) => (
          <Testimony
            key={index}
            person={testimony.person}
            picture={testimony.picture}
            testimony={testimony.testimony}
          />
        ))}
      </ReactOwlCarousel>
      {/* {testimonies.map((testimony, index) => (
          <Testimony
            key={index}
            person={testimony.person}
            picture={testimony.picture}
            testimony={testimony.testimony}
          />
        ))} */}
      {/* <Testimony
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
        /> */}
      {/* </div> */}
    </section>
  );
}
