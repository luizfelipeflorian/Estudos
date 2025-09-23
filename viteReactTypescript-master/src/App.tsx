import { Button } from "./components/ui/button";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle";
import { LikeButton } from "./components/like-button";



export function App() {
  return (
    <><ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        <h1 className="text-3xl font-bold text-center m-4 text-indigo-600">
          Template Projeto Vite -- React/Typescript + TailwindCSS
        </h1>
        <ModeToggle></ModeToggle>
        <Button>Salvar</Button>
        <Button variant={"outline"}>Excluir</Button>
        <LikeButton></LikeButton>
      </div>
    </ThemeProvider>
    </>
  )
}
