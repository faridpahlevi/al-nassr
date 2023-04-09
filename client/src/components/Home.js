export default function Home(props) {
  return (
    <div
      id={`${props.id}`}
      className="bg-home-image bg-cover bg-fixed bg-center mx-auto h-screen"
    >
      <div className="w-full h-full absolute bg-black opacity-30"></div>
      <div className="relative h-screen flex justify-center items-center flex-col isolate px-6 lg:px-8 overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="text-center fixed">
            <h1 className="font-poppins text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Pharmacy Sales Daily
            </h1>
            <p className="m-4 text-sm text-white">
              Dibuat untuk memenuhi salah satu tugas mata kuliah
              <span className="pl-1 font-semibold">
                Statistik & Probabilitas Informatika
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
