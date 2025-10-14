import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";


export function Contador() {
    console.log("componente renderizou...")
    const [contadorState, setContatorState] = useState(0)
    let contador = 0;
    function handleClick() {
        contador++
        setContatorState(contadorState + 1)
        console.log(contadorState)
    }
    return (
        <div className="flex justify-center flex-col gap-4">
            <h1 className="text-2xl">Contador</h1>
            <div className="flex gap-6 items-center">
                <Button onClick={handleClick}><PlusIcon /></Button>
                <div className="text-2sxl">{contadorState}</div>
            </div>
        </div>
    )
}