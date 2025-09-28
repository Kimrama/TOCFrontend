import { useEffect, useState } from "react";
import { ArrowLeft, Eye, FileText, Guitar, User } from "lucide-react";

import type { TabKey } from "../interface/song";
import { demoSong } from "../data/demoSong";

import AppHeader from "../UI/AppHeader";
import PageFooter from "../UI/PageFooter";
import Cover from "../UI/Cover";
import Badge from "../UI/Badge";
import Stat from "../UI/Stat";
import CopyButton from "../UI/CopyButton";

export default function SongDetail() {
  const [tab, setTab] = useState<TabKey>("lyrics");
  const [views, setViews] = useState(0);
  const [copied, setCopied] = useState<null | TabKey>(null);

  // นับผู้เข้าชม (localStorage)
  useEffect(() => {
    const key = `lyricdb:views:${demoSong.song}`;
    const n = parseInt(localStorage.getItem(key) || "0");
    const next = n + 1;
    setViews(next);
    localStorage.setItem(key, String(next));
  }, []);

  // const handleExport = () => window.print();

  const onCopied = (which: TabKey) => {
    setCopied(which);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <AppHeader/>

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        {/* Back + breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-neutral-600">
          <ArrowLeft size={16} />
          <span>Back to songs</span>
          <span className="mx-1">/</span>
          <span className="font-medium text-neutral-900">{demoSong.song}</span>
        </div>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-[260px,1fr]">
          {/* Left: Cover & meta */}
          <div className="space-y-4">
            <Cover coverUrl={demoSong.coverUrl} />

            <div className="grid grid-cols-2 gap-3">
              <Badge icon={User} label={demoSong.singer} />
            </div>

            <Stat icon={Eye} value={views.toLocaleString()} hint="Views" />
          </div>

          {/* Right: Title & tabs */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                {demoSong.song}
              </h1>
              <p className="mt-1 text-neutral-600">
                by{" "}
                <span className="font-medium text-neutral-800">
                  {demoSong.singer}
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
                      text={demoSong.lyrics}
                      label="Copy lyrics"
                      onCopied={() => onCopied("lyrics")}
                    />
                  ) : (
                    <CopyButton
                      text={demoSong.chords_image}
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
                    {demoSong.lyrics}
                  </pre>
                ) : (
                  <pre className="whitespace-pre-wrap break-words font-mono text-[15px] leading-relaxed text-neutral-900">
                    <img src={demoSong.chords_image} ></img>
                  </pre>
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
