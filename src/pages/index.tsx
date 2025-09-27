import { Music4, Eye, Star, Clock } from 'lucide-react'
import SearchComponent from '../components/SearchComponent';
import { FilterComponent } from '../components/FilterComponent';
import { SongCard } from '../UI/SongCard';
import { Section } from '../UI/Section';

function Index() {
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
          <SearchComponent />
          <FilterComponent />
        </div>
      </header>
      <main className="bg-gray-50">
        {/* Hit Songs */}
        <Section title="Hit Songs" subtitle="Most played tracks with highest view count" icon={<Eye />}>
          <SongCard
            title="Dancing Queen"
            artist="Pop Stars"
            genre="Pop"
            year="2023"
            duration="3:21"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Bubble Pop"
            artist="Sweet Melody"
            genre="Pop"
            year="2023"
            duration="3:12"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="City Lights"
            artist="Urban Flow"
            genre="Hip-hop"
            year="2023"
            duration="3:28"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Midnight Frequencies"
            artist="Neon Pulse"
            genre="Electronic"
            year="2023"
            duration="3:42"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Dancing Queen"
            artist="Pop Stars"
            genre="Pop"
            year="2023"
            duration="3:21"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Bubble Pop"
            artist="Sweet Melody"
            genre="Pop"
            year="2023"
            duration="3:12"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="City Lights"
            artist="Urban Flow"
            genre="Hip-hop"
            year="2023"
            duration="3:28"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Midnight Frequencies"
            artist="Neon Pulse"
            genre="Electronic"
            year="2023"
            duration="3:42"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Dancing Queen"
            artist="Pop Stars"
            genre="Pop"
            year="2023"
            duration="3:21"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Bubble Pop"
            artist="Sweet Melody"
            genre="Pop"
            year="2023"
            duration="3:12"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="City Lights"
            artist="Urban Flow"
            genre="Hip-hop"
            year="2023"
            duration="3:28"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Midnight Frequencies"
            artist="Neon Pulse"
            genre="Electronic"
            year="2023"
            duration="3:42"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
        </Section>


        {/* High Score Songs */}
        <Section title="High Score Songs" subtitle="Top-rated songs with the best scores" icon={<Star />}>
          <SongCard
            title="Symphony No. 9"
            artist="Classical Ensemble"
            genre="Classical"
            year="2020"
            duration="8:45"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Golden Hour"
            artist="Sunset Drive"
            genre="Indie Rock"
            year="2021"
            duration="4:03"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Midnight Frequencies"
            artist="Neon Pulse"
            genre="Electronic"
            year="2023"
            duration="3:42"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Moonlight Sonata"
            artist="Piano Masters"
            genre="Classical"
            year="2021"
            duration="6:12"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Symphony No. 9"
            artist="Classical Ensemble"
            genre="Classical"
            year="2020"
            duration="8:45"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Golden Hour"
            artist="Sunset Drive"
            genre="Indie Rock"
            year="2021"
            duration="4:03"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Midnight Frequencies"
            artist="Neon Pulse"
            genre="Electronic"
            year="2023"
            duration="3:42"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Moonlight Sonata"
            artist="Piano Masters"
            genre="Classical"
            year="2021"
            duration="6:12"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
        </Section>

        {/* Latest Releases */}
        <Section title="Latest Releases" subtitle="Newest release from this year" icon={<Clock />}>
          <SongCard
            title="New Beats"
            artist="DJ Fresh"
            genre="Electronic"
            year="2024"
            duration="3:50"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Summer Breeze"
            artist="Ocean Vibes"
            genre="Pop"
            year="2024"
            duration="3:40"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="New Beats"
            artist="DJ Fresh"
            genre="Electronic"
            year="2024"
            duration="3:50"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Summer Breeze"
            artist="Ocean Vibes"
            genre="Pop"
            year="2024"
            duration="3:40"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="New Beats"
            artist="DJ Fresh"
            genre="Electronic"
            year="2024"
            duration="3:50"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Summer Breeze"
            artist="Ocean Vibes"
            genre="Pop"
            year="2024"
            duration="3:40"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="New Beats"
            artist="DJ Fresh"
            genre="Electronic"
            year="2024"
            duration="3:50"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
          <SongCard
            title="Summer Breeze"
            artist="Ocean Vibes"
            genre="Pop"
            year="2024"
            duration="3:40"
            image="https://images.macrumors.com/t/MKlRm9rIBpfcGnjTpf6ZxgpFTUg=/1600x1200/smart/article-new/2018/05/apple-music-note.jpg"
          />
        </Section>
      </main>
    </div>
  );
}

export default Index;
