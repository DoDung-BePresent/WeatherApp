/**
 * Node modules
 */
import {
  CircleGaugeIcon,
  CloudIcon,
  MoveUpIcon,
  SunriseIcon,
  SunsetIcon,
  ThermometerSunIcon,
  WindIcon,
} from "lucide-react";
import { useSuspenseQuery } from "@tanstack/react-query";

/**
 * Types
 */
import type { Coords } from "@/types";

/**
 * Apis
 */
import { getWeather } from "@/apis";

/**
 * Components
 */
import Card from "@/components/cards/Card";

type Props = {
  coords: Coords;
};

export default function AdditionalInfo({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  });
  return (
    <Card
      title="Additional Weather Info"
      childrenClassName="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {rows.map(({ label, value, Icon }) => (
        <div className="flex justify-between" key={value}>
          <div className="flex gap-4 text-gray-500">
            <Icon className="size-5.5 text-gray-300" />
            <span>{label}</span>
          </div>
          <span>
            <FormatComponent value={value} number={data.current[value]} />
          </span>
        </div>
      ))}
    </Card>
  );
}

function FormatComponent({ value, number }: { value: string; number: number }) {
  if (value === "sunrise" || value === "sunset")
    return new Date(number * 1000).toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  if (value === "wind_deg")
    return (
      <MoveUpIcon
        className="size-5.5"
        style={{ transform: `rotate(${number}deg)` }}
      />
    );

  return number;
}

const rows = [
  {
    label: "Cloudiness (%)",
    value: "clouds",
    Icon: CloudIcon,
  },
  {
    label: "UV Index",
    value: "uvi",
    Icon: ThermometerSunIcon,
  },
  {
    label: "Wind Direction",
    value: "wind_deg",
    Icon: WindIcon,
  },
  {
    label: "Pressure (hPa)",
    value: "pressure",
    Icon: CircleGaugeIcon,
  },
  {
    label: "Sunrise",
    value: "sunrise",
    Icon: SunriseIcon,
  },
  {
    label: "Sunset",
    value: "sunset",
    Icon: SunsetIcon,
  },
] as const;
