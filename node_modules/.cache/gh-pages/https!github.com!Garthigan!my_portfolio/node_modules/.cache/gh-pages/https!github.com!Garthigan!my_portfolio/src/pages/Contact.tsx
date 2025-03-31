import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      text: "garthigankumarasamy11@gmail.com",
      href: "mailto:garthigankumarasamy11@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      text: "+94 765479683",
      href: "tel:+94765479683",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "Colombo, Srilanka",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/garthigan-kumarasamy-1450891a9/",
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Garthigan",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/Garthigan_Kumar",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-muted/30 py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h1 className="heading-lg mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Feel free to contact me for collaborations or opportunities
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <h2 className="heading-md mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="p-3 rounded-full bg-muted flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-4">
                Connect on social media
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full"
                  >
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>

            <div>
              <h2 className="heading-md mb-6">Send me a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
