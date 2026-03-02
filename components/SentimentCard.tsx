interface Props {
  sentiment: string;
  summary: string;
  highlights: string[];
}

function sentimentColor(sentiment: string) {
  switch (sentiment?.toLowerCase()) {
    case "positive":
      return "bg-green-500";
    case "negative":
      return "bg-red-500";
    default:
      return "bg-yellow-500";
  }
}

export default function SentimentCard({
  sentiment,
  summary,
  highlights,
}: Props) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">

      {/* Sentiment Badge */}
      <div className="flex items-center gap-3">
        <div
          className={`h-4 w-4 rounded-full ${sentimentColor(
            sentiment
          )}`}
        />
        <h2 className="text-2xl font-semibold">
          {sentiment} Audience Sentiment
        </h2>
      </div>

      {/* Summary */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          Audience Review Summary
        </h3>
        <p className="text-neutral-300">{summary}</p>
      </div>

      {/* Highlights */}
      <div>
        <h3 className="font-semibold text-lg mb-2">
          Highlights
        </h3>

        <ul className="flex flex-col gap-2">
          {highlights?.map((point, index) => (
            <li
              key={index}
              className="bg-neutral-800 rounded-md px-3 py-2"
            >
              ✔ {point}
            </li>
          ))}
        </ul>
      </div>
    </ul>
  );
}