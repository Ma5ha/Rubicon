export interface moviesRsponse {
    page: number;
    results?: (moviesRsponseResultsEntity)[] | null;
    total_results: number;
    total_pages: number;
}
export interface moviesRsponseResultsEntity {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids?: (number)[] | null;
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export interface moviesSerach {
    page: number;
    results?: (movieResultsEntity)[] | null;
    total_results: number;
    total_pages: number;
}
export interface movieResultsEntity {
    poster_path?: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids?: (number | null)[] | null;
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path?: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}



export interface movieDetailsResponse {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: BelongsToCollection;
    budget: number;
    genres?: (GenresEntity)[] | null;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies?: (null)[] | null;
    production_countries?: (ProductionCountriesEntity)[] | null;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages?: (SpokenLanguagesEntity)[] | null;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    videos: Videos;
}
export interface BelongsToCollection {
    id: number;
    name: string;
    poster_path?: null;
    backdrop_path?: null;
}
export interface GenresEntity {
    id: number;
    name: string;
}
export interface ProductionCountriesEntity {
    iso_3166_1: string;
    name: string;
}
export interface SpokenLanguagesEntity {
    iso_639_1: string;
    name: string;
}
export interface Videos {
    results?: (ResultsEntity)[] | null;
}
export interface ResultsEntity {
    id: number | string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
}
