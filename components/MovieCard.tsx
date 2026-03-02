import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface Props {
  movie: any;
}

export default function MovieCard({ movie }: Props) {
  return (
      <div className="max-w-4xl w-full bg-neutral-900 rounded-xl p-6 shadow-lg flex flex-col md:flex-row gap-6">
      {/* Poster */}
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full md:w-64 rounded-lg object-cover"
      />

      {/* Details */}
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold">
          {movie.Title} ({movie.Year})
        </h2>

        <p className="text-sm text-neutral-400">
          ⭐ IMDb Rating: {movie.imdbRating}
        </p>

        <p>
          <span className="font-semibold">Cast:</span>{" "}
          {movie.Actors}
        </p>

        <p className="text-neutral-300">
          {movie.Plot}
        </p>
      </div>
    </div>

  );
}