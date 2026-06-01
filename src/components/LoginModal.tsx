
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    // Clear error when user starts typing again
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, accept any login
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify({
        name: "User",
        email: formData.email
      }));

      setIsLoading(false);
      onClose();
      window.location.reload(); // Refresh to update auth state
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome Back</DialogTitle>
          <DialogDescription>
            Log in to your account to continue.
          </DialogDescription>

        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Button variant="link" className="p-0 h-auto text-xs" type="button">
                Forgot password?
              </Button>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="rounded border-gray-300 text-brand-red focus:ring-brand-red"
            />
            <Label htmlFor="rememberMe" className="text-sm">
              Remember me
            </Label>
          </div>

          <div className="flex flex-col space-y-4 pt-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
            
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Button 
                variant="link" 
                className="p-0 h-auto" 
                type="button"
                onClick={() => {
                  onClose();
                  // Open signup modal after a short delay
                  setTimeout(() => {
                    const navbar = document.querySelector("header");
                    if (navbar) {
                      const buttons = navbar.querySelectorAll("button");
                      // Find signup button (last button)
                      const signupButton = buttons[buttons.length - 1];
                      signupButton?.click();
                    }
                  }, 100);
                }}
              >
                Sign up
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
