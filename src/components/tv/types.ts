export interface tvSearchResponse {
    page: number;
    results: tvShow[]
    total_results: number;
    total_pages: number;
}

export interface tvShow {
    poster_path: string | null;
    popularity: number;
    id: number;
    backdrop_path: string | null;
    vote_average: number;
    overview: string;
    first_air_date: string;
    origin_country: string[];
    genre_ids: number[];
    original_language: string;
    vote_count: number;
    name: string;
    original_name: string;
}


export interface tvDetails {
    backdrop_path: string;
    created_by?: (CreatedByEntity)[] | null;
    episode_run_time?: (number)[] | null;
    first_air_date: string;
    genres?: (GenresEntity)[] | null;
    homepage: string;
    id: number;
    in_production: boolean;
    languages?: (string)[] | null;
    last_air_date: string;
    last_episode_to_air: LastEpisodeToAir;
    name: string;
    next_episode_to_air?: null;
    networks?: (NetworksEntity)[] | null;
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country?: (string)[] | null;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies?: (ProductionCompaniesEntity)[] | null;
    seasons?: (SeasonsEntity)[] | null;
    status: string;
    type: string;
    vote_average: number;
    vote_count: number;
    videos: Videos;
}
export interface CreatedByEntity {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path?: null;
}
export interface GenresEntity {
    id: number;
    name: string;
}
export interface LastEpisodeToAir {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
}
export interface NetworksEntity {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}
export interface ProductionCompaniesEntity {
    id: number;
    logo_path?: null;
    name: string;
    origin_country: string;
}
export interface SeasonsEntity {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}
export interface Videos {
    results?: (ResultsEntity)[] | null;
}
export interface ResultsEntity {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
}
