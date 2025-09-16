export function Titulo(props) {
    if (props.tag === 'h1') {
        return (
            <h1 className={`text-5xl ${props.className}`}>{props.children}</h1>
        )
    }

    if (props.tag === 'h2') {
        return (
            <h1 className={`text-4xl ${props.className}`}>{props.children}</h1>
        )
    }

    if (props.tag === 'h3') {
        return (
            <h1 className={`text-3xl ${props.className}`}>{props.children}</h1>
        )
    }
}