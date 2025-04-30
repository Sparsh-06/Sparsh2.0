import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// This would typically come from an API or database
const articles = [
  {
    id: "1",
    title: "My Journey to Winning Vihaan 8.0 as a Solo Developer",
    content: `
      <h2>The Beginning</h2>
      <p>It all started with a simple idea - to create something that could make a difference. As a solo developer, I knew I had my work cut out for me, but I was determined to give it my all.</p>
      
      <h2>The Challenge</h2>
      <p>Competing against 400+ talented developers was no small feat. Each team brought their unique perspectives and solutions to the table. The key was to stand out while delivering real value.</p>
      
      <h2>The Solution</h2>
      <p>I decided to focus on building a full-stack solution that addressed a real-world problem. The application needed to be scalable, user-friendly, and innovative. I spent countless hours perfecting every aspect of the project.</p>
      
      <h2>The Result</h2>
      <p>When the results were announced, I couldn't believe it - second place among 400+ contenders! This achievement validated my approach and showed that with dedication and the right strategy, anything is possible.</p>
      
      <h2>Key Takeaways</h2>
      <ul>
        <li>Focus on solving real problems</li>
        <li>Pay attention to user experience</li>
        <li>Don't be afraid to innovate</li>
        <li>Perseverance pays off</li>
      </ul>
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