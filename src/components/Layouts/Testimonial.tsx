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
    </div>
  </section>
  );
}