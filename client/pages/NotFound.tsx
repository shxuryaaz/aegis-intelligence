import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-5xl font-semibold mb-3 text-foreground">404</h1>
        <p className="text-sm text-muted-foreground mb-6">The page you are looking for does not exist.</p>
        <a href="/" className="px-4 py-2 rounded-md border hover:bg-secondary/40 transition">Return to Dashboard</a>
      </div>
    </div>
  );
};

export default NotFound;
