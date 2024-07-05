import OurList from "../Fragments/OurList";

export default function Our() {
  return (
    <section className="our-section my-12 lg:w-[100%]" id="our-section">
      <div className="px-5 lg:flex justify-center">
        <div className="py-6 lg:w-1/2 lg:flex lg:justify-end">
          <img
            src="img/png/girl.png"
            className="px-16 lg:w-[80%]"
            alt="Girl Picture"
          />
        </div>
        <div className="lg:w-1/2 lg:pt-14 lg:ps-8 lg:pe-16">
          <h3 className="font-bold text-2xl">
            Best Car Rental for any kind of trip in Yogyakarta!
          </h3>
          <p className="py-3">
            Sewa mobil di Yogyakarta! bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru , serta
            kualitas pelayanan terbaik untuk perjalanan wisata , bisnis,
            wedding, meeting , dll.
          </p>
          <ul className="services-list">
            {/* <li className="py-2">
              <p className="">
                <img
                  src="img/icons/check.png"
                  className="inline h-6 pe-2"
                  alt=""
                />
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
            </li>
            <li className="py-2">
              <p className="checklist">
                <img
                  src="img/icons/check.png"
                  className="inline h-6 pe-2"
                  alt=""
                />
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
            </li>
            <li className="py-2">
              <p className="checklist">
                <img
                  src="img/icons/check.png"
                  className="inline h-6 pe-2"
                  alt=""
                />
                Sewa Mobil Jangka Panjang Bulanan
              </p>
            </li>
            <li className="py-2">
              <p className="checklist">
                <img
                  src="img/icons/check.png"
                  className="inline h-6 pe-2"
                  alt=""
                />
                Gratis Antar - Jemput Mobil di Bandara
              </p>
            </li>
            <li className="py-2">
              <p className="checklist">
                <img
                  src="img/icons/check.png"
                  className="inline h-6 pe-2"
                  alt=""
                />
                Layanan Airport Transfer / Drop In Out
              </p>
            </li> */}
            <OurList text="Sewa Mobil Dengan Supir di Bali 12 Jam" />
            <OurList text="Sewa Mobil Lepas Kunci di Bali 24 Jam" />
            <OurList text="Sewa Mobil Jangka Panjang Bulanan" />
            <OurList text="Gratis Antar - Jemput Mobil di Bandara" />
            <OurList text="Layanan Airport Transfer / Drop In Out" />
          </ul>
        </div>
      </div>
    </section>
  );
}
