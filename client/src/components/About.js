import {
  CodeBracketSquareIcon,
  TableCellsIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

const About = (props) => {
  return (
    <section id={`${props.id}`} className="py-14 sticky ">
      <div className="w-3/5  mx-auto">
        <div className="text-left md:text-center mb-20">
          <h1 className="text-3xl pb-3 font-bold md:text-5xl text-main">
            About Us
          </h1>
          <span className="text-sm block pb-2">
            Website ini dibangun untuk memenuhi salah satu tugas dari mata
            kuliah
            <span className="font-semibold pl-1">
              Statistika & Probabilitas Informatika
            </span>
          </span>
          <p className="font-semibold text-sm">
            Dosen Pengampu : Abdullah, S.Si., M.Kom., Ph.D
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4 md:gap-4">
          <div>
            <div className="max-w-sm min-h-[17rem] bg-opacity-70 hover:-translate-y-2 transition overflow-hidden shadow-md p-4 bg-gray-100">
              <div class="flex items-center justify-center h-32 mb-4 bg-gray-300 rounded animate-pulse">
                <svg
                  class="w-12 h-12 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl">
                  Andrian Maruli Tua Sitanggang
                </div>
                <p className="text-gray-700 text-xs">- Membuat Laporan</p>
                <p className="text-gray-700 text-xs">- Presentasi</p>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-sm h-[17rem] bg-opacity-70 hover:-translate-y-2 transition overflow-hidden shadow-md p-4 bg-gray-100">
              <div class="flex items-center justify-center h-32 mb-4 bg-gray-300 rounded animate-pulse">
                <svg
                  class="w-12 h-12 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl">Andrian Oktaviano</div>
                <p className="text-gray-700 text-xs">- Membuat Laporan</p>
                <p className="text-gray-700 text-xs">- Presentasi</p>
              </div>
            </div>
          </div>
          <div className="order-first sm:order-none">
            <div className="max-w-sm h-[17rem] bg-opacity-70 hover:-translate-y-2 transition overflow-hidden shadow-md p-4 bg-gray-100">
              <div class="flex items-center justify-center h-32 mb-4 bg-gray-300 rounded animate-pulse">
                <svg
                  class="w-12 h-12 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl">
                  <h4>Farid Pahlevi</h4>
                </div>
                <p className="text-gray-700 text-xs">- Mengolah Data</p>
                <p className="text-gray-700 text-xs">
                  - Membuat Dashboard & Laporan
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-sm h-[17rem] bg-opacity-70 hover:-translate-y-2 transition overflow-hidden shadow-md p-4 bg-gray-100">
              <div class="flex items-center justify-center h-32 mb-4 bg-gray-300 rounded animate-pulse">
                <svg
                  class="w-12 h-12 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl">Prayoga Arief Pradana</div>
                <p className="text-gray-700 text-xs">- Membuat Laporan</p>
                <p className="text-gray-700 text-xs">- Presentasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
