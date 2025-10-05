export interface SongQuery {
    page?: number
    page_size?: number;
    song?: string;
    singer?: string;
    lyrics?: string;
    popular?: boolean;
}
export interface Song {
    song: string;
    singer: string;
    lyrics: string;
    views: number;
    chords_image: string;
    song_transcriber: string;
}
export type TabKey = "lyrics" | "chords";

export interface SongResponse {
  count: number;
  songs: Song[];
  is_next: boolean;
}

