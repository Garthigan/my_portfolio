import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TimelineItem as TimelineItemType } from "@/constants/data";

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="w-full md:w-1/2">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <span className="text-sm font-medium text-accent">
                  {item.date}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {item.company}
              </p>
              <p className="mb-4">{item.description}</p>
              {item.technologies && (
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="hidden md:block w-6 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-accent shadow"></div>
      </div>

      <div className="md:w-1/2"></div>
    </div>
  );
};

export default TimelineItem;
