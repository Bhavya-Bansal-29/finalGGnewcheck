import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

// Company Skills Data
const companySkills = [
  { name: "Adobe After Effects", level: 90 },
  { name: "Blender", level: 85 },
  { name: "Adobe Premiere Pro", level: 92 },
  { name: "Adobe Photoshop", level: 95 },
  { name: "Adobe Illustrator", level: 90 },
  { name: "Canva", level: 80 },
];

// Animation Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const AboutSection = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: false });

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          About <span className="text-primary">Us</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Text Column */}
          <motion.div
            ref={ref}
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Passionate Creators & Skilled Designers
            </h3>
            <p className="text-muted-foreground">
              Our team excels in producing engaging content with
              industry-leading tools. From motion graphics to professional-grade
              design work, we're fluent in Adobe tools, 3D creation, and modern
              design trends.
            </p>
            <p className="text-muted-foreground">
              With hands-on experience in{" "}
              <strong>editing, animation, and visual storytelling</strong>, we
              help brands communicate with clarity and creativity.
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Right Services Column */}
          <div className="space-y-6">
            {[
              {
                title: "Video Editing & Production",
                icon: Code,
                text: "Creating high-impact, story-driven videos that captivate and convert.",
              },
              {
                title: "Graphic & Motion Design",
                icon: User,
                text: "Designing scroll-stopping visuals and motion graphics that elevate your brand.",
              },
              {
                title: "Marketing & Social Campaigns",
                icon: Briefcase,
                text: "Blending creative strategy with content execution for powerful brand campaigns.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="gradient-border p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <motion.h3
            className="text-2xl font-bold mb-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            Software Expertise
          </motion.h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {companySkills.map((skill, i) => (
              <motion.div
                key={i}
                className="bg-card p-6 rounded-lg shadow-xs"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInUp}
              >
                <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="bg-primary h-2 rounded-full"
                  />
                </div>
                <p className="text-right text-sm text-muted-foreground mt-1">
                  {skill.level}%
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
