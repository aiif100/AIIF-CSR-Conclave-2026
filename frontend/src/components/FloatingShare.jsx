import { useState } from "react";
import { Share2, X, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const EVENT_URL = typeof window !== "undefined" ? window.location.href : "https://aiif-csr-conclave.preview.emergentagent.com";
const EVENT_TITLE = "AIIF's CSR Conclave 2026 - Role of CSR in Curating Sustainable Communities Through Innovation";
const EVENT_TEXT = "Join the exclusive CSR Conclave 2026 by AIIF on 20th March 2026 at Navakkarai, Coimbatore. Limited seats! #InnovateWithPurpose";

const shareLinks = [
  {
    name: "WhatsApp",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    getUrl: () => `https://wa.me/?text=${encodeURIComponent(`${EVENT_TEXT}\n\n${EVENT_URL}`)}`,
    color: "hover:bg-[#25D366] hover:text-white",
  },
  {
    name: "X (Twitter)",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    getUrl: () => `https://twitter.com/intent/tweet?text=${encodeURIComponent(EVENT_TEXT)}&url=${encodeURIComponent(EVENT_URL)}`,
    color: "hover:bg-[#1A0505] hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: () => <Linkedin className="w-5 h-5" />,
    getUrl: () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(EVENT_URL)}`,
    color: "hover:bg-[#0A66C2] hover:text-white",
  },
  {
    name: "Facebook",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    getUrl: () => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(EVENT_URL)}`,
    color: "hover:bg-[#1877F2] hover:text-white",
  },
  {
    name: "Email",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    getUrl: () => `mailto:?subject=${encodeURIComponent(EVENT_TITLE)}&body=${encodeURIComponent(`${EVENT_TEXT}\n\nRegister here: ${EVENT_URL}`)}`,
    color: "hover:bg-[#641220] hover:text-white",
  },
];

export const FloatingShare = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-5 bottom-24 z-40" data-testid="floating-share">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="mb-3 bg-white rounded-lg shadow-2xl border border-[#D4AF37]/20 overflow-hidden"
          >
            <div className="px-4 py-3 bg-[#641220]">
              <p className="text-white text-sm font-semibold">Share This Event</p>
            </div>
            <div className="p-2">
              {shareLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.getUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`share-${link.name.toLowerCase().replace(/[\s()]/g, "").replace(/\s+/g, "-")}`}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[#2D0A0F] transition-all duration-200 ${link.color}`}
                  >
                    <Icon />
                    <span className="font-medium">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        data-testid="share-toggle-button"
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
          open
            ? "bg-[#2D0A0F] text-white"
            : "bg-[#641220] text-white hover:bg-[#801B2E]"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
      </motion.button>
    </div>
  );
};
