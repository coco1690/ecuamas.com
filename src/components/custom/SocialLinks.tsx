import { Facebook, Instagram, Send } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialLinksProps {
  className?: string;
  iconSize?: string;
  vertical?: boolean;
}

export const SocialLinks = ({ 
  className = "", 
  iconSize = "w-5 h-5",
  vertical = false 
}: SocialLinksProps) => {
  return (
    <div className={cn("flex gap-3", vertical && "flex-col", className)}>
      {/* Instagram */}
      
        <a
        href="https://www.instagram.com/eventosibcom?igsh=NnI2ZmEzYzg3dGYx"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-gray-800 hover:bg-linear-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group"
        aria-label="Instagram"
      >
        <Instagram className={cn(iconSize, "text-gray-400 group-hover:text-white transition-colors")} />
      </a>

      {/* Facebook */}
      
        <a
        href="https://www.facebook.com/share/1FdzZU7ZJM/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 group"
        aria-label="Facebook"
      >
        <Facebook className={cn(iconSize, "text-gray-400 group-hover:text-white transition-colors")} />
      </a>

      {/* TikTok */}
      
        <a
        href="https://vm.tiktok.com/ZMHwfThws9ncL-X6R22/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-gray-800 hover:bg-black transition-all duration-300 group"
        aria-label="TikTok"
      >
        <svg
          className={cn(iconSize, "text-gray-400 group-hover:text-white transition-colors")}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      </a>

      {/* Telegram */}
      
        <a
        href="https://t.me/EventosIBCom"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-all duration-300 group"
        aria-label="Telegram"
      >
        <Send className={cn(iconSize, "text-gray-400 group-hover:text-white transition-colors")} />
      </a>
    </div>
  );
};