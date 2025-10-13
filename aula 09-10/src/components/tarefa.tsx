type TarefaProps = {
    descricao: string
    concluida: boolean
}

export function Tarefa(props: TarefaProps) {
    return (
        <>
            <li className="p-1">
                {props.concluida ? <del> {`${props.descricao} ✅`} </del>: `${props.descricao}❌`}
            </li>
        </>
    )

}