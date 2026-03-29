import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-display text-xl font-bold text-gradient-gold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          المحاسب القانوني
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "الرئيسية", id: "top" },
            { label: "خدماتنا", id: "services" },
            { label: "من نحن", id: "about" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => item.id === "top" ? window.scrollTo({ top: 0, behavior: "smooth" }) : scrollTo(item.id)}
              className="text-muted-foreground hover:text-gold transition-colors font-body text-sm"
            >
              {item.label}
            </button>
          ))}
          <Button variant="gold" size="sm" onClick={() => scrollTo("contact")}>
            تواصل معنا
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border p-4 space-y-3">
          {[
            { label: "الرئيسية", id: "top" },
            { label: "خدماتنا", id: "services" },
            { label: "من نحن", id: "about" },
            { label: "تواصل معنا", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => item.id === "top" ? (window.scrollTo({ top: 0, behavior: "smooth" }), setOpen(false)) : scrollTo(item.id)}
              className="block w-full text-right text-foreground font-body py-2 hover:text-gold transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
