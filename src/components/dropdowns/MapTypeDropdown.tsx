/**
 * Node modules
 */
import type { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  mapType: string;
  setMapType: Dispatch<SetStateAction<string>>;
};

export default function MapTypeDropdown({ mapType, setMapType }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-muted-foreground">Map Type:</span>
      <Select value={mapType} onValueChange={(value) => setMapType(value)}>
        <SelectTrigger className="w-full xs:w-[180px] capitalize">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent className="z-1001">
          {types.map((city) => (
            <SelectItem key={city} value={city} className="capitalize">
              {city.split("_")[0]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

const types = [
  "clouds_new",
  "precipitation_new",
  "pressure_new",
  "wind_new",
  "temp_new",
];
