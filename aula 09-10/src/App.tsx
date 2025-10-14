import { AppSidebar } from "./components/app-sidebar"
import { Contador } from "./components/contador"
/* import { ListaContas } from "./components/lista-contas"
 *//* import { ListaTarefas } from "./components/lista-tarefas" */
import { Separator } from "./components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar"
/* import { contas } from "./dados"
 */
export function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </div>
        </header>
        <main className="p-2">
          {/*           <ListaTarefas/> */}
          {/* <ListaContas contas={contas} /> */}
          <Contador />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

