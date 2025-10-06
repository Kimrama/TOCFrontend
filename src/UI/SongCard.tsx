import { Card } from "./Card";

interface SongCardProps {
  title: string;
  singer: string;
  views: number;
  image: string;
}

export function SongCard({
  title,
  singer,
  views,
  image,
}: SongCardProps) {
  return (
    <Card
      className="flex items-center gap-4 w-[260px] h-[110px] shrink-0 p-3 rounded-xl bg-card border border-border/50 text-card-foreground shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
    >
      <img
        src={image}
        alt={title}
        className="w-16 h-16 rounded-lg object-fit flex-shrink-0"
      />
      <div className="flex flex-col justify-between flex-1 h-full min-w-0">
        <div>
          <h3 className="text-sm font-semibold text-foreground leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground truncate">
            {singer}
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          {views.toLocaleString()} views
        </p>
      </div>
    </Card>
  );
}