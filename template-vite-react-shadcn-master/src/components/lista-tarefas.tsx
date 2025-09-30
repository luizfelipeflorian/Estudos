import { Tarefa } from "./tarefa";

export function ListaTarefas() {

    return (
        <>
            <>
                <h1 className="text-xl text-primary">Lista de tarefas</h1>
                <hr />
                <ul>
                    <Tarefa descricao="Estudar JavaScript" concluida={true} />
                    <Tarefa descricao="Estudar React js" concluida={true} />
                    <Tarefa descricao="Estudar Banco de dados" concluida={false} />
                    <Tarefa descricao="Estudar nextjs" concluida={false} />
                </ul>
            </>
        </>
    )
}