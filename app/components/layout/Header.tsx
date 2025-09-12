import { Link } from "react-router";
import { Button } from "../ui/button";
import { Home, Info } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">R</span>
            </div>
            <span className="font-semibold text-lg">React App</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/about" className="flex items-center space-x-2">
                <Info className="h-4 w-4" />
                <span>About</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
