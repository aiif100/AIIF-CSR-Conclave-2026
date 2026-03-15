import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_aiif-csr-conclave/artifacts/v3dquimv_AIIF%20LOGO%20og%20without%20ajk%20mountain-01.png";
const isMobile = typeof window !== "undefined" && window.innerWidth < 1280;

const navLinks = [
  { label: "Vision", href: "#vision" },
  {
    label: "Pricing",
    href: isMobile ? "#pricing" : "#qr-payment"
  },
  { label: "Speckers", href: "#speckers" },
  { label: "Register", href: "#register" },
  { label: "Partner", href: "#partner" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "nav-blur bg-[#FDFCF5]/90 shadow-md pt-4"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3" data-testid="navbar-logo">
          <img
            src={LOGO_URL}
            alt="AIIF"
            className="h-9 w-auto object-contain bg-[#1A0505] rounded p-1"
          />
          <span className="hidden sm:inline text-sm font-semibold text-[#2D0A0F] tracking-wide">
            CSR Conclave 2026
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className="text-sm font-medium text-[#5C4033] hover:text-[#641220] transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            data-testid="nav-cta"
            className="bg-[#641220] text-white px-6 py-2.5 rounded-sm text-sm font-medium tracking-wide hover:bg-[#801B2E] transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden p-2 text-[#2D0A0F]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-[#FDFCF5] border-t border-[#D4AF37]/20 shadow-lg"
        >
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-[#5C4033] hover:text-[#641220] py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="block bg-[#641220] text-white text-center px-6 py-3 rounded-sm text-sm font-medium tracking-wide mt-2"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
      <div className="h-4"></div>
    </nav>
  );
};
