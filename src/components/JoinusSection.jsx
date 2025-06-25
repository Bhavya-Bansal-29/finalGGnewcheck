import { Upload, User, Mail } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sampleVideos = [
  {
    title: "Sample Video 1",
    url: "https://drive.google.com/file/d/1SiMGSvA0UZ9VdoGwJVjvQz89EOl9SPLs/preview",
  },
  {
    title: "Sample Video 2",
    url: "https://drive.google.com/file/d/1SiMGSvA0UZ9VdoGwJVjvQz89EOl9SPLs/preview",
  },
];

export const JoinusSection = () => {
  const [selectedFileName, setSelectedFileName] = useState("");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Submission sent!",
        description:
          "Thanks for applying! We’ll review your edit and get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="join"
      className="px-4 py-20 min-h-screen bg-secondary/30 overflow-hidden flex items-center"
    >
      <div className="container mx-auto max-w-6xl w-full">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Want to <span className="text-primary">Join Us?</span>
          </h2>
          <p className="mt-2 text-sm text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Want to join us as a video editor? Download the sample videos,
            create your best work, and submit it with your details in the form.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* LEFT - Videos */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-card/60 p-6 rounded-lg shadow-md backdrop-blur-sm flex flex-col justify-between h-full"
          >
            {/* <h3 className="text-lg font-semibold mb-4">Sample Videos</h3> */}
            <div className="space-y-6">
              {sampleVideos.map((video, i) => (
                <div key={i}>
                  <p className="text-sm font-medium mb-1">{video.title}</p>
                  <iframe
                    src={video.url}
                    allow="autoplay"
                    className="w-full rounded-md border border-border aspect-video"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-card p-6 rounded-lg shadow-md h-full flex flex-col justify-center"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Submit Your Application
            </h3>

            <form
              className="space-y-4"
              onSubmit={handleSubmit}
              action="https://formspree.io/f/yourFormId"
              method="POST"
              encType="multipart/form-data"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Portfolio */}
              <div>
                <label
                  htmlFor="portfolio"
                  className="block text-sm font-medium mb-1"
                >
                  Your Portfolio / Work Link
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  required
                  placeholder="https://yourwork.com"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* File Upload */}
              <div className="relative">
                <label
                  htmlFor="video-upload"
                  className="block text-sm font-medium mb-1"
                >
                  Upload Your Edited Video
                </label>
                <input
                  type="file"
                  id="video-upload"
                  name="video-upload"
                  accept="video/*"
                  required
                  className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4
               file:rounded-md file:border-0 file:text-sm file:font-semibold
               file:bg-primary file:text-white hover:file:bg-primary/90
               rounded-md border border-input bg-background"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full py-3 text-sm font-medium mt-4"
                )}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
