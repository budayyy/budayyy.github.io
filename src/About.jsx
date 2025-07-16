import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeadingSection from "./components/HeadingSection";

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <Sidebar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <div className="bg-white p-4 lg:pl-88 lg:py-24 lg:pr-16 lg:w-[96%]">
          {loading && <LoadingScreen />}
          {!loading && (
            <div className="w-full bg-white pt-24 pb-8 lg:p-0">
              <HeadingSection>About</HeadingSection>
              <div className="mt-16 mb-4">
                <img
                  src="./buday.jpg"
                  alt="budi"
                  className="rounded-md border-2 border-primary"
                />
              </div>
              <p className="max-w-xl text-base font-medium text-gray-950 text-justify mb-2 indent-8 leading-8">
                Halo, saya{" "}
                <span className="underline decoration-2 decoration-primary font-bold">
                  budi setiawan.
                </span>
                seorang web developer yang kebetulan suka dengan dunia
                percodingan. Sedang menikmati indahnya kehidupan dengan cara
                menjalaninya bagai arus tapi sesekali melawan arus sih hehe.
                saya suka bulan november karena pada bulan tersebut bertepatan
                dengan bulan kelahiran ...
              </p>
              <p className="max-w-xl text-base font-medium text-gray-950 text-justify mb-2 indent-8 leading-8">
                <span className="underline decoration-2 decoration-primary font-bold">
                  Saya mempunyai pengalaman 2 tahun di bidang web developer
                  dengan menggunakan PHP dan Laravel Framework.
                </span>{" "}
                Disela - sela waktu luang saya selalu mengikuti berbagai macam
                training, bootcamp ataupun pelatihan untuk menambah wawasan
                dalam{" "}
                <span className="underline decoration-2 decoration-primary font-bold">
                  dunia programing
                </span>{" "}
                serta untuk mengasah skill pemrograman saya. Saya lulus dengan
                gelar Sarjana Teknik dengan jurusan{" "}
                <span className="underline decoration-2 decoration-primary font-bold">
                  Teknik Informatika
                </span>{" "}
                di Universitas Muhammadiyah Cirebon dan alhamdulillah lulus
                walaupun tidak tepat waktu, setidaknya bisa lulus diwaktu yang
                tepat.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
