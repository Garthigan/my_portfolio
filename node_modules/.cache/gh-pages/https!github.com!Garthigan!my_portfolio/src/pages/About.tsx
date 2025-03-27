
import { motion } from "framer-motion";
import { aboutMe, skills, education, certifications } from "../constants/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
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
            <h1 className="heading-lg mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground">
              {aboutMe.summary}
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="heading-md mb-8">Technical Skills</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {skills.map((skill, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">{skill.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, i) => (
                          <Badge key={i} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-16"
            >
              <h2 className="heading-md mb-8">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between flex-wrap">
                        <div>
                          <h3 className="text-lg font-semibold">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.specialization}</p>
                          <p className="text-muted-foreground mt-2">{edu.institution}</p>
                        </div>
                        <div>
                          <Badge variant="outline">{edu.year}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16"
            >
              <h2 className="heading-md mb-8">Certifications</h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between flex-wrap">
                        <div>
                          <h3 className="text-lg font-semibold">{cert.name}</h3>
                          <p className="text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <div>
                          <Badge variant="outline">{cert.year}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16"
            >
              <h2 className="heading-md mb-8">Personal Interests</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {aboutMe.personalInterests.map((interest, index) => (
                      <Badge key={index} variant="outline">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
