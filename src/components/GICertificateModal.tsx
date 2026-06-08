import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";
import giCertPage1 from "@/assets/gi-cert-page1.jpg";
import giCertPage2 from "@/assets/gi-cert-page2.jpg";

const pages = [giCertPage1, giCertPage2];

// Repeating diagonal watermark — survives screenshots
const WATERMARK =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='200'>
       <text x='10' y='110' fill='rgba(10,40,20,0.20)' font-size='22' font-weight='700'
             font-family='Arial, sans-serif' transform='rotate(-28 160 100)'>
         VETRI LEAF · GI CERTIFIED
       </text>
     </svg>`
  );

const block = (e: React.SyntheticEvent) => e.preventDefault();

const GICertificateModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => {
  const [page, setPage] = useState(0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-primary font-serif text-xl">
            GI Certificate — Sholavandan Vetrilai
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Geographical Indication No. 789 · Registered under GI Act, 1999
          </p>
        </DialogHeader>

        <div
          className="relative flex items-center justify-center bg-muted/30 mx-4 rounded-lg overflow-hidden select-none"
          onContextMenu={block}
        >
          <img
            src={pages[page]}
            alt={`GI Certificate Page ${page + 1}`}
            className="w-full h-auto max-h-[60vh] object-contain pointer-events-none select-none"
            draggable={false}
            onDragStart={block}
            onContextMenu={block}
            style={{ WebkitUserSelect: "none", userSelect: "none", WebkitTouchCallout: "none" }}
          />

          {/* Watermark overlay — sits above the image, not capturable as a clean copy */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: `url("${WATERMARK}")`, backgroundRepeat: "repeat" }}
            aria-hidden="true"
          />

          {/* Page navigation */}
          {pages.length > 1 && (
            <>
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 shadow-md disabled:opacity-30 hover:bg-background transition-colors z-10"
              >
                <ChevronLeft className="h-5 w-5 text-primary" />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(pages.length - 1, p + 1))}
                disabled={page === pages.length - 1}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 shadow-md disabled:opacity-30 hover:bg-background transition-colors z-10"
              >
                <ChevronRight className="h-5 w-5 text-primary" />
              </button>
            </>
          )}
        </div>

        <div className="flex items-center justify-between px-6 pb-5 pt-3">
          <span className="text-xs text-muted-foreground">
            Page {page + 1} of {pages.length}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" /> View only · Protected document
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GICertificateModal;
