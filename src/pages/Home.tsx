
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";

const Home = () => {
  // Sample projects to display on the home page
  const featuredProjects = [
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
    }
  ];

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      {/* Hero section */}
      <section className="mb-16">
        <div className="flex flex-col gap-3">
          <span className="inline-flex items-center text-sm font-medium">
            <span className="text-amber-500 mr-2">👋</span>
            Hello there! I'm
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Sparsh Sharma
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-3 max-w-2xl">
            I'm a full-stack developer that loves building products and web apps that can impact millions of lives.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            I'm a junior software engineer with almost 2 years of experience building scalable web apps that are performance optimized and socially impactable.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Button asChild>
              <a href="https://drive.google.com/file/d/1sZif0_m6jT8MgzDoW77z7oSoKi19wYeS/view?usp=sharing" target="_blank">
                Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/contact">
                Get in touch
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured projects section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-heading">Featured Projects</h2>
          <Button variant="ghost" asChild>
            <a href="/projects" className="flex items-center gap-1 text-sm">
              View all <ArrowRight size={16} />
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Hackathons section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-heading">Hackathon Achievements</h2>
          <Button variant="ghost" asChild>
            <a href="/about" className="flex items-center gap-1 text-sm">
              Learn more <ArrowRight size={16} />
            </a>
          </Button>
        </div>
        <div className="space-y-4">
          <HackathonItem 
            title="Vihaan 8.0 - IEEE DTU" 
            position="2nd Position, Software Domain" 
            description="Secured 2nd position as a solo! participant among 500+ contenders in DTU's flagship hackathon."
            date="April 2025"
          />
          <HackathonItem 
            title="AceHack 4.0 - Jaipur" 
            position="Top 17th Finalist" 
            description="Finalist in the Top 17 solo! out of 750+ individuals across India."
            date="February 2025"
          />
          <HackathonItem 
            title="Neo X Grind Hackathon - Rise In Edition" 
            position="Participant" 
            description="Built the world's first blockchain-powered college application preparation platform."
            date="December 2024"
          />
        </div>
      </section>
    </div>
  );
};

interface HackathonItemProps {
  title: string;
  position: string;
  description: string;
  date: string;
}

const HackathonItem = ({ title, position, description, date }: HackathonItemProps) => (
  <div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg border bg-card">
    <div className="md:w-1/4 flex flex-col">
      <span className="text-sm text-muted-foreground">{date}</span>
      <span className="font-medium text-primary mt-1">{position}</span>
    </div>
    <div className="md:w-3/4">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default Home;
