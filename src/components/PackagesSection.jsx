import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

export const PackagesSection = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.3 });

  const fadeVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="packages"
      ref={ref}
      className="py-24 px-6 from-purple-900 to-black text-white relative"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Packages</h2>

        {/* Toggle Buttons */}
        <motion.div
          variants={fadeVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center gap-6 mb-10"
        >
          {["individual", "monthly"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-white transition-all duration-300 ${
                activeTab === tab ? "bg-purple-600" : "bg-purple-900 hover:bg-purple-700"
              }`}
            >
              {tab === "individual" ? "Individual" : "Monthly"}
            </button>
          ))}
        </motion.div>

        {/* Animated Text Content */}
        <AnimatePresence mode="wait">
          {activeTab === "individual" && (
           <motion.div
  key="individual"
  variants={fadeVariant}
  initial="hidden"
  animate="visible"
  exit="exit"
  className="flex flex-col md:flex-row gap-8 justify-center text-left max-w-5xl mx-auto"
>
  {/* BASIC */}
  <div className="flex-1 space-y-2 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
    <p><strong>BASIC</strong> – 7 Reels / 5 Posts / 4 Stories</p>
    <p>₹12,799</p>
    <hr className="border-white/20" />
    <p className="text-lg font-semibold">Video Genre:</p>
    <p>3 Aesthetic / 5 Creative</p>
  </div>

  {/* STANDARD */}
  <div className="flex-1 space-y-2 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
    <p><strong>STANDARD</strong> – 10 Reels / 8 Posts / 10 Stories</p>
    <p>₹19,399</p>
    <hr className="border-white/20" />
    <p className="text-lg font-semibold">Video Genre:</p>
    <p>4 Aesthetic / 6 Creative</p>
  </div>

  {/* ADVANCED */}
  <div className="flex-1 space-y-2 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
    <p><strong>ADVANCED</strong> – 13 Reels / 12 Posts / 12 Stories</p>
    <p>₹26,399</p>
    <hr className="border-white/20" />
    <p className="text-lg font-semibold">Video Genre:</p>
    <p>6 Aesthetic / 7 Creative</p>
  </div>
</motion.div>

          )}

          {activeTab === "monthly" && (
          <motion.div
  key="monthly"
  variants={fadeVariant}
  initial="hidden"
  animate="visible"
  exit="exit"
  className="flex flex-col md:flex-row gap-8 justify-center text-left max-w-5xl mx-auto"
>
  {/* BASIC */}
  <div className="flex-1 space-y-2 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
    <p><strong>BASIC</strong></p>
    <p>1 Month – ₹12,799</p>
    <p>3 Month – ₹12,599 × 3 = ₹37,800</p>
    <p>6 Month – ₹12,299 × 6 = ₹73,800</p>
  </div>

  {/* STANDARD */}
  <div className="flex-1 space-y-2 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
    <p><strong>STANDARD</strong></p>
    <p>1 Month – ₹19,399</p>
    <p>3 Month – ₹19,149 × 3 = ₹57,447</p>
    <p>6 Month – ₹18,899 × 6 = ₹113,394</p>
  </div>

  {/* ADVANCED */}
  <div className="flex-1 space-y-2 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
    <p><strong>ADVANCED</strong></p>
    <p>1 Month – ₹26,399</p>
    <p>3 Month – ₹26,099 × 3 = ₹78,297</p>
    <p>6 Month – ₹25,799 × 6 = ₹154,794</p>
  </div>
</motion.div>

          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
