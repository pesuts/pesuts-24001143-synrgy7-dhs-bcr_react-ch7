// import { ReactNode } from "react";
// import NavButton from "../Elements/Button/NavButton";

type Props = {
  text: string;
  id: string;
  description: string;
  // children?: ReactNode;
};

export default function FaqList({ text, id, description }: Props) {
  return (
    <>
      {/* <h2 id="accordion-collapse-heading-1"> */}
      <h2 id={id}>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-md focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          {/* <span>Apa saja syarat yang dibutuhkan?</span> */}
          <span>{text}</span>
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
            {/* Untuk menyewa mobil dari kami, Anda biasanya perlu memiliki SIM yang
            masih berlaku serta dokumen identitas lainnya seperti KTP atau
            paspor. Beberapa jenis mobil mungkin memiliki persyaratan tambahan,
            seperti usia minimal pengemudi. Pastikan untuk memeriksa
            syarat-syarat spesifik pada mobil yang Anda pilih. */}
            {description}
          </p>
        </div>
      </div>
      <div className="py-3"></div>
    </>
  );
}
