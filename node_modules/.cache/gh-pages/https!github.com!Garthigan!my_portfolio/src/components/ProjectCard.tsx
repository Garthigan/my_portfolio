
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from '@/constants/data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group h-full transition-all duration-300 hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 z-10" />
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <Badge key={i} variant="secondary" className="font-normal">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="font-normal">
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>
          
          <div className="flex gap-3 mt-auto">
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button size="sm" asChild>
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
