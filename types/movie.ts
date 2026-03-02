export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Plot: string;
  imdbRating: string;
  Actors: string;
}

export interface OMDbResponse extends Movie {
  Response: "True" | "False";
  Error?: string;
}