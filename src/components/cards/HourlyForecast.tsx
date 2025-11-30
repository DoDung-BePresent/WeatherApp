/**
 * Node modules
 */
import { useSuspenseQuery } from "@tanstack/react-query";

/**
 * Components
 */
import Card from "@/components/cards/Card";
import WeatherIcon from "@/components/WeatherIcon";

/**
 * Apis
 */
import { getWeather } from "@/apis";

/**
 * Types
 */
import type { Coords } from "@/types";

type Props = {
  coords: Coords;
};

export default function HourlyForecast({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  });
  return (
    <Card
      title="Hourly Forecast (48 Hours)"
      childrenClassName="flex gap-6 overflow-x-scroll [&::-webkit-scrollbar]:h-1.5 pb-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      {data.hourly.map((hour) => (
        <div
          key={hour.dt}
          className="flex flex-col 2xl:justify-between gap-2 items-center p-2"
        >
          <p className="whitespace-nowrap 2xl:scale-110">
            {new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
          <WeatherIcon className="2xl:size-10" src={hour.weather[0].icon} />
          <p className="2xl:scale-110">{Math.round(hour.temp)}°C</p>
        </div>
      ))}
    </Card>
  );
}
