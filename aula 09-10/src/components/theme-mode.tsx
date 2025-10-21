import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";


export function ThemeBotao() {
    const [theme, setTheme] = useState('dark')

    function handleTheme() {
        const mudarTema = theme == 'dark' ? 'light' : 'dark'
        setTheme(mudarTema)
    }

    return (
        <div className="flex justify-center flex-col gap-4">
            <h1 className="text-2xl">Contador</h1>
            <div className="flex gap-6 items-center">
                <Button size={"icon"} onClick={handleTheme} >{theme == 'dark' ? <MoonIcon /> : <SunIcon />}</Button>
                <div className="text-2sxl"></div>
            </div>
        </div>
    )
}