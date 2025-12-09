import { Tarefa } from "./tarefa";

export function ListaTarefas() {
    return (
        <>
            <h1 className="text-xl text-primary">Lista de Tarefas</h1>
            <hr />
            <ul>
                <Tarefa descricao="Estudar Javascript" concluida={true} />
                <Tarefa descricao="Estudar React JS" concluida={true} />
                <Tarefa descricao="Estudar Banco de Dados" concluida={true} />
                <Tarefa descricao="Estudar Next JS" concluida={false} />
            </ul>
        </>
    )
}