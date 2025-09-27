export interface SongQuery {
    page?: number
    page_size?: number;
    song?: string;
    singer?: string;
    lyrics?: string;
}
export interface Song {
    song: number;
    singer: string;
    lyrics: string;
    chords_image: string;
}

export interface SongResponse {
  count: number;
  songs: Song[];
  is_next: boolean;
}

