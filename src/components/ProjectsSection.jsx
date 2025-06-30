import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";

export const ProjectsSection = () => {
  const swiperRef = useRef(null);
  const graphicsImages = [
    "./g1.jpg",
    "./g2.png",
    "./g3.png",
    "./g4.png",
    "./g5.png",
    "./g6.png",
    "./g7.jpg",
    "./g8.png",
  ];
  const graphicsLoopMain = [
    ...graphicsImages,
    ...graphicsImages,
    ...graphicsImages,
  ];

  const creativeVideos = [
    "https://drive.google.com/file/d/1SiMGSvA0UZ9VdoGwJVjvQz89EOl9SPLs/preview",
    "https://drive.google.com/file/d/1lanFtVuraDOeZimgMN5-lmBncPGIQN6p/preview",
  ];

  const aestheticVideos = [
    "https://drive.google.com/file/d/1eJIEKRb1XdJQqp2-LnkCLXe_L4R4V5He/preview",
    "https://drive.google.com/file/d/1eJIEKRb1XdJQqp2-LnkCLXe_L4R4V5He/preview",
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full overflow-x-hidden text-white px-4 py-12"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10 max-w-6xl mx-auto">
        {/* Creative Videos */}
        <div className="gradient-border rounded-2xl p-[2px]">
          <div className="rounded-2xl bg-transparent p-2">
            <h2 className="text-center font-bold text-lg md:text-xl mb-4 text-white">
              Creative Videos
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {creativeVideos.map((src, i) => (
                <iframe
                  key={i}
                  src={src}
                  className="rounded-xl w-[160px] h-[285px] md:w-[180px] md:h-[320px] shadow-md"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title={`Creative ${i}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Aesthetic Videos */}
        <div className="gradient-border rounded-2xl p-[2px]">
          <div className="rounded-2xl bg-transparent p-2">
            <h2 className="text-center font-bold text-lg md:text-xl mb-4 text-white">
              Aesthetic Videos
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {aestheticVideos.map((src, i) => (
                <iframe
                  key={i}
                  src={src}
                  className="rounded-xl w-[160px] h-[285px] md:w-[180px] md:h-[320px] shadow-md"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title={`Aesthetic ${i}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Graphics & Stories
        </h3>

        <Swiper
  ref={swiperRef}
  modules={[Autoplay, FreeMode]}
  spaceBetween={16}
  slidesPerView={'auto'}
  // freeMode={true}
  loop={true}
  autoplay={{ delay: 0, disableOnInteraction: false }}
  speed={4000}
  grabCursor={true}
  className="!overflow-visible"
>

          {graphicsLoopMain.map((img, idx) => (
            <SwiperSlide
              key={idx}
              className="!w-[225px] !h-[400px] rounded-lg overflow-hidden shadow-md"
              onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
            >
              <img
                src={img}
                alt={`Graphic ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
