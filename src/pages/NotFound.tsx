
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-4">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button onClick={() => navigate('/')}>
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
