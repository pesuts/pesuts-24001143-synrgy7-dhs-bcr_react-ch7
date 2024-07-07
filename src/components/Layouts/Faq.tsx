import FaqList from "../Fragments/FaqList";

export default function Faq() {
  const faqList = [
    {
      text: "Apa saja syarat yang dibutuhkan?",
      description:
        "Untuk menyewa mobil dari kami, Anda biasanya perlu memiliki SIM yang masih berlaku serta dokumen identitas lainnya seperti KTP atau paspor. Beberapa jenis mobil mungkin memiliki persyaratan tambahan, seperti usia minimal pengemudi. Pastikan untuk memeriksa syarat-syarat spesifik pada mobil yang Anda pilih.",
    },
    {
      text: "Berapa Hari minimal sewa mobil lepas kunci?",
      description:
        "Biasanya, kami memiliki kebijakan sewa minimal untuk mobil lepas kunci. Durasi sewa minimal ini bisa bervariasi tergantung pada jenis mobil dan musim sewa. Untuk informasi lebih lanjut mengenai durasi sewa minimal, silakan hubungi kami atau cek pada spesifikasi mobil yang Anda pilih.",
    },
    {
      text: "Berapa hari sebelumnya sebaiknya booking sewa mobil?",
      description:
        "Untuk memastikan ketersediaan mobil pada tanggal yang Anda inginkan, sebaiknya Anda melakukan pemesanan secepat mungkin. Namun, kami juga dapat menerima pemesanan dalam waktu singkat tergantung pada ketersediaan mobil. Untuk musim liburan atau periode sibuk lainnya, disarankan untuk melakukan pemesanan beberapa minggu sebelumnya untuk memastikan Anda mendapatkan mobil yang sesuai dengan kebutuhan Anda.",
    },
    {
      text: "Apakah ada biaya antar jemput?",
      description:
        "Ya, kami menyediakan layanan antar-jemput dengan biaya tambahan. Biaya ini akan bervariasi tergantung lokasi penjemputan dan pengantaran. Untuk informasi lebih lanjut mengenai biaya antar-jemput, silakan hubungi tim layanan pelanggan kami.",
    },
    {
      text: "Bagaimana jika terjadi kecelakaan?",
      description:
        "Jika terjadi kecelakaan, segera hubungi tim darurat kami dan laporkan insiden tersebut. Kami akan memberikan panduan langkah-langkah yang harus diambil, termasuk pertukaran informasi dengan pihak terkait dan pelaporan ke pihak asuransi. Pastikan untuk membaca dan memahami ketentuan asuransi yang terkait dengan penyewaan mobil Anda.",
    },
  ];

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
        {faqList.map((faq, index) => (
          <FaqList
            key={index+1}
            text={faq.text}
            // id={faq.id}
            description={faq.description}
          />
        ))}
      </div>
    </section>
  );
}
