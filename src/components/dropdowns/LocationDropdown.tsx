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
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

export default function LocationDropdown({ location, setLocation }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-muted-foreground">Position:</span>
      <Select value={location} onValueChange={(value) => setLocation(value)}>
        <SelectTrigger className="w-full xs:w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="z-1001">
          {location === "custom" && (
            <SelectItem value="custom">Custom</SelectItem>
          )}
          {locations.map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

const locations = [
  "Bangkok",
  "Tokyo",
  "Seoul",
  "Dubai",
  "Manila",
  "London",
  "New York",
  "Paris",
  "Berlin",
  "Madrid",
  "Rome",
  "Lisbon",
];
