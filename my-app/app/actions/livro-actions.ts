'use server'

export async function salvarLivro(formData: FormData) {
    console.log(`Salvando livro - ${formData.get('titulo')}`)
}