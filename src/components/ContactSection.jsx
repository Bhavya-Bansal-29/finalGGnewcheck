import { Instagram, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl font-bold text-center"
        >
          Let's <span className="text-primary">Create Something Great</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-4 mb-12 text-center text-foreground/80 max-w-2xl mx-auto"
        >
          Have a vision or idea? Let's turn it into compelling content. Whether it's a brand video,
          viral reel, or social strategy — we’re always excited to collaborate.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
  className="bg-card/60 p-8 rounded-lg shadow-md backdrop-blur-sm space-y-6"
>
  <h3 className="text-2xl font-semibold text-center">Contact Information</h3>

  <div className="space-y-4">
    {/* Email */}
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-full bg-primary/10">
        <Mail className="w-5 h-5 text-primary" />
      </div>
      <a
        href="mailto:momentummedia179@gmail.com"
        className="text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        momentummedia179@gmail.com
      </a>
    </div>

    {/* Instagram */}
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-full bg-primary/10">
        <Instagram className="w-5 h-5 text-primary" />
      </div>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        @momentummedia
      </a>
    </div>
  </div>
</motion.div>


          {/* RIGHT SIDE - FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-card p-8 rounded-lg shadow-xs"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
