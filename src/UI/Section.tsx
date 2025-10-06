import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface SectionProps {
  title: string;
  subtitle?: string;
  icon: ReactNode;
  children: ReactNode;
  onNextPage?: () => void;
  onPrevPage?: () => void;
}

export function Section({ title, subtitle, icon, children, onNextPage, onPrevPage }: SectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;
      if (isAtEnd && onNextPage) {
        onNextPage();
      } else {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-gray-50 border-t border-border/20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-muted flex items-center justify-center">
              {icon}
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">{title}</h2>
              {subtitle && (
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-accent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-accent"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {children}
        </div>
      </div>
    </section>
  );
}