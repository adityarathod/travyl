import classNames from "classnames";

interface FlightCardProps {
  details: any;
  selected: boolean;
  onClick?: () => unknown;
}

export default function FlightCard({
  details,
  selected,
  onClick,
}: FlightCardProps) {
  const start = new Date(details.departureTime);
  const end = new Date(details.arrivalTime);

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
        "w-full",
        "cursor-pointer",
        "flex flex-row items-center",
        selected && "bg-sky",
        selected && "text-white"
      )}
      onClick={onClick}
    >
      <img src="/aa-logo.png" className="w-10 aspect-square mr-4" />
      <div>
        <h3 className="font-bold text-2xl">{details.flightNumber}</h3>
        <h4 className="text-xl">
          {details.duration.locale} &bull;{" "}
          {start.getHours().toString().padStart(2, "0")}:
          {start.getMinutes().toString().padStart(2, "0")} -{" "}
          {end.getHours().toString().padStart(2, "0")}:
          {end.getMinutes().toString().padStart(2, "0")}
        </h4>
        <h5 className="text-lg text-green-600">${details.price}</h5>
      </div>
    </button>
  );
}
