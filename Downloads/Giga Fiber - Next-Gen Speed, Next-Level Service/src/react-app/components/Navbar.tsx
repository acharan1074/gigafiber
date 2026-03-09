import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Plans", path: "/#plans" },
  { name: "New Connection", path: "/new-connection" },
  { name: "Feedback", path: "/feedback" },
  { name: "Support", path: "/support" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setMobileOpen(false);
    if (path.includes("#")) {
      const element = document.getElementById(path.split("#")[1]);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#003DA5] via-[#003DA5] to-[#003DA5] shadow-2xl border-b-4 border-[#FF6B35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand - Removed text */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  location.pathname === link.path.split("#")[0]
                    ? "bg-[#FF6B35] text-white shadow-lg shadow-orange-500/50"
                    : "text-blue-100 hover:text-white hover:bg-[#FF6B35]/20"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/new-connection">
              <Button className="bg-gradient-to-r from-[#FF6B35] to-[#FFB81C] hover:from-[#E55A25] hover:to-[#F0A90F] text-white font-bold shadow-lg shadow-orange-500/40 border-0 transition-all duration-200 hover:shadow-xl">
                Get Connected
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#FF6B35]/30 text-white transition-all"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#003DA5] to-[#002080] border-t-4 border-[#FF6B35] animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`block px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                  location.pathname === link.path.split("#")[0]
                    ? "bg-[#FF6B35] text-white shadow-lg"
                    : "text-blue-100 hover:text-white hover:bg-[#FF6B35]/20"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/new-connection" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-4 bg-gradient-to-r from-[#FF6B35] to-[#FFB81C] hover:from-[#E55A25] hover:to-[#F0A90F] text-white font-bold border-0 transition-all">
                Get Connected
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
