import axios from "axios";
import type{ SongQuery, SongResponse} from "../interface/song";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function fetchSongs(query: SongQuery): Promise<SongResponse> {
    query.page = query.page || 1;
    query.page_size = query.page_size || 10;
    query.song = query.song || '';
    query.singer = query.singer || '';
    query.lyrics = query.lyrics || '';

    const response = await axios.get(`${BASE_URL}/songs`, { params: query });
    return response.data;

}