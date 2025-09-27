import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselControlProps {
  onPrev?: () => void;
  onNext?: () => void;
}

export function CarouselControl({ onPrev, onNext }: CarouselControlProps) {
  return (
    <div className="flex gap-2 mt-4">
      <button
        onClick={onPrev}
        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={onNext}
        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
