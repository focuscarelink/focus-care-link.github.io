import { Phone, Briefcase } from "lucide-react";

export function StickyContactBar() {
  return (
    <div className="sticky-contact md:hidden">
      <div className="container py-3">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:02074197419"
            className="flex items-center justify-center gap-2 py-3 px-4 bg-primary text-primary-foreground rounded-lg font-semibold transition-transform active:scale-95"
          >
            <Phone className="w-5 h-5" />
            <span>Care Enquiry</span>
          </a>
          <a
            href="tel:02081895984"
            className="flex items-center justify-center gap-2 py-3 px-4 bg-accent text-accent-foreground rounded-lg font-semibold transition-transform active:scale-95"
          >
            <Briefcase className="w-5 h-5" />
            <span>Join Our Team</span>
          </a>
        </div>
      </div>
    </div>
  );
}
