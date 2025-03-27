
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  caseStudy?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
  technologies?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Real-Time People Detection on Nvidia Jetson Nano [ SenzMate AIOT Intelligencies]",
    description: "Developed a real-time people detection system using YOLO on the Nvidia Jetson Nano, achieving accurate detection with a processing speed of 50 frames per second",
    technologies: ["Python", "TensorFlow", "Jetson Nano", "MQTT", "DeepStream","TensorRT"],
    imageUrl: "https://www.visiongeek.io/blog/2024/04/images/human-activity-detection-tensorflow-python/person_standing.png",
    githubUrl: "https://github.com/Garthigan/tensorrt_demos",
    //demoUrl: "https://neural-style.yourdomain.com"
  },
  {
    id: 2,
    title: "Automated Machine Learning Pipeline using NLP for Sentiment Analysis",
    description: "Created a modular pipeline that enables automated preprocessing, feature extraction, and model selection for textdata.",
    technologies: ["Python", "Scikit-learn", "AutoML", "AutoSklearn", "Pandas"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    githubUrl: "https://github.com/Garthigan/AUTO_ML_NLP"
  },
  {
    id: 3,
    title: "Robust Face Detection and Recognition System ",
    description: "Real-time face detection system using computer vision and deep learning models for face detection and recognition.",
    technologies: ["Python", "OpenCV", "TensorFlow", "YOLO", "Facenet", "Ultralytics"],
    imageUrl: "https://wallpapers.com/images/high/face-recognition-1600-x-900-wallpaper-o3rh0wpg6lwsir6q.webp",
    githubUrl: "https://github.com/Garthigan/Face_Recoginiton"
  },
  {
    id: 4,
    title: "House Price Prediction using XGBoost",
    description: "The project predicts house price using dataset based on Bangalore Houses. XGBoost is used for making predictions. XGBoost stands for extreme gradient boosting, where gradient boosting is implemented with several additional features focusing on performance and speed..",
    technologies: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/0*cDRFtpTiOJFrfzS5.jpg",
    githubUrl: "https://github.com/Garthigan/House-Price-Prediction"
  }
];

export const experience: TimelineItem[] = [
  {
    id: 1,
    date: "2025 - ",
    title: "Visiting Instructor",
    company: "University of Moratuwa - Electrical Engineering Department",
    description: "Instruct and guide undergraduate students in hands-on robotics experiments, including sensor integration, motorcontrol, and autonomous navigation.",
    technologies: ["Python", "Teaching"]
  },
  {
    id: 2,
    date: "2023 - ",
    title: "Associate Machine Learning Engineer",
    company: "SenzMate AIOT Intelligence",
    description: "Developed and deployed a real-time people detection system using YOLO on the Nvidia Jetson Nano, achieving accurate detection with a processing speed of 50 frames per second.",
    technologies: ["Python", "TensorFlow", "MQTT", "Jetson Nano" , "C++", "CUDA"]
  }
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL", "R", "C++", "JavaScript/TypeScript"]
  },
  {
    category: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Hugging Face Transformers"]
  },
  {
    category: "Data Engineering",
    items: ["Apache Spark", "Airflow", "Kafka", "Hadoop", "dbt"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    category: "Visualization & BI",
    items: ["Tableau", "Power BI", "D3.js", "Matplotlib", "Plotly"]
  }
];

export const education = [
  {
    degree: "Bachelor of Science Engineering (Hons) spl in Electrical Engineering",
    specialization: "Electrical Engineering Department",
    institution: "University of Moratuwa",
    year: "2021-2025"
  }
];

export const certifications = [
  {
    name: "Neural Networks and Machine Learning ",
    issuer: "Coursera (Andrew Ng)",
    year: "2023"
  },
  {
    name: " Intro to TensorFlow for Deep Learning ",
    issuer: "Udacity",
    year: "2024"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera (Andrew Ng)",
    year: "2023"
  },
  {
    name: "Generative AI for Everyone",
    issuer: "Coursera (Andrew Ng)",
    year: "2024"
  }
];

export const aboutMe = {
  name: "Garthigan Kumarasamy",
  role: "Machine Learning & Data Engineer",
  summary: "I'm a passionate machine learning and data engineer with over 1 years of experience building scalable AI systems and data pipelines. I specialize in developing and deploying machine learning models that solve real-world problems, with expertise in computer vision, natural language processing, and predictive analytics. I enjoy working at the intersection of cutting-edge AI research and practical engineering to create solutions that drive business value.",
  personalInterests: [ "Participating in Kaggle competitions", "Contributing to open-source ML libraries", "Hiking and outdoor photography" , "Playing Cricket" , "Watching Series" , "Teaching "]
};
