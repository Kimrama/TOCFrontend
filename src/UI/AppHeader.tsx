
import { Music, ExternalLink } from "lucide-react";

type Props = {
  onExport?: () => void;
};

export default function AppHeader({ onExport }: Props) {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
            <Music size={18} />
          </div>
          <div>
            <div className="text-lg font-bold leading-tight">LyricDB</div>
            <div className="text-xs text-neutral-500 -mt-0.5">
              Discover amazing lyric&chord collection with RegEx
            </div>
          </div>
        </div>

        <div className="hidden flex-1 items-center sm:flex">
          <div className="mx-6 flex w-full items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-100/60 px-3 py-2 text-neutral-600">
            <span className="text-sm">Search by track name</span>
          </div>
        </div>

        <button
          onClick={onExport}
          className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-50"
        >
          Export This Page CSV
        </button>
      </div>
    </header>
  );
}
