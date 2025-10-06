import { useEffect, useState } from "react";
import { fetchSongs, loadCSV } from "../api/song";
import type { Song, SongResponse } from "../interface/song";
import { SongCard } from "../UI/SongCard";
import SearchComponent from "../components/SearchComponent";
import { Link } from "react-router-dom";
import { Music4 } from "lucide-react";

function AllSong() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isNext, setIsNext] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchAllSongs(
    page: number,
    query: string = "",
    size: number = pageSize
  ) {
    setLoading(true);
    try {
      const response: SongResponse = await fetchSongs({
        page,
        page_size: size,
        popular: false,
        song: query,
      });
      setSongs(response.songs);
      setIsNext(response.is_next);
      setError(null);
    } catch (err) {
      setError("Failed to fetch songs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllSongs(1, "", pageSize);
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    fetchAllSongs(1, searchQuery, pageSize);
    setPage(1);
  }, [searchQuery, pageSize]);

  const handleNextPage = () => {
    if (isNext) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchAllSongs(nextPage, searchQuery, pageSize);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      const prevPage = page - 1;
      setPage(prevPage);
      fetchAllSongs(prevPage, searchQuery, pageSize);
    }
  };
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

  return (
    <div className="flex flex-col min-h-screen">
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
          />
          {/* <FilterComponent /> */}
        </div>
      </header>
      <main className="bg-gray-50 flex-1">
        <div className="container mx-auto px-6 py-8">
          {loading && <div className="mt-4">Loading...</div>}
          {error && <div className="mt-4 text-red-500">{error}</div>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {songs.map((song, index) => (
              <Link
                to={`/song/${encodeURIComponent(song.song)}`}
                state={{ song }}
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
          </div>
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={handlePrevPage}
                disabled={page === 1 || loading}
                className="border px-4 w-24 py-2 rounded-lg hover:bg-accent hover:shadow-md transition cursor-pointer"
              >
                Previous
              </button>
              <span>Page {page}</span>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="page-size"
                  className="text-sm text-muted-foreground"
                >
                  Page Size:
                </label>
                <select
                  id="page-size"
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </div>
              <button
                onClick={handleNextPage}
                disabled={!isNext || loading}
                className="border px-4 w-24 py-2 rounded-lg hover:bg-accent hover:shadow-md transition cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AllSong;
