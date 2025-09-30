type TarefaProps = {
    descricao: string
    concluida: boolean
}

export function Tarefa(props: TarefaProps) {

    /* if (props.concluida) {
        return <li>{props.descricao} ✅</li>
    } else {
        return <li>{props.descricao} ❌</li>
    } */

    return (
        <li className="p-1 text-blue-500">
            {props.concluida ? <del>{props.descricao} ✅</del> : `${props.descricao} ❌`}
        </li>
    )
}