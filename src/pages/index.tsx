import { useEffect, useState } from "react";
import { fetchSongs, loadCSV } from "../api/song";
import type { Song, SongResponse } from "../interface/song";
import { Music4, Eye } from "lucide-react";
import SearchComponent from "../components/SearchComponent";
import { FilterComponent } from "../components/FilterComponent";
import { SongCard } from "../UI/SongCard";
import { Section } from "../UI/Section";
import { Link } from "react-router-dom";

function Index() {
  const [popularSongs, setPopularSongs] = useState<Song[]>([]);
  const [songs, setSongs] = useState<Song[]>([]);
  const [popularPage, setPopularPage] = useState(1);
  const [songsPage, setSongsPage] = useState(1);
  const pageSize = 10;
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchPopularSongs(page: number) {
    setLoading(true);
    try {
      const response: SongResponse = await fetchSongs({
        page,
        page_size: pageSize,
        popular: true,
      });
      setPopularSongs((prevSongs) => [...prevSongs, ...response.songs]);
      setError(null);
    } catch (err) {
      setError("Failed to fetch popular songs");
    } finally {
      setLoading(false);
    }
  }

  async function fetchAllSongs(page: number, query: string = "") {
    setLoading(true);
    try {
      const response: SongResponse = await fetchSongs({
        page,
        page_size: pageSize,
        popular: false,
        song: query,
        singer: query,
      });
      if (page === 1) {
        setSongs(response.songs);
      } else {
        setSongs((prevSongs) => [...prevSongs, ...response.songs]);
      }
      setError(null);
    } catch (err) {
      setError("Failed to fetch songs");
    } finally {
      setLoading(false);
    }
  }

  async function exportCSV() {
    const response = await loadCSV();

    const url = window.URL.createObjectURL(new Blob([response]));
    const link = document.createElement("a");
    link.href = url;

    link.setAttribute("download", "songs_page.csv");
    document.body.appendChild(link);
    link.click();

    link.parentNode?.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  useEffect(() => {
    fetchPopularSongs(popularPage);
    fetchAllSongs(1, "");
    setSongsPage(1);
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      fetchAllSongs(1, "");
      setSongsPage(1);
    } else {
      fetchAllSongs(1, searchQuery);
      setSongsPage(1);
    }
  }, [searchQuery]);

  const handleNextPopularPage = () => {
    const nextPage = popularPage + 1;
    setPopularPage(nextPage);
    fetchPopularSongs(nextPage);
  };

  const handleNextSongsPage = () => {
    const nextPage = songsPage + 1;
    setSongsPage(nextPage);
    fetchAllSongs(nextPage, searchQuery);
  };

  return (
    <div className="flex min-h-screen flex-col ">
      <header className="bg-card border-b border-border/30 shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                <Music4 className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">LyricDB</h1>
                <p className="text-muted-foreground">
                  Discover amazing lyric&chord collection with RegEx
                </p>
              </div>
            </div>
            <div className="border px-4 py-2 rounded-lg hover:bg-accent hover:shadow-md transition cursor-pointer">
              <button onClick={() => exportCSV()}>Export This Page</button>
            </div>
          </div>
          <SearchComponent
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search by track or singer name"
          />
          {/* <FilterComponent /> */}
        </div>
      </header>
      <main className="">
        <Section
          title="Popular Songs"
          subtitle="Tracks that are trending and most played"
          icon={<Eye />}
          onNextPage={handleNextPopularPage}
        >
          {popularSongs.map((song, index) => (
            <Link
              to={`/song/${encodeURIComponent(song.song)}`}
              state={{
                from: "internal",
                song: song,
                image: song.song_transcriber,
              }}
              key={index}
            >
              <SongCard
                title={song.song}
                singer={song.singer}
                views={song.views}
                image={song.song_transcriber}
              />
            </Link>
          ))}
        </Section>

        <Section
          title="Songs"
          subtitle="Browse the rest of the tracks"
          icon={<Music4 />}
          onNextPage={handleNextSongsPage}
        >
          {songs.map((song, index) => (
            <Link
              to={`/song/${encodeURIComponent(song.song)}`}
              state={{
                from: "internal",
                song: song,
                image: song.song_transcriber,
              }}
              key={index}
            >
              <SongCard
                title={song.song}
                singer={song.singer}
                views={song.views}
                image={song.song_transcriber}
              />
            </Link>
          ))}
        </Section>

        <div className="flex justify-center my-8 mx-auto px-6 py-10 w-full bg-white">
          <Link to="/allSong">
            <button className="border px-4 py-2 rounded-lg hover:bg-accent hover:shadow-md transition cursor-pointer">
              View All Songs
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Index;
