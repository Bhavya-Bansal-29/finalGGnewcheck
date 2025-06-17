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
    "https://www.youtube.com/embed/eAPqQFWEoKg?si=MiC28MQgYPe0sXhZ",
    "https://www.youtube.com/embed/q3uXXh1sHcI?si=dUb6xjLh3EoNaW0d",
    "https://www.youtube.com/embed/kgrV3_g9rYY?si=Yk_F3zz4uO9AxCDz",
  ];
  const aestheticVideos = [
    "https://www.youtube.com/embed/IH0_GFmPuno",
    "https://www.youtube.com/embed/IH0_GFmPuno",
    "https://www.youtube.com/embed/IH0_GFmPuno",
  ];
  const creativeLoop = [...creativeVideos, ...creativeVideos];
  const aestheticLoop = [...aestheticVideos, ...aestheticVideos];

  const startLoop = (controls, isPausedRef) => {
    const loop = async () => {
      while (true) {
        if (!isPausedRef()) {
          await controls.start({
            x: "-100%",
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
    startLoop(creativeControls, () => creativePaused);
    startLoopReverse(aestheticControls, () => aestheticPaused);
  }, []);

  return (
    <section className="p-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>

      {/* Creative & Aesthetic */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Creative Section */}
        <div className=" text-white rounded-l-2xl p-4 shadow-md overflow-hidden">
          <h2 className="text-center font-bold text-xl mb-4">Creative Videos</h2>
          <motion.div
            className="flex gap-4 overflow-x-auto no-scrollbar"
            animate={creativeControls}
            onMouseEnter={() => setCreativePaused(true)}
            onMouseLeave={() => setCreativePaused(false)}
          >
            {creativeLoop.map((src, i) => (
              <iframe
                key={i}
                src={src}
                className="rounded-xl w-[300px] h-[500px] flex-shrink-0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title={`Creative ${i}`}
              />
            ))}
          </motion.div>
        </div>

        {/* Aesthetic Section */}
        <div className=" text-white rounded-r-2xl p-4 shadow-md overflow-hidden">
          <h2 className="text-center font-bold text-xl mb-4">Aesthetic Videos</h2>
          <motion.div
            className="flex gap-4 overflow-x-auto no-scrollbar flex-row-reverse"
            animate={aestheticControls}
            onMouseEnter={() => setAestheticPaused(true)}
            onMouseLeave={() => setAestheticPaused(false)}
          >
            {aestheticLoop.map((src, i) => (
              <iframe
                key={i}
                src={src}
                className="rounded-xl w-[300px] h-[500px] flex-shrink-0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title={`Aesthetic ${i}`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Graphics */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-center">Graphics & Stories</h3>
        <motion.ul
          className="flex gap-4 overflow-x-auto no-scrollbar"
          animate={graphicsControls}
          onMouseEnter={() => setGraphicsPaused(true)}
          onMouseLeave={() => setGraphicsPaused(false)}
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
