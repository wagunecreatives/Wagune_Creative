
import { ReactNode, useState, useEffect } from "react";

interface AuthWrapperProps {
  children: ReactNode;
  fallback: ReactNode;
}

// In a real app, this would check for authentication
const AuthWrapper = ({ children, fallback }: AuthWrapperProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check local storage for auth status
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // For demo purposes only - In a real app, this would be handled properly
  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};

export default AuthWrapper;
