
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: "1",
      title: "FoldStruct",
      description: "An open-source software for tech geeks who generally has messy and unorganized downloads and various other folders.",
      tags: ["React", "Node.js", "Electron"],
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://github.com/",
      githubUrl: "https://github.com/"
    },
    {
      id: "2",
      title: "IdeaHunt",
      description: "A Software as a Service which helps aspiring entrepreneurs to generate initial steps to continue with his/her startup idea.",
      tags: ["MERN Stack", "OpenAI API"],
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://github.com/",
      githubUrl: "https://github.com/"
    },
    {
      id: "3",
      title: "ISRO Clone",
      description: "Built a modern looking ISRO clone using 3D elements to demonstrate some amazing achievements made by ISRO.",
      tags: ["React", "Three.js", "Tailwind"],
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://github.com/",
      githubUrl: "https://github.com/"
    },
    {
      id: "4",
      title: "E-Commerce Design",
      description: "Built a classic looking and with a modernize look of the premium e-commerce websites demonstrating my designing and UI skills.",
      tags: ["Next.js", "Tailwind CSS", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://github.com/",
      githubUrl: "https://github.com/"
    },
    {
      id: "5",
      title: "Video Streaming App",
      description: "Developed a video streaming web application that scraps the content from youtube and shows at this application.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://github.com/",
      githubUrl: "https://github.com/"
    },
    {
      id: "6",
      title: "Portfolio 2.0",
      description: "Created a nice resume portfolio to help the recruiters letting them to acquire my skillset with live demonstration with some more modernize designs.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      liveUrl: "https://github.com/",
      githubUrl: "https://github.com/"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Projects</h1>
      <p className="text-muted-foreground mb-8">
        A showcase of my work, side projects, and open source contributions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
