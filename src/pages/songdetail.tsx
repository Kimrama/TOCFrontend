import { ArrowLeft, Eye, FileText, Guitar, Music4, User } from "lucide-react";

import type { TabKey } from "../interface/song";
import { demoSong } from "../data/demoSong";
import type { Song } from "../interface/song";

import { useLocation, Link } from "react-router-dom";
import PageFooter from "../UI/PageFooter";
import Cover from "../UI/Cover";
import Badge from "../UI/Badge";
import Stat from "../UI/Stat";
import CopyButton from "../UI/CopyButton";
import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SongDetail() {
  const routerLocation = useLocation(); // ← เปลี่ยนชื่อกันชน
  const navigate = useNavigate();
  const song =
    (routerLocation.state as { song?: Song } | null)?.song ?? demoSong;
  const image =
    (routerLocation.state as { image?: string } | null)?.image ??
    song.song_transcriber;
  const from = (routerLocation.state as any)?.from;
  console.log("SongDetail song:", song);
  const [tab, setTab] = useState<TabKey>("lyrics");
  console.log("Image URL:", song.chord_image);

  const [copied, setCopied] = useState<null | TabKey>(null);
  const [cb, setCb] = useState(0);

  const imgSrc = useMemo(() => {
    // ใช้ window.location.origin เสมอ (อย่าใช้ตัวแปร useLocation)
    const u = new URL(song.chord_image, window.location.origin);
    if (cb) u.searchParams.set("cb", String(cb)); // เพิ่มเฉพาะตอน reload
    return u.toString();
  }, [song.chord_image, cb]);

  // const handleExport = () => window.print();

  const onCopied = (which: TabKey) => {
    setCopied(which);
    setTimeout(() => setCopied(null), 1500);
  };

  useEffect(() => {
    if (from !== "internal") {
      console.warn("⛔ Access denied: direct access not allowed");
      navigate("/", { replace: true }); // redirect กลับหน้าแรก
    }
  }, [from, navigate]);
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="bg-card border-b border-border/30 shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <Link to={"/"}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                  <Music4 className="text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    LyricDB
                  </h1>
                  <p className="text-muted-foreground">
                    Discover amazing lyric&chord collection with RegEx
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        {/* Back + breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-neutral-600">
          <Link
            to="/"
            className="inline-flex items-center gap-2 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-300 rounded-md px-1"
            aria-label="Back to songs"
          >
            <ArrowLeft size={16} />
            <span>Back to songs</span>
          </Link>
          <span className="mx-1">/</span>
          <span className="font-medium text-neutral-900">{song.song}</span>
        </div>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-[260px,1fr]">
          {/* Left: Cover & meta */}
          <div className="space-y-4">
            <Cover coverUrl={image} />

            <div className="grid grid-cols-2 gap-3">
              <Badge icon={User} label={song.singer} />
            </div>

            <Stat icon={Eye} value={song.views.toLocaleString()} hint="Views" />
          </div>

          {/* Right: Title & tabs */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                {song.song}
              </h1>
              <p className="mt-1 text-neutral-600">
                by{" "}
                <span className="font-medium text-neutral-800">
                  {song.singer}
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
              {/* Tabs */}
              <div className="flex items-center gap-2 p-2">
                <button
                  onClick={() => setTab("lyrics")}
                  className={
                    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium " +
                    (tab === "lyrics"
                      ? "bg-neutral-900 text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200")
                  }
                >
                  <FileText size={16} /> Lyrics
                </button>
                <button
                  onClick={() => setTab("chords")}
                  className={
                    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium " +
                    (tab === "chords"
                      ? "bg-neutral-900 text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200")
                  }
                >
                  <Guitar size={16} /> Chords
                </button>

                <div className="ml-auto flex items-center gap-2 pr-2">
                  {tab === "lyrics" ? (
                    <CopyButton
                      text={song.lyrics}
                      label="Copy lyrics"
                      onCopied={() => onCopied("lyrics")}
                    />
                  ) : (
                    <CopyButton
                      text={song.chord_image}
                      label="Copy chords"
                      onCopied={() => onCopied("chords")}
                    />
                  )}

                  {copied && (
                    <span className="text-sm text-emerald-600">Copied ✓</span>
                  )}
                </div>
              </div>

              <div className="border-t border-neutral-200 p-6">
                {tab === "lyrics" ? (
                  <pre className="whitespace-pre-wrap break-words font-mono text-[15px] leading-relaxed text-neutral-900">
                    {song.lyrics}
                  </pre>
                ) : (
                  <div className="space-y-3">
                    {song.chord_image !== "" ? (
                      <img
                        src={song.chord_image}
                        alt="Chord"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        style={{ maxWidth: "100%", borderRadius: "8px" }}
                      />
                    ) : (
                      <p className="text-neutral-600">No chord available.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}
