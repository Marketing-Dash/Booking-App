import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/60123456789"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-200"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-[hsl(0,0%,100%)]" fill="white" />
    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[hsl(0,80%,55%)] border-2 border-background" />
  </a>
);

export default WhatsAppButton;
