import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  colorClass: string;
  bgColor: string;
  shadowColor: string;
}

const buttons: FloatingButtonProps[] = [
  {
    href: "mailto:classyfits651@gmail.com",
    label: "Email Us",
    icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
    colorClass: "text-white",
    bgColor: "bg-[#EA4335] hover:bg-[#d63022]",
    shadowColor: "shadow-[#EA4335]/30",
  },
  {
    href: "https://www.instagram.com/kenzie_778?igsh=OTMzZzQ4bHQydDZ0",
    label: "Instagram",
    icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
    colorClass: "text-white",
    bgColor: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    shadowColor: "shadow-[#ee2a7b]/30",
  },
  {
    href: "https://www.tiktok.com/@kenzie.38",
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    colorClass: "text-white",
    bgColor: "bg-black hover:bg-zinc-900",
    shadowColor: "shadow-black/30",
  },
  {
    href: "https://wa.me/256778166197",
    label: "WhatsApp Chat",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 sm:w-5 sm:h-5"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.572c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.064 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.983.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    colorClass: "text-white",
    bgColor: "bg-[#25D366] hover:bg-[#20bd5a]",
    shadowColor: "shadow-[#25D366]/30",
  },
];

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center gap-2.5 z-50">
      {buttons.map((btn, index) => (
        <motion.div
          key={btn.label}
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: index * 0.1,
          }}
          className="relative group"
        >
          {/* Tooltip Label */}
          <span className="absolute right-12 sm:right-14 top-1/2 -translate-y-1/2 bg-stone-900/90 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-md whitespace-nowrap backdrop-blur-xs border border-white/10">
            {btn.label}
          </span>

          <a
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 sm:w-12 sm:h-12 ${btn.bgColor} ${btn.colorClass} rounded-full shadow-md ${btn.shadowColor} flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border border-white/15`}
            aria-label={btn.label}
          >
            {btn.icon}
          </a>
        </motion.div>
      ))}
    </div>
  );
}
