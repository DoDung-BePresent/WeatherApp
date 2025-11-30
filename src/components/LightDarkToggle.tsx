import { MoonIcon, SunIcon } from "lucide-react";

import { useTheme } from "@/components/ThemeProvider";
import { Toggle } from "@/components/ui/toggle";

export default function LightDarkToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Toggle onClick={toggleTheme}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Toggle>
  );
}
