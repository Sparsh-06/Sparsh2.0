import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Briefcase, FileText, Mail, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import ProfileImage from "../assets/profile.jpg";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu toggle button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md md:hidden"
        onClick={toggleMobileMenu}
      >
        <div className="w-5 h-5 flex flex-col justify-between">
          <span className={`block w-full h-0.5 bg-gray-800 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-full h-0.5 bg-gray-800 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-full h-0.5 bg-gray-800 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 w-64 bg-sidebar border-r border-sidebar-border p-6 flex flex-col z-40 transition-transform",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 bg-gray-200">
            <img 
              src='https://www.istockphoto.com/'
              alt="Sparsh Sharma"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "pic.png";
              }}
            />
          </div>
          <h2 className="text-lg font-medium">Sparsh Sharma</h2>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>

        <nav className="flex-1 mt-6">
          <ul className="space-y-2">
            <NavItem to="/" icon={<Home size={18} />} label="Home" />
            <NavItem to="/about" icon={<User size={18} />} label="About" />
            <NavItem to="/projects" icon={<Briefcase size={18} />} label="Projects" />
            <NavItem to="/articles" icon={<FileText size={18} />} label="Articles" />
            <NavItem to="/contact" icon={<Mail size={18} />} label="Contact" />
          </ul>
        </nav>

        <div className="mt-auto pt-6 px-6">
          <p className="text-xs text-gray-500 mb-3 font-medium">Socials</p>
          <div className="flex gap-2">
            <SocialLink href="https://github.com/" icon={<Github size={16} />} />
            <SocialLink href="https://linkedin.com/" icon={<Linkedin size={16} />} />
            <SocialLink href="https://twitter.com/" icon={<Twitter size={16} />} />
            <SocialLink href="https://youtube.com/" icon={<Youtube size={16} />} />
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

interface NavItemProps {
  to: string;
  icon: JSX.Element;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => (
  <li>
    <NavLink 
      to={to} 
      className={({ isActive }) => cn(
        "flex items-center gap-3 px-2 py-2 rounded-md text-sm font-medium transition-colors",
        isActive 
          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
      )}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  </li>
);

interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
  >
    {icon}
  </a>
);

export default Sidebar;
