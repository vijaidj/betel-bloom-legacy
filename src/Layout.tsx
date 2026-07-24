import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToHash from "@/components/ScrollToHash";

const queryClient = new QueryClient();

/**
 * Wraps every route. Providers live here rather than in App so that
 * the static generator can render each route independently.
 */
const Layout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ScrollToHash />
      <Toaster />
      <Sonner />
      <Outlet />
    </TooltipProvider>
  </QueryClientProvider>
);

export default Layout;
