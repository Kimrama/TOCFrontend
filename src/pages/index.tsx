import {CloudCog, Music4} from 'lucide-react'
import SearchComponent from '../components/SearchComponent';
import { useEffect, useState } from 'react';
import { fetchSongs } from '../api/song';
import type { Song, SongQuery, SongResponse } from '../interface/song';

function Index() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchData(query: SongQuery) {
    setLoading(true);
    try {
      const response: SongResponse = await fetchSongs(query);
      setSongs(response.songs);
      console.log(response);
      setError(null);
    } catch (error) {
      setError('Failed to fetch songs');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData({ page: 1, page_size: 10 });
  }, []);
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
                <p className="text-muted-foreground">Discover amazing lyric&chord collection with RegEx</p>
              </div>
            </div>
            <div className="border px-4 py-2 rounded-lg hover:bg-accent hover:shadow-md transition cursor-pointer">
                <button>Export This Page</button>
            </div>
          </div>
            <SearchComponent/>
        </div>
      </header>
      <main>
      </main>
    </div>
  );
}

export default Index;
