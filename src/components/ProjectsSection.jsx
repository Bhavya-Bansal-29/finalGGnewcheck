import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const ProjectsSection = () => {
  const graphicsControls = useAnimation();
  const creativeControls = useAnimation();
  const aestheticControls = useAnimation();

  const [graphicsPaused, setGraphicsPaused] = useState(false);
  const [creativePaused, setCreativePaused] = useState(false);
  const [aestheticPaused, setAestheticPaused] = useState(false);

  const graphicsImages = [
    "./download.jpg",
    "./instagram typography ideas.jpg",
    "./All The Way UP.jpg",
  ];
  const graphicsLoop = [...graphicsImages, ...graphicsImages];
  const graphicsLoopMain = [...graphicsLoop, ...graphicsLoop];

  const creativeVideos = [
    "https://drive.google.com/file/d/1SiMGSvA0UZ9VdoGwJVjvQz89EOl9SPLs/preview",
    "https://drive.google.com/file/d/1lanFtVuraDOeZimgMN5-lmBncPGIQN6p/preview",
  ];
  const aestheticVideos = [
    "https://drive.google.com/file/d/1eJIEKRb1XdJQqp2-LnkCLXe_L4R4V5He/preview",
    "https://drive.google.com/file/d/1eJIEKRb1XdJQqp2-LnkCLXe_L4R4V5He/preview",
  ];

const startLoop = (controls, isPausedRef, direction = "left") => {
  if (!isPausedRef()) {
    controls.start({
      x: direction === "left" ? "-50%" : "50%",
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }
};

const stopLoop = (controls) => {
  controls.stop();
};



  const startLoopReverse = (controls, isPausedRef) => {
    const loop = async () => {
      while (true) {
        if (!isPausedRef()) {
          await controls.start({
            x: "100%",
            transition: {
              duration: 20,
              ease: "linear",
            },
          });
          controls.set({ x: "0%" });
        } else {
          await new Promise((res) => setTimeout(res, 100));
        }
      }
    };
    loop();
  };

 useEffect(() => {
  startLoop(graphicsControls, () => graphicsPaused);
  startLoop(creativeControls, () => creativePaused, "left");
  startLoop(aestheticControls, () => aestheticPaused, "right");

  // Optional: stop on unmount
  return () => {
    graphicsControls.stop();
    creativeControls.stop();
    aestheticControls.stop();
  };
}, []);


  return (
    <section className="min-h-screen w-screen overflow-x-hidden text-white">

      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 px-10">
  {/* Creative Section */}
<div className="gradient-border rounded-2xl p-1">
  <div className="rounded-2xl bg-transparent p-4">
      <h2 className="text-center font-bold text-xl mb-4 text-white">Creative Videos</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {creativeVideos.map((src, i) => (
          <iframe
            key={i}
            src={src}
            className="rounded-xl w-[250px] h-[450px] flex-shrink-0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            title={`Creative ${i}`}
          />
        ))}
      </div>
    </div>
  </div>

  {/* Aesthetic Section */}
  <div className="p-[3px] rounded-2xl bg-gradient-to-r from-purple-600 to-black">
    <div className="rounded-2xl bg-transparent p-0">
      <h2 className="text-center font-bold text-xl mb-4 text-white">Aesthetic Videos</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {aestheticVideos.map((src, i) => (
          <iframe
            key={i}
            src={src}
            className="rounded-xl w-[250px] h-[450px] flex-shrink-0"
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


      {/* Graphics */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-center">Graphics & Stories</h3>
        <motion.ul
          className="flex gap-4 overflow-x-auto no-scrollbar"
          animate={graphicsControls}
          onMouseEnter={() => {
  setGraphicsPaused(true);
  stopLoop(graphicsControls);
}}
onMouseLeave={() => {
  setGraphicsPaused(false);
  startLoop(graphicsControls, () => false); // Force start
}}

        >
          {graphicsLoopMain.map((img, idx) => (
            <li
              key={idx}
              className="min-w-[225px] h-[400px] rounded-lg overflow-hidden shadow-md flex-shrink-0"
            >
              <img
                src={img}
                alt={`Graphic ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
