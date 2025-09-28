import React, { useMemo } from "react";
import { Music } from "lucide-react";

type Props = {
  coverUrl?: string;
};

export default function Cover({ coverUrl }: Props) {
  const GradientCover = useMemo(
    () => (
      <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-purple-600 p-6 shadow-md">
        <div className="flex h-full w-full items-center justify-center rounded-xl bg-black/10">
          <Music size={64} className="text-white/90" />
        </div>
      </div>
    ),
    []
  );

  if (!coverUrl) return GradientCover;

  return (
    <div className="aspect-square w-full overflow-hidden rounded-2xl shadow-md">
      <img
        src={coverUrl}
        alt="Cover"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
