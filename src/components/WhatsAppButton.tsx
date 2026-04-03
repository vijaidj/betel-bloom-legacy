import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20GI%20Betel%20Leaf%20for%20%5Bwedding%2Ffunction%2Fpooja%5D";

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
