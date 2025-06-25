import Image from "next/image";
import { NextPage } from "next";
import Description from "./components/Description";
import HeroGallery from "./components/HeroGallery";
import Footer from "./components/Footer";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Bar */}
      <div className="bg-[#3b5998] text-white text-center py-2 text-sm">
        ❄️ Get it on with Lissa DJ LyLy Radio Station ❄️
      </div>

      {/* Logo + Contact Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 px-4 py-4">
        <h1 className="text-2xl md:text-3xl font-semibold italic text-[#1f2b6c]">
          Productions CulturArtistLy Inc.
        </h1>
        <p className="text-md text-black mt-2 md:mt-0">(514) 247-8470</p>
      </div>

      {/* Logo Image Full Width */}
      <div className="w-full bg-black">
        <div className="relative w-full h-[200px] md:h-[300px]">
          <Image
            src="/img.png"
            alt="CulturArtistLy Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

     
      <Description/>
      <HeroGallery/>
      <Footer/>

    </div>
  );
};

export default Home;
