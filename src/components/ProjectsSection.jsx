import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const ProjectsSection = () => {
  const graphicsControls = useAnimation();
  const videoControls = useAnimation();
  const [graphicsPaused, setGraphicsPaused] = useState(false);
  const [videosPaused, setVideosPaused] = useState(false);

  const graphicsImages = [
    "./download.jpg",
    "./instagram typography ideas.jpg",
    "./All The Way UP.jpg",
  ];
  const graphicsLoop = [...graphicsImages, ...graphicsImages];
  const graphicsLoopMain = [...graphicsLoop, ...graphicsLoop];

  const videoLinks = [
    "https://www.youtube.com/embed/eAPqQFWEoKg?si=MiC28MQgYPe0sXhZ",
    "https://www.youtube.com/embed/q3uXXh1sHcI?si=dUb6xjLh3EoNaW0d",
    "https://www.youtube.com/embed/kgrV3_g9rYY?si=Yk_F3zz4uO9AxCDz",
  ];
  const videoLoop = [...videoLinks, ...videoLinks];
  const videoLoopMain = [...videoLoop, ...videoLoop];

  // Infinite horizontal loop with pause support
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
          await new Promise((res) => setTimeout(res, 100)); // wait and check again
        }
      }
    };
    loop();
  };

  useEffect(() => {
    startLoop(graphicsControls, () => graphicsPaused);
    startLoop(videoControls, () => videosPaused);
  }, []);

  return (
    <section className="p-8 h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>

      {/* Videos */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">Creative Videos</h3>
        <motion.ul
          className="flex gap-4 pr-2 no-scrollbar"
          animate={videoControls}
          onMouseEnter={() => setVideosPaused(true)}
          onMouseLeave={() => setVideosPaused(false)}
        >
          {videoLoopMain.map((src, i) => (
            <li
              key={i}
              className="min-w-[320px] aspect-video rounded-lg overflow-hidden shadow-md flex-shrink-0"
            >
              <iframe
                src={src}
                title={`Video ${i}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Videos */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">Aesthetic Videos</h3>
        <motion.ul
          className="flex gap-4 pr-2 no-scrollbar"
          animate={videoControls}
          onMouseEnter={() => setVideosPaused(true)}
          onMouseLeave={() => setVideosPaused(false)}
        >
          {videoLoopMain.map((src, i) => (
            <li
              key={i}
              className="min-w-[320px] aspect-video rounded-lg overflow-hidden shadow-md flex-shrink-0"
            >
              <iframe
                src={src}
                title={`Video ${i}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </li>
          ))}
        </motion.ul>
      </div>


      {/* Graphics */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 ">Graphics & Stories</h3>
        <motion.ul
  className="flex gap-4 pb-4 pr-2 no-scrollbar"
  animate={graphicsControls}
  onMouseEnter={() => setGraphicsPaused(true)}
  onMouseLeave={() => setGraphicsPaused(false)}
>
  {graphicsLoopMain.map((img, idx) => (
    <li
      key={idx}
      className="min-w-[225px] h-[400px]  rounded-lg overflow-hidden shadow-md flex-shrink-0"
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
