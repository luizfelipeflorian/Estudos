type ButtonPops = {
    variant: "primario" | "secundario",
    children: React.ReactNode,
}

export function Button(props: ButtonPops) {
    console.log(props)
    const variant = props.variant
    let styles = ""
    if (variant == "primario") {
        styles = "bg-indigo-500 text-white"
    } else if (variant == "secundario") {
        styles = "bg-green-500 text-white"
    }

    return (
        <>
            <button className={`px-4 py-3 ${styles} cursor-pointer m-1 rounded-2xl`}>
                {props.children}
            </button>
        </>
    )
}