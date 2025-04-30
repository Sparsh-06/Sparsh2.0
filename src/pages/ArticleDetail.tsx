import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// This would typically come from an API or database
const articles = [
  {
    id: "1",
    title: "My Journey to Winning Vihaan 8.0 as a Solo Developer",
    content: `
      <article id="vihaan-journey" style="max-width: 768px; margin: auto; padding: 1rem; font-family: 'Segoe UI', sans-serif; line-height: 1.7;">
  <header style="margin-bottom: 2rem;">
    <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 0.5rem;">🚀 My Journey to Winning Vihaan 8.0 as a Solo Developer</h1>
    <p style="color: gray; font-size: 0.9rem;"><strong>Event:</strong> Vihaan 8.0, organized by IEEE at DTU</p>
  </header>

  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem;">✈️ The Beginning</h2>
    <p>
      It all began with a simple yet powerful ambition—to build something meaningful that could make a real difference. Vihaan 8.0, organized by IEEE at DTU, was the perfect stage. As a solo developer, I was aware of the uphill battle I was signing up for. Most participants were working in teams, each bringing together diverse skill sets. I, on the other hand, had to wear all the hats—designer, developer, planner, and problem-solver.
    </p>
    <p>
      But despite that, I saw this not as a challenge, but as an opportunity—a chance to push my limits, test my ideas, and see how far I could go on my own.
    </p>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem;">🧩 The Challenge</h2>
    <p>
      Vihaan 8.0 attracted more than <strong>400+ developers and innovators</strong> across India. The competition was fierce. Every project presented was unique—ranging from cutting-edge AI applications to community-based platforms and blockchain innovations.
    </p>
    <p>
      What set the top teams apart wasn’t just tech skills—it was the <strong>ability to think deeply, solve a real-world problem</strong>, and deliver a working solution within a limited timeframe. I knew my best shot was to <strong>focus on purpose and execution</strong> rather than just features.
    </p>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem;">💡 The Idea & Solution</h2>
    <p>
      I started by identifying a real-world problem that I could solve with a full-stack application—something that would combine good design, seamless functionality, and real impact. After brainstorming multiple directions, I settled on a solution that tackled both utility and scalability.
    </p>
    <ul style="padding-left: 1.5rem; margin-top: 0.5rem;">
      <li><strong>User-friendly:</strong> Clean UI/UX to ensure accessibility for all.</li>
      <li><strong>Efficient:</strong> Optimized backend performance to handle scale.</li>
      <li><strong>Innovative:</strong> Integrated tech in a way that simplified complexity.</li>
    </ul>
    <p>
      I chose a <strong>modern stack</strong> that would support quick iteration without compromising quality. From the architecture to the smallest design details, everything was built from scratch—while ensuring <strong>clean code, reusable components, and modular APIs</strong>.
    </p>
    <p>
      Throughout the sleepless nights, I stuck to three core principles:
    </p>
    <ol style="padding-left: 1.5rem;">
      <li>Solve a real problem.</li>
      <li>Build with clarity and intention.</li>
      <li>Ensure the end-user is always the priority.</li>
    </ol>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem;">🏆 The Result</h2>
    <p>
      When the final results were announced, I was stunned. Out of <strong>400+ highly competitive participants</strong>, I secured the <strong>Second Position</strong>—as a <strong>solo developer</strong>. It was a moment of validation—not just of my technical abilities, but of the mindset I brought into the hackathon.
    </p>
    <p>
      This wasn’t just about winning a trophy. It was about proving to myself and others that:
    </p>
    <ul style="padding-left: 1.5rem;">
      <li>You don’t need a big team to create big impact.</li>
      <li>Execution and clarity matter more than size or flashiness.</li>
      <li>When your work aligns with real-world value, people notice.</li>
    </ul>
  </section>

  <section style="margin-bottom: 2rem;">
    <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem;">✨ Key Takeaways</h2>
    <ul style="padding-left: 1.5rem;">
      <li><strong>Solve problems that matter:</strong> Don’t chase trends. Solve something real, even if it seems simple.</li>
      <li><strong>User experience is everything:</strong> Great functionality fails without great usability.</li>
      <li><strong>Innovation lies in simplicity:</strong> Sometimes, a small idea with clean execution beats complex systems.</li>
      <li><strong>Being solo isn’t a limitation—it’s a mindset:</strong> Focused effort, discipline, and vision can outpace numbers.</li>
      <li><strong>Perseverance is your secret weapon:</strong> Every moment of doubt or burnout is an opportunity to dig deeper.</li>
    </ul>
  </section>

  <footer style="border-top: 1px solid #eee; padding-top: 1rem; color: #444;">
    <p>
      This experience has shaped my approach to problem-solving and product-building forever. I look forward to more challenges, more sleepless builds, and many more stories to tell.
    </p>
  </footer>
</article>


    `,
    date: "April 15, 2025",
    readTime: "8 min read",
    category: "Hackathons"
  },
  {
    id: "2",
    title: "Building Scalable React Applications: Lessons from the Field",
    content: `
      <h2>Introduction</h2>
      <p>Building scalable React applications is both an art and a science. Through years of experience, I've learned valuable lessons that have helped me create more maintainable and performant applications.</p>
      
      <h2>Component Architecture</h2>
      <p>The way you structure your components can make or break your application's scalability. Here are some key principles I follow:</p>
      <ul>
        <li>Keep components small and focused</li>
        <li>Use composition over inheritance</li>
        <li>Implement proper state management</li>
        <li>Optimize re-renders</li>
      </ul>
      
      <h2>Performance Optimization</h2>
      <p>Performance is crucial for user experience. Some techniques I use include:</p>
      <ul>
        <li>Code splitting</li>
        <li>Lazy loading</li>
        <li>Memoization</li>
        <li>Virtual scrolling for large lists</li>
      </ul>
      
      <h2>Testing and Maintenance</h2>
      <p>A robust testing strategy is essential for maintaining code quality. I recommend:</p>
      <ul>
        <li>Unit tests for components</li>
        <li>Integration tests for features</li>
        <li>End-to-end tests for critical paths</li>
        <li>Regular code reviews</li>
      </ul>
    `,
    date: "March 22, 2025",
    readTime: "12 min read",
    category: "Web Development"
  },
  {
    id: "3",
    title: "From Student to Developer: My IIT Madras Experience",
    content: `
      <h2>The Journey Begins</h2>
      <p>Starting my journey at IIT Madras was both exciting and challenging. Balancing academic studies with real-world development projects required careful planning and dedication.</p>
      
      <h2>Academic Integration</h2>
      <p>I found ways to integrate my development work with academic projects, creating a synergy between theory and practice. This approach helped me:</p>
      <ul>
        <li>Apply theoretical concepts in practical scenarios</li>
        <li>Develop problem-solving skills</li>
        <li>Build a strong portfolio</li>
        <li>Network with industry professionals</li>
      </ul>
      
      <h2>Time Management</h2>
      <p>Managing time effectively was crucial. I developed a system that allowed me to:</p>
      <ul>
        <li>Prioritize tasks effectively</li>
        <li>Set realistic goals</li>
        <li>Maintain work-life balance</li>
        <li>Stay productive</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>The skills and experiences gained during this time have been invaluable. I'm excited to continue growing as a developer while pursuing my academic goals.</p>
    `,
    date: "February 10, 2025",
    readTime: "6 min read",
    category: "Personal Growth"
  },
  {
    id: "4",
    title: "Introduction to Blockchain Development with Neo N3",
    content: `
      <h2>Getting Started with Neo N3</h2>
      <p>Neo N3 is a powerful blockchain platform that offers unique features for developers. This guide will help you get started with building decentralized applications.</p>
      
      <h2>Key Features</h2>
      <p>Neo N3 comes with several features that make it stand out:</p>
      <ul>
        <li>High performance and scalability</li>
        <li>Low transaction fees</li>
        <li>Smart contract support</li>
        <li>Cross-chain compatibility</li>
      </ul>
      
      <h2>Development Environment</h2>
      <p>Setting up your development environment is straightforward:</p>
      <ol>
        <li>Install Neo CLI</li>
        <li>Set up a local network</li>
        <li>Configure your IDE</li>
        <li>Start coding</li>
      </ol>
      
      <h2>Best Practices</h2>
      <p>Follow these best practices for successful Neo N3 development:</p>
      <ul>
        <li>Write clean, well-documented code</li>
        <li>Implement proper error handling</li>
        <li>Test thoroughly</li>
        <li>Follow security guidelines</li>
      </ul>
    `,
    date: "January 5, 2025",
    readTime: "15 min read",
    category: "Blockchain"
  }
];

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const article = articles.find(a => a.id === id);
  
  if (!article) {
    return (
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold mb-4">Article not found</h1>
        <Button onClick={() => navigate("/articles")} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Articles
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <Button 
        onClick={() => navigate("/articles")} 
        variant="ghost" 
        className="mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Articles
      </Button>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium px-2 py-1 bg-secondary rounded-full">
            {article.category}
          </span>
          <span className="text-sm text-muted-foreground">
            {article.readTime}
          </span>
          <span className="text-sm text-muted-foreground">
            {article.date}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
        
        <div 
          className="mt-8"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </div>
  );
};

export default ArticleDetail; 