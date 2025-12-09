import { Minus, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Contador() {
    console.log('componente react renderizou...')
    const [contador, setContador] = useState(0)  //primeira variavel seta o valor de estado e a segunda é a funçao para atualizar o estado  //valor inicial do estado

    function handleIncrement() {
            return setContador(contador + 1)   
    }

    function handleDecrement() {
            return setContador(contador - 1)
    }

    const disableIncrement = contador == 10 ? true : false
    const disableDecrement = contador == 0 ? true : false

    return (
        <div className="flex justify-center flex-col gap-4">
            <h1 className="text-2xl">Contador</h1>
            <div className="flex gap-3">
                <Button disabled={disableDecrement} onClick={handleDecrement}><Minus /></Button>
                <div className="text-2xl"> {contador} </div>
                <Button disabled={disableIncrement} onClick={handleIncrement}><PlusIcon /></Button>
            </div>
        </div>
    )
}

