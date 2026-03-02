import { getMovieById } from "@/lib/omdb";


export default async function Home() {
  const movie = await getMovieById("tt0133093");
  
  return (
    <div className="p-10">
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <img src={movie.Poster} width={200} />
    </div>
  );
}