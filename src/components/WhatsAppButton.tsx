import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/916379144257?text=Hello%2C%20I%20am%20interested%20in%20your%20betel%20leaves.";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppButton;
