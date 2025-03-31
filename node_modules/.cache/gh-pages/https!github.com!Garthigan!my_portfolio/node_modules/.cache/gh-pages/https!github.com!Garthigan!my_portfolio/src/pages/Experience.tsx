import { motion } from "framer-motion";
import TimelineItem from "../components/TimelineItem";
import { experience } from "../constants/data";

const Experience = () => {
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
            <h1 className="heading-lg mb-6">Professional Experience</h1>
            <p className="text-lg text-muted-foreground">
              My journey as a machine learning and data professional
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30"></div>
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <TimelineItem key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
