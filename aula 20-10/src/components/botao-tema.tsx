import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

export function BotaoTema() {
  const { theme, setTheme } = useTheme();

  function handleTema() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button onClick={handleTema} size={"icon"}>
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
