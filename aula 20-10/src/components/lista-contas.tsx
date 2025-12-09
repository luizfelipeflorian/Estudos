import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import type { Conta } from "@/dados"
import { Badge } from "./ui/badge"
import { BadgeCheckIcon, CircleX } from "lucide-react"

type ListaContasProps = {
    contas: Conta[]
}

export function ListaContas(props: ListaContasProps) {
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Descrição</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        props.contas.map((conta) => {
                            return (
                                < TableRow key={conta.id}>
                                    <TableCell className="font-medium">{conta.descricao}</TableCell>
                                    <TableCell>R$ {conta.valor.toFixed(2)}</TableCell>
                                    <TableCell>{conta.pago ?  <Badge variant={"secondary"} className="bg-blue-500 text-white dark:bg-blue-600"> <BadgeCheckIcon/>Pago </Badge> :<Badge variant={"destructive"}> <CircleX />Pendente</Badge>}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table >
        </>
    )
}