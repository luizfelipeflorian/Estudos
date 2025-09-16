import { Titulo } from "./Titulo"
import { Button } from "./Botao";

/* CONPONENTE APP */
function App() {

  return (
    <>
      <div>
        <Titulo tag='h1' className="text-rose-500">
          Componentes React
        </Titulo>
        <Titulo tag='h2' className="text-blue-500">
          Componentes React
        </Titulo>
        <Titulo tag='h3' className="text-yellow-500">
          Componentes React
        </Titulo>
        <Titulo tag='h2' className="text-orange-500">
          Componentes React
        </Titulo>

        <Button variant="primario">
          Editar
        </Button>
        <Button variant='secundario'>
          Salvar
        </Button>
      </div>
    </>
  )
}

export default App