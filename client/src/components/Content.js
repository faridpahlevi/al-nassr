import M01AB_Chart from "./chart/M01AB_Chart";
import M01AE_Chart from "./chart/M01AE_Chart";

const Content = (props) => {
  return (
    <section id={`${props.id}`} className="py-14 min-h-screen sticky">
      <div className="mb-6 w-3/4 mx-auto md:mb-12">
        <h2 className="text-3xl font-bold text-main md:text-5xl">
          About Dataset
        </h2>
      </div>
      <div className="mb-10 flex flex-col gap-4 w-3/4 mx-auto text-base sm:flex-row sm:gap-12 md:mb-20">
        <div className="text-justify sm:flex-initial sm:w-3/4 tracking-wide text-main">
          <p>
            Dataset diambil dari salah satu situs open dataset yaitu
            <a
              href="https://www.kaggle.com/datasets/milanzdravkovic/pharma-sales-data"
              target={"_blank"}
              className="inline-block font-mono ml-1 px-1 italic bg-violet-200 rounded-md hover:text-white"
            >
              kaggle.com
            </a>
          </p>
          <p>
            Dataset terdiri dari 4212 data transaksional dalam 6 tahun (periode
            2014-2019), menunjukkan tanggal dan waktu penjualan, nama merek obat
            farmasi dan kuantitas yang dijual, diekspor dari sistem
            Point-of-Sale di individu farmasi.
          </p>
          <p className="pt-4">
            Data yang disaji dalam website ini merupakan
            <span className="font-mono font-semibold"> volume </span>
            dari penjualan 2 kelompok obat yang diklasifikasikan ke dalam
            kategori Sistem Klasifikasi Anatomical Therapeutic Chemical (ATC)
            yaitu:
            <span className="inline-block font-mono italic">
              <span className="bg-violet-200 rounded-md px-1">M01AB</span>-
              Produk antiradang dan antirematik, nonsteroid, turunan asam
              asetat, dan zat terkait
            </span>
            <span className="inline-block font-mono italic">
              <span className="bg-violet-200 rounded-md px-1">M01AE</span>-
              Produk antiradang dan antirematik, nonsteroid, turunan asam
              propionat
            </span>
          </p>
        </div>
        <div className="text-justify text-base tracking-wide text-main sm:flex-initial sm:w-1/4">
          <h3 className="font-bold mb-1">Data Processing:</h3>
          <p className="text-sm pb-2">
            Data diolah menggunakan Microsoft Excel dan dibuat menjadi Rest API
            menggunakan Google Spreadsheet
          </p>
          <a
            className="cursor-pointer"
            href="https://drive.google.com/drive/folders/1NhVr9j2cgFuvfnZFrcbizUrC6_QNANfU?usp=sharing"
            target="_blank"
          >
            <span className="text-xl">📄</span>
            <a className="text-sm text-blue-700 hover:underline">
              See The Document
            </a>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid w-3/4 grid-cols-1 gap-10">
          <div>
            <M01AB_Chart />
          </div>
          <div>
            <M01AE_Chart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
