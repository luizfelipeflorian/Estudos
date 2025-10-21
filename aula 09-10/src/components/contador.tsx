import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";


export function Contador() {
    console.log("componente renderizou...")
    const [contadorState, setContatorState] = useState(0)

    function handleIncrement() {

        setContatorState(contadorState + 1)
    }
    function handleDecrement() {

        setContatorState(contadorState - 1)
    }

    const disabledIncrement = contadorState == 10? true : false
    const disabledDecrement = contadorState == 0? true : false

    return (
        <div className="flex justify-center flex-col gap-4">
            <h1 className="text-2xl">Contador</h1>
            <div className="flex gap-6 items-center">
                <Button disabled = {disabledDecrement} onClick={handleDecrement}><MinusIcon /></Button>
                <div className="text-2sxl">{contadorState}</div>
                <Button disabled = {disabledIncrement} onClick={handleIncrement}><PlusIcon /></Button>
            </div>
        </div>
    )
}