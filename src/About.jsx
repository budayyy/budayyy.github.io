import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import { useState } from "react";

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <Sidebar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <div className="bg-white p-4 lg:pl-[22rem] lg:py-24 lg:pr-16 lg:w-[96%]">
          <div className="w-full bg-white p-2">
            <div className="text-center lg:text-start">
              <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-950 to-gray-500">
                About
              </span>
            </div>
            <div className="my-4">
              <img src="./buday.jpg" alt="budi" className="rounded-md" />
            </div>
            <p className="max-w-xl text-base font-medium text-gray-950 text-justify mb-2 indent-8">
              Halo, saya budi setiawan. seorang web developer yang kebetulan
              suka dengan dunia percodingan. Sedang menikmati indahnya kehidupan
              dengan cara menjalaninya bagai arus tapi sesekali melawan arus sih
              hehe. saya suka bulan november karena pada bulan tersebut
              bertepatan dengan bulan kelahiran ...
            </p>
            <p className="max-w-xl text-base font-medium text-gray-950 text-justify mb-2 indent-8">
              Saya mempunyai pengalaman 1 tahun di bidang web developer dengan
              menggunakan PHP dan Laravel Framework. Disela - sela waktu luang
              saya selalu mengikuti berbagai macam training, bootcamp ataupun
              pelatihan untuk menambah wawasan dalam dunia programing serta
              untuk mengasah skill pemrograman saya. Saya lulus dengan gelar
              Sarjana Teknik dengan jurusan Teknik Informatika di Universitas
              Muhammadiyah Cirebon dan alhamdulillah lulus walaupun tidak tepat
              waktu, setidaknya bisa lulus diwaktu yang tepat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
