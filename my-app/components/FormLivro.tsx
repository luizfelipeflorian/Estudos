"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { StatusLivro } from "@/lib/generated/prisma/enums"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { salvarLivro } from "@/app/actions/livro-actions"

export default function FormLivro({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent>
                    <form action={salvarLivro} className=" grid p-6 md:grid-cols-2">
                        <div className="p-6 md:p-8">
                            <FieldGroup>
                                <div className="flex flex-col items-center gap-2 text-center">
                                    <h1 className="text-2xl font-bold">Cadastre um novo Livro</h1>
                                </div>

                                <Field>
                                    <FieldLabel htmlFor="titulo">Titulo</FieldLabel>
                                    <Input
                                        id="titulo"
                                        type="text"
                                        name="titulo"
                                        placeholder="Escreva aqui o título do livro!"
                                        required
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor="autor">Autor</FieldLabel>
                                    <Input
                                        id="autor"
                                        type="text"
                                        name="autor"
                                        placeholder="Escreva aqui o nome do autor!"
                                        required
                                    />
                                </Field>

                                <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                                    Selecione o status
                                </FieldSeparator>

                                <Field>
                                    <RadioGroup
                                        className="grid grid-cols-3 gap-4"
                                        name="status"
                                    >
                                        <div className="flex items-center gap-3">
                                            <RadioGroupItem value="LIDO" id="r1" />
                                            <Label htmlFor="r1">Lido</Label>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <RadioGroupItem value="LENDO" id="r2" />
                                            <Label htmlFor="r2">Lendo</Label>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <RadioGroupItem value="QUERO_LER" id="r3" />
                                            <Label htmlFor="r3">Quero ler</Label>
                                        </div>
                                    </RadioGroup>
                                </Field>
                                <Button type="submit">
                                    Criar livro
                                </Button>
                            </FieldGroup>
                        </div>

                        <div className="bg-muted relative hidden md:block">
                            <p> selecione a capa do livro</p>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}