import FormLivro from "@/components/FormLivro";


export default function NovoLivroPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <FormLivro />
      </div>
    </div>
  )
}