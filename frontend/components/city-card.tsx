import { CitySuggestionResponse } from "@/prompts/city-suggestion";
import classNames from "classnames";

interface CityCardProps {
  details: CitySuggestionResponse;
  selected: boolean;
  onClick?: () => unknown;
}

export default function CityCard({
  details,
  selected,
  onClick,
}: CityCardProps) {
  return (
    <button
      className={classNames(
        "mb-4",
        "rounded-lg",
        "shadow-sm",
        "hover:shadow-md",
        "transition-shadow",
        "duration-300",
        "border",
        "mx-auto",
        "mt-0",
        "max-w-md",
        "py-3",
        "px-4",
        "text-left",
        "cursor-pointer",
        "select-none",
        "w-full",
        selected && "bg-sky",
        selected && "text-white"
      )}
      onClick={onClick}
    >
      <h2 className="text-xl font-medium">{details.city}</h2>
      <h3 className="text-lg mb-2">
        {details.airport} • {details.airportCode}
      </h3>
      <p>{details.description}</p>
    </button>
  );
}
