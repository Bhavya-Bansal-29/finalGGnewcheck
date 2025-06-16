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
  "https://www.youtube.com/embed/306eCnSooGQ",
  "https://www.youtube.com/embed/IH0_GFmPuno",
  "https://www.youtube.com/embed/OXc-vIWHuy0",
]; 
  const videoLoop = [...videoLinks, ...videoLinks];
  const videoLoopMain = [...videoLoop, ...videoLoop];
  // <iframe width="510" height="907" src="https://www.youtube.com/embed/OXc-vIWHuy0" title="Beautiful Animals #pangasinan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>

     {/* Shorts Videos */}
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
        className="min-w-[280px] h-[500px] rounded-lg overflow-hidden shadow-md flex-shrink-0"
      >
        <iframe
          src={src}
          title={`Short ${i}`}
          width="100%"
          height="100%"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </li>
    ))}
  </motion.ul>
</div>


  {/* Shorts Videos */}
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
        className="min-w-[280px] h-[500px] rounded-lg overflow-hidden shadow-md flex-shrink-0"
      >
        <iframe
          src={src}
          title={`Short ${i}`}
          width="100%"
          height="100%"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
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
