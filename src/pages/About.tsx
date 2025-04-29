
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    { category: "Programming Languages", items: ["JavaScript", "TypeScript", "Python", "Rust (Beginner)"] },
    { category: "Frontend", items: ["React.js", "Next.js", "TailwindCSS", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "SQL", "Docker"] },
    { category: "Other", items: ["Git", "AWS Services", "Debugging", "Data Visualization"] },
    { category: "Blockchain", items: ["Neo X", "Neo N3", "Solidity", "Ethereum", "Metamask", "IPFS"] }
  ];

  const experiences = [
    {
      role: "Frontend Developer",
      company: "IIT Madras, Paradox-2024",
      location: "Chennai (remote), India",
      period: "Aug 2024 - Feb 2025",
      achievements: [
        "Contributed in the IIT Madras website for Paradox – The One and only offline fest for Bachelors of Science in Data Science online Degree course organized by Indian Institute of Technology.",
        "Collaborated with a professional team that was vastly distributed for across the functionalities of the website head to toe.",
        "Built exclusive software which would help students register for the fest and event within it, there was various permission hierarchy we had to follow, and also helped students for the payment which were safe and secure.",
        "The website handled and registered heavy load of student registrations right after the announcement made."
      ]
    },
    {
      role: "WebOps Engineer",
      company: "Avasyu, The IIT Madras Aero Society",
      location: "Chennai (remote), India",
      period: "Aug 2024 - Oct 2024",
      achievements: [
        "Worked with software development team to create their effective and efficient website components and handling the backend.",
        "Built impactful UI using various technologies such as TailwindCSS, and other 3rd party resources/UIs such as DaisyUI."
      ]
    },
    {
      role: "Frontend Lead Engineer",
      company: "SecureVision",
      location: "Chennai (remote), India",
      period: "July 2024 - Sep 2024",
      achievements: [
        "Collaborated with a 4-person software development team to create their effective website.",
        "Created visually impactful UI and transformed raw data into actionable information using MERN Stack.",
        "Was the youngest team member and developer among them."
      ]
    },
    {
      role: "FullStack Developer",
      company: "HomeSpace",
      location: "Berlin (remote), Germany",
      period: "August 2023 - February 2024",
      achievements: [
        "Collaborated with 3-person FullStack Web Dev team to create their creative and multifunctional website including backend and frontend.",
        "Also was the youngest of all the team members",
        "Created visually impactful UI and transformed raw data into actionable information using MERN Stack"
      ]
    }
  ];

  const education = [
    {
      institution: "Indian Institute Of Technology",
      degree: "Bachelors in Data Science and Applications",
      location: "Madras, Chennai, India",
      period: "September 2023 - September 2027 (exp.)"
    },
    {
      institution: "DAV Public School",
      degree: "High Schooling",
      location: "Vasant Kunj, New Delhi, India",
      period: "June 2011 - June 2021"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">About Me</h1>
      <p className="text-muted-foreground mb-8">
        My background, experience, and the journey that brought me here.
      </p>

      {/* Bio Section */}
      <section className="mb-12">
        <p className="text-base md:text-lg mb-4">
          I'm a passionate full-stack developer focused on creating performant and user-friendly web applications. 
          With a strong foundation in modern web technologies, I enjoy solving complex problems and building solutions 
          that make a positive impact.
        </p>
        <p className="text-base md:text-lg mb-4">
          Currently pursuing my Bachelor's degree in Data Science and Applications at IIT Madras, I balance my academics 
          with practical development work, contributing to various projects both professionally and through hackathons.
        </p>
        <p className="text-base md:text-lg">
          Outside of coding, I enjoy sharing my knowledge through technical content creation and exploring emerging 
          technologies, particularly in the blockchain space.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="section-heading">Skills & Expertise</h2>
        <div className="space-y-6">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium mb-2">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="section-heading">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-medium">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="text-sm text-right mt-2 md:mt-0">
                    <p className="text-muted-foreground">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 mt-3 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm">{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="section-heading">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-lg font-medium">{edu.institution}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-right mt-2 md:mt-0">
                    <p className="text-muted-foreground">{edu.period}</p>
                    <p className="text-muted-foreground">{edu.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Achievements Section - Hackathons */}
      <section className="mb-12">
        <h2 className="section-heading">Hackathon Achievements</h2>
        <div className="space-y-4">
          <HackathonCard 
            title="Vihaan 8.0 - IEEE DTU" 
            position="2nd Position, Software Domain"
            date="March 2025"
            description="Secured 2nd position as a solo participant among 400+ contenders in DTU's flagship hackathon. Designed, developed, and presented a full-stack app solution independently through all evaluation rounds including mentoring and final judging."
          />
          <HackathonCard 
            title="AceHack 4.0 - Jaipur" 
            position="Top 17 Finalist"
            date="February 2025"
            description="Finalist in the Top 17 solo entries out of 750+ individuals across India. Built and pitched an end-to-end solution individually, making it through all shortlisting rounds and final presentation as a one-man team."
          />
          <HackathonCard 
            title="Neo X Grind Hackathon - Rise In Edition" 
            position="Runner-Up"
            date="December 2024"
            description="Built the world's first blockchain-powered college application preparation platform. Recognized among the top solutions for leveraging decentralized tech to simplify university admissions."
          />
        </div>
      </section>
    </div>
  );
};

interface HackathonCardProps {
  title: string;
  position: string;
  date: string;
  description: string;
}

const HackathonCard = ({ title, position, date, description }: HackathonCardProps) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-primary font-medium">{position}</p>
        </div>
        <p className="text-sm text-muted-foreground mt-2 md:mt-0">{date}</p>
      </div>
      <p className="text-sm mt-3">{description}</p>
    </CardContent>
  </Card>
);

export default About;
