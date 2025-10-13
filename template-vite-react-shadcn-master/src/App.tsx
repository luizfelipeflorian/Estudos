import { ThemeProvider } from "./components/theme-provider"

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div>
          <h1 className="text-3xl font-bold text-center m-4 text-primary-foreground">
            Template Projeto Vite -- React/Typescript + TailwindCSS + Shadcn/UI
          </h1>
        </div>
      </ThemeProvider>
    </>
  )
}
