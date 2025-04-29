
import { ReactNode } from "react";
import { SidebarProvider, Sidebar, SidebarInset, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <SidebarInset className="bg-background">
          <div className="p-6 md:p-8 lg:p-12">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

// Create a custom sidebar component that uses the shadcn/ui sidebar
const AppSidebar = () => {
  return (
    <Sidebar side="left" variant="sidebar" collapsible="offcanvas">
      <SidebarContent>
        <div className="flex flex-col h-full py-6">
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 bg-gray-200">
              <img 
                src="/assets/profile.jpg" 
                alt="Sparsh Sharma"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/150";
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

          <div className="mt-auto pt-6">
            <p className="text-xs text-gray-500 mb-3 font-medium">Socials</p>
            <div className="flex gap-2">
              <SocialIcon href="https://github.com/" icon={<Github size={16} />} />
              <SocialIcon href="https://linkedin.com/" icon={<Linkedin size={16} />} />
              <SocialIcon href="https://twitter.com/" icon={<Twitter size={16} />} />
              <SocialIcon href="https://youtube.com/" icon={<Youtube size={16} />} />
            </div>
          </div>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

// Helper components for navigation links
import { NavLink as RouterNavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, FileText, Mail, Github, Linkedin, Twitter, Youtube } from "lucide-react";

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
