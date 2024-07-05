import FaqList from "../Fragments/FaqList";

export default function Faq() {
  return (
    <section
      className="faq p-5 my-8 lg:mx-28 lg:flex lg:gap-6 lg:justify-between"
      id="faq"
    >
      <div className="lg:w-5/12">
        <div className="container ">
          <h2 className="mb-3 font-bold text-2xl text-center lg:hidden">
            Frequently Asked Question
          </h2>
          <h2 className="hidden mb-3 font-bold text-3xl text-left lg:block">
            Frequently Asked Question
          </h2>
          <p className="mb-5 text-center py-3 lg:hidden">
            Temukan jawaban atas pertanyaan umum mengenai layanan sewa mobil
            kami di bawah ini.
          </p>
          <p className="mb-5 text-left py-3 hidden lg:block">
            Temukan jawaban atas pertanyaan umum mengenai layanan sewa mobil
            kami di bawah ini.
          </p>
        </div>
      </div>
      <div
        className="lg:w-7/12"
        id="accordion-collapse"
        data-accordion="collapse"
      >
        <FaqList
          text="Apa saja syarat yang dibutuhkan?"
          id="accordion-collapse-heading-1"
          description="Untuk menyewa mobil dari kami, Anda biasanya perlu memiliki SIM
              yang masih berlaku serta dokumen identitas lainnya seperti KTP
              atau paspor. Beberapa jenis mobil mungkin memiliki persyaratan
              tambahan, seperti usia minimal pengemudi. Pastikan untuk memeriksa
              syarat-syarat spesifik pada mobil yang Anda pilih."
        />
        <FaqList
          text="Berapa Hari minimal sewa mobil lepas kunci?"
          id="accordion-collapse-heading-2"
          description="Biasanya, kami memiliki kebijakan sewa minimal untuk mobil lepas
              kunci. Durasi sewa minimal ini bisa bervariasi tergantung pada
              jenis mobil dan musim sewa. Untuk informasi lebih lanjut mengenai
              durasi sewa minimal, silakan hubungi kami atau cek pada
              spesifikasi mobil yang Anda pilih."
        />
        <FaqList
          text="Berapa hari sebelumnya sebaiknya booking sewa mobil?"
          id="accordion-collapse-heading-3"
          description="Untuk memastikan ketersediaan mobil pada tanggal yang Anda
              inginkan, sebaiknya Anda melakukan pemesanan secepat mungkin.
              Namun, kami juga dapat menerima pemesanan dalam waktu singkat
              tergantung pada ketersediaan mobil. Untuk musim liburan atau
              periode sibuk lainnya, disarankan untuk melakukan pemesanan
              beberapa minggu sebelumnya untuk memastikan Anda mendapatkan mobil
              yang sesuai dengan kebutuhan Anda."
        />
        <FaqList
          text="Apakah ada biaya antar jemput?"
          id="accordion-collapse-heading-4"
          description="Ya, kami menyediakan layanan antar-jemput dengan biaya tambahan.
              Biaya ini akan bervariasi tergantung lokasi penjemputan dan
              pengantaran. Untuk informasi lebih lanjut mengenai biaya
              antar-jemput, silakan hubungi tim layanan pelanggan kami."
        />
        <FaqList
          text="Bagaimana jika terjadi kecelakaan?"
          id="accordion-collapse-heading-5"
          description="Jika terjadi kecelakaan, segera hubungi tim darurat kami dan
              laporkan insiden tersebut. Kami akan memberikan panduan
              langkah-langkah yang harus diambil, termasuk pertukaran informasi
              dengan pihak terkait dan pelaporan ke pihak asuransi. Pastikan
              untuk membaca dan memahami ketentuan asuransi yang terkait dengan
              penyewaan mobil Anda."
        />
        {/* <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-md focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>Apa saja syarat yang dibutuhkan?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 border rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Untuk menyewa mobil dari kami, Anda biasanya perlu memiliki SIM
              yang masih berlaku serta dokumen identitas lainnya seperti KTP
              atau paspor. Beberapa jenis mobil mungkin memiliki persyaratan
              tambahan, seperti usia minimal pengemudi. Pastikan untuk memeriksa
              syarat-syarat spesifik pada mobil yang Anda pilih.
            </p>
          </div>
        </div>
        <div className="py-3"></div>

        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center justify-between rounded-md w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span className="text-left">
              Berapa Hari minimal sewa mobil lepas kunci?
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className="p-5 border rounded-md border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Biasanya, kami memiliki kebijakan sewa minimal untuk mobil lepas
              kunci. Durasi sewa minimal ini bisa bervariasi tergantung pada
              jenis mobil dan musim sewa. Untuk informasi lebih lanjut mengenai
              durasi sewa minimal, silakan hubungi kami atau cek pada
              spesifikasi mobil yang Anda pilih.
            </p>
          </div>
        </div>

        <div className="py-3"></div>

        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center justify-between rounded-md w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span className="text-left">
              Berapa hari sebelumnya sebaiknya booking sewa mobil?
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 border rounded-md border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Untuk memastikan ketersediaan mobil pada tanggal yang Anda
              inginkan, sebaiknya Anda melakukan pemesanan secepat mungkin.
              Namun, kami juga dapat menerima pemesanan dalam waktu singkat
              tergantung pada ketersediaan mobil. Untuk musim liburan atau
              periode sibuk lainnya, disarankan untuk melakukan pemesanan
              beberapa minggu sebelumnya untuk memastikan Anda mendapatkan mobil
              yang sesuai dengan kebutuhan Anda.
            </p>
          </div>
        </div>

        <div className="py-3"></div>

        <h2 id="accordion-collapse-heading-4">
          <button
            type="button"
            className="flex items-center justify-between rounded-md w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-4"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-4"
          >
            <span className="text-left">Apakah ada biaya antar jemput?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-4"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-4"
        >
          <div className="p-5 border rounded-md border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Ya, kami menyediakan layanan antar-jemput dengan biaya tambahan.
              Biaya ini akan bervariasi tergantung lokasi penjemputan dan
              pengantaran. Untuk informasi lebih lanjut mengenai biaya
              antar-jemput, silakan hubungi tim layanan pelanggan kami.
            </p>
          </div>
        </div>

        <div className="py-3"></div>

        <h2 id="accordion-collapse-heading-5">
          <button
            type="button"
            className="flex items-center justify-between rounded-md w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-5"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-5"
          >
            <span className="text-left">
              Bagaimana jika terjadi kecelakaan?
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-5"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-5"
        >
          <div className="p-5 border rounded-md border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Jika terjadi kecelakaan, segera hubungi tim darurat kami dan
              laporkan insiden tersebut. Kami akan memberikan panduan
              langkah-langkah yang harus diambil, termasuk pertukaran informasi
              dengan pihak terkait dan pelaporan ke pihak asuransi. Pastikan
              untuk membaca dan memahami ketentuan asuransi yang terkait dengan
              penyewaan mobil Anda.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
