import WhyUsCard from "../Fragments/WhyUsCard"

export default function WhyUs() {
  return (
    <section className="why-us my-10 lg:mx-28" id="why-us">
      <div className="container px-5">
        <h2 className="font-bold text-2xl text-center py-3 lg:flex">Why Us</h2>
        <p className="pt-2 mb-6 text-center lg:flex lg:pb-6">
          Mengapa harus pilih Binar Car Rental?
        </p>
        <div className="cards gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:mx-auto">
          <WhyUsCard
            text="Mobil Lengkap"
            icon="thumb"
            description="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat"
          />
          <WhyUsCard
            text="Harga Murah"
            icon="price"
            description="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain"
          />
          <WhyUsCard
            text="Layanan 24 Jam"
            icon="24hrs"
            description="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu"
          />
          <WhyUsCard
            text="Sopir Profesional"
            icon="professional"
            description="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu"
          />
          {/* <div className="border-2 rounded-lg p-6 my-4">
            <img
              src="img/icons/icon-thumb.png"
              className="py-3"
              width="40"
              alt="Thumb Icon"
            />
            <h5 className="mt-2 mb-3 font-bold text-lg">Mobil Lengkap</h5>
            <p>
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
          <div className="border-2 rounded-lg p-6 my-4">
            <img
              src="img/icons/icon-price.png"
              className="py-3"
              width="40"
              alt="Price Icon"
            />
            <h5 className="mt-2 mb-3 font-bold text-lg">Harga Murah</h5>
            <p>
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div className="border-2 rounded-lg p-6 my-4">
            <img
              src="img/icons/icon-24hrs.png"
              className="py-3"
              width="40"
              alt="Clock Icon"
            />
            <h5 className="mt-2 mb-3 font-bold text-lg">Layanan 24 Jam</h5>
            <p>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div className="border-2 rounded-lg p-6 my-4">
            <img
              src="img/icons/icon-professional.png"
              className="py-3"
              width="40"
              alt="Professional Icon"
            />
            <h5 className="mt-2 mb-3 font-bold text-lg">Sopir Profesional</h5>
            <p>
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
