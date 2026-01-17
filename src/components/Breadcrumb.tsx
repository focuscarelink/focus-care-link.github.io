import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  currentPage: string;
}

export function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <nav className="flex items-center justify-center gap-2 text-sm text-background/70 mb-6">
      <Link to="/" className="flex items-center gap-1 hover:text-background transition-colors">
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-background font-medium">{currentPage}</span>
    </nav>
  );
}
