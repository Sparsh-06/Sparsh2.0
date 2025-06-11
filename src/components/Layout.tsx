import { ReactNode, useState } from "react";
import { Home, User, Briefcase, FileText, Mail, Github, Linkedin, Twitter, Youtube, Menu } from "lucide-react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const SIDEBAR_WIDTH = "16rem";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-background flex">
      {/* Sidebar - only visible on md screens and above */}
      <div className="hidden md:block fixed top-0 left-0 h-screen z-40" style={{ width: SIDEBAR_WIDTH }}>
        <DesktopSidebar />
      </div>
      
      {/* Main content */}
      <div className="flex-1 md:ml-[16rem]">
        <div className="bg-background">
          <div className="relative">
            {/* Mobile navigation menu */}
            <div className="md:hidden fixed top-4 left-4 z-50">
              <MobileNav />
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-12 pt-16 md:pt-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile navigation component
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg py-2 z-50">
          <MobileNavLink to="/" label="Home" icon={<Home size={18} />} onClick={() => setIsOpen(false)} />
          <MobileNavLink to="/about" label="About" icon={<User size={18} />} onClick={() => setIsOpen(false)} />
          <MobileNavLink to="/projects" label="Projects" icon={<Briefcase size={18} />} onClick={() => setIsOpen(false)} />
          <MobileNavLink to="/articles" label="Articles" icon={<FileText size={18} />} onClick={() => setIsOpen(false)} />
          <MobileNavLink to="/contact" label="Contact" icon={<Mail size={18} />} onClick={() => setIsOpen(false)} />
          
          <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2 px-4">
            <p className="text-xs text-gray-500 mb-2 font-medium">Socials</p>
            <div className="flex gap-2">
              <SocialIcon href="https://github.com/Sparsh-06" icon={<Github size={16} />} />
              <SocialIcon href="https://linkedin.com/in/sparshdev" icon={<Linkedin size={16} />} />
              <SocialIcon href="https://twitter.com/pvtsparsshh" icon={<Twitter size={16} />} />
              <SocialIcon href="https://youtube.com/@itssparshiii" icon={<Youtube size={16} />} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Mobile navigation link component
interface MobileNavLinkProps {
  to: string;
  icon: JSX.Element;
  label: string;
  onClick: () => void;
}

const MobileNavLink = ({ to, icon, label, onClick }: MobileNavLinkProps) => (
  <RouterNavLink 
    to={to} 
    onClick={onClick}
    className={({ isActive }) => cn(
      "flex items-center gap-3 px-4 py-2 text-sm font-medium transition-colors",
      isActive 
        ? "bg-gray-100 dark:bg-gray-800 text-primary" 
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    )}
  >
    {icon}
    <span>{label}</span>
  </RouterNavLink>
);

// Desktop sidebar component
const DesktopSidebar = () => {
  return (
    <div className="h-full bg-sidebar-background border-r border-sidebar-border">
      <div className="flex flex-col h-full py-6">
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 bg-gray-200">
            <img 
              src="/pic.png" 
              alt="Sparsh Sharma"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
          <h2 className="text-lg font-medium">Sparsh Sharma</h2>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>

        <nav className="flex-1 mt-6">
          <ul className="space-y-2">
            <NavLink to="/" label="Home" icon={<Home size={18} />} />
            <NavLink to="/about" label="About" icon={<User size={18} />} />
            <NavLink to="/projects" label="Projects" icon={<Briefcase size={18} />} />
            <NavLink to="/articles" label="Articles" icon={<FileText size={18} />} />
            <NavLink to="/contact" label="Contact" icon={<Mail size={18} />} />
          </ul>
        </nav>

        <div className="mt-auto pt-6 px-6">
          <p className="text-xs text-gray-500 mb-3 font-medium">Socials</p>
          <div className="flex gap-2">
            <SocialIcon href="https://github.com/Sparsh-06" icon={<Github size={16} />} />
            <SocialIcon href="https://linkedin.com/in/sparshdev" icon={<Linkedin size={16} />} />
            <SocialIcon href="https://twitter.com/pvtsparsshh" icon={<Twitter size={16} />} />
            <SocialIcon href="https://youtube.com/@itssparshiii" icon={<Youtube size={16} />} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper components for navigation links
interface NavLinkProps {
  to: string;
  icon: JSX.Element;
  label: string;
}

const NavLink = ({ to, icon, label }: NavLinkProps) => (
  <li>
    <RouterNavLink 
      to={to} 
      className={({ isActive }) => cn(
        "flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors",
        isActive 
          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
      )}
    >
      {icon}
      <span>{label}</span>
    </RouterNavLink>
  </li>
);

interface SocialIconProps {
  href: string;
  icon: JSX.Element;
}

const SocialIcon = ({ href, icon }: SocialIconProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
  >
    {icon}
  </a>
);

export default Layout;
