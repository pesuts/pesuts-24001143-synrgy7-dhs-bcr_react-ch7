export default function FindCarForm() {
  return (
    <form action="">
      <div className="forms lg:flex justify-evenly gap-x-4">
        <div className="form-driver">
          <p>Tipe Driver</p>
          <select
            name="form-driver"
            id="form-driver"
            className="border-gray-100 rounded-md border-2 w-full lg:w-56"
            // value={quantity} 
            // onChange={(e) => setQuantity(e.target.value)}
          >
            <option value="" hidden>
              Pilih Tipe Driver
            </option>
            <option value="1">Dengan Sopir</option>
            <option value="0">Tanpa Sopir (Lepas Kunci)</option>
          </select>
        </div>

        <div className="form-date">
          <p>Tanggal</p>
          <input
            type="date"
            name="form-date"
            id="form-date"
            className="border-gray-100 rounded-md border-2 w-full lg:w-56"
          />
        </div>

        <div className="form-time">
          <p>Waktu Jemput/Ambil</p>
          <input
            type="time"
            name="form-time"
            id="form-time"
            className="border-gray-100 rounded-md border-2 w-full lg:w-56"
          />
        </div>

        <div className="form-capacity">
          <p>Jumlah Penupang (opsional)</p>
          <input
            type="text"
            placeholder="Jumlah Penumpang"
            name="form-capacity"
            id="form-capacity"
            className="border-gray-100 rounded-md border-2 w-full lg:w-56"
          />
        </div>
        <div className="flex items-end">
          <button
            id="filter-btn"
            className=" bg-lime-green text-sm text-white mt-3 my-2 lg:mt-0 lg:my-0 px-3 py-3 font-bold rounded hover:bg-lime-green-hover"
            // href=""
          >
            Cari Mobil
          </button>
        </div>
      </div>
    </form>
  );
}
