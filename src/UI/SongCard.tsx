import { Card } from "./Card";

interface SongCardProps {
  title: string;
  artist: string;
  genre: string;
  year: string;
  duration: string;
  image: string;
}

export function SongCard({
  title,
  artist,
  genre,
  year,
  duration,
  image,
}: SongCardProps) {
  return (
    <Card
      className="flex items-start gap-4 min-w-[260px] shrink-0 p-3 rounded-xl bg-card border border-border/50 text-card-foreground shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
    >
      {/* Thumbnail ทางซ้าย */}
      <img
        src={image}
        alt={title}
        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
      />

      {/* ข้อมูลทางขวา */}
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-foreground leading-tight">
          {title}
        </h3>

        <p className="text-xs text-muted-foreground ">{artist}</p>

        <p className="text-xs text-muted-foreground mt-3">
          <span>{genre}</span>
          <span className="mx-2">•</span>
          <span>{year}</span>
          <span className="mx-2">•</span>
          <span>{duration}</span>
        </p>
      </div>
    </Card>
  );
}
