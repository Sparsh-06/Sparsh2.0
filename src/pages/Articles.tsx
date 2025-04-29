
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Articles = () => {
  const articles = [
    {
      id: "1",
      title: "My Journey to Winning Vihaan 8.0 as a Solo Developer",
      excerpt: "How I built and presented a full-stack solution independently to secure 2nd position among 400+ contenders.",
      date: "April 15, 2025",
      readTime: "8 min read",
      category: "Hackathons"
    },
    {
      id: "2",
      title: "Building Scalable React Applications: Lessons from the Field",
      excerpt: "Practical tips and best practices I've learned while developing large-scale React applications.",
      date: "March 22, 2025",
      readTime: "12 min read",
      category: "Web Development"
    },
    {
      id: "3",
      title: "From Student to Developer: My IIT Madras Experience",
      excerpt: "How I'm balancing academic studies with real-world software development projects.",
      date: "February 10, 2025",
      readTime: "6 min read",
      category: "Personal Growth"
    },
    {
      id: "4",
      title: "Introduction to Blockchain Development with Neo N3",
      excerpt: "A beginner's guide to building decentralized applications using Neo N3 blockchain.",
      date: "January 5, 2025",
      readTime: "15 min read",
      category: "Blockchain"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Articles</h1>
      <p className="text-muted-foreground mb-8">
        Thoughts, tutorials, and insights on web development and tech.
      </p>

      <div className="grid gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-muted-foreground">More articles coming soon!</p>
      </div>
    </div>
  );
};

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => (
  <Card className="cursor-pointer hover:shadow-md transition-shadow duration-300">
    <CardHeader>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-full">
            {article.category}
          </span>
          <span className="text-xs text-muted-foreground">
            {article.readTime}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">
          {article.date}
        </span>
      </div>
      <CardTitle className="hover:text-primary transition-colors duration-300">
        {article.title}
      </CardTitle>
      <CardDescription>{article.excerpt}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex justify-end">
        <span className="text-sm font-medium text-primary animated-link inline-block">
          Read more
        </span>
      </div>
    </CardContent>
  </Card>
);

export default Articles;
