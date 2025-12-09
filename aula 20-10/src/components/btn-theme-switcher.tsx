/* import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Define qual ícone e qual rótulo (aria-label) serão exibidos
  const isDark = theme === "dark"
  const Icon = isDark ? Moon : Sun
  const nextThemeLabel = isDark ? "light" : "dark"
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      // O rótulo é mais descritivo: "Alternar para o tema claro" ou "escuro"
      aria-label={`Toggle theme (current: ${theme}, click to switch to ${nextThemeLabel})`}
    >
      <Icon className="h-[1.2rem] w-[1.2rem] transition-all" />
    </Button>
  )
} */