import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils"; // Utility for conditional classNames

// Importing Icons from lucide-react
import {
  LayoutDashboard,
  Users,
  MapPin,
  CheckSquare,
  Image,
  FileText,
  Menu,
  ShieldCheck,
  ReceiptText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"; // Updated icons

// SidebarHeader Component
function SidebarHeader({ isExpanded }) {
  return (
    <div className="p-4 flex items-center justify-between">
      {isExpanded && <span className="text-xl font-bold">Admin Panel</span>}
    </div>
  );
}

// Navigation items (Admin Routes)
const navigationItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Job Provider", href: "/admin/job-provider", icon: Users },
  { name: "Job Seeker", href: "/admin/jobseeker", icon: Users },
];

function NavLink({ name, href, icon: Icon, isActive, isExpanded, setIsOpen }) {
  return (
    <Link
      to={href}
      onClick={() => setIsOpen(false)}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
      )}
    >
      <Icon className="h-5 w-5" />
      {isExpanded && <span>{name}</span>}
    </Link>
  );
}

// Sidebar Component
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isExpanded, setIsExpanded] = useState(true); // Expand/collapse state
  const location = useLocation();

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <div className="relative">
      {/* Mobile Sidebar Toggle Button */}
      <button
        className={cn(
          "lg:hidden p-4 absolute top-0 left-0 z-20 mt-2",
          isOpen ? "hidden" : ""
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "h-full border-r bg-white fixed lg:static top-0 left-0 transition-transform duration-300 z-30",
          isOpen ? "transform-none" : "-translate-x-full",
          "lg:translate-x-0",
          isExpanded ? "w-64" : "w-16"
        )}
      >
        <div className="flex flex-col h-full">
          <SidebarHeader isExpanded={isExpanded} />

          {/* Expand/Collapse Button */}
          <button
            onClick={toggleSidebar}
            className="p-2 self-end hidden lg:flex"
          >
            {isExpanded ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>

          <div className="flex-1 overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => {
                const isActive =
                  location.pathname === item.href ||
                  location.pathname.startsWith(item.href);
                return (
                  <NavLink
                    key={item.name}
                    {...item}
                    isActive={isActive}
                    isExpanded={isExpanded}
                    setIsOpen={setIsOpen}
                  />
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
