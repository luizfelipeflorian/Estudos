# Criação de Projeto Vite

## Passo 1 (No terminal)

- npm create vite@latest .

- Package name: (Só prescionar tab e enter)

- Select a framework:
│  Vanilla
*(Por enquanto)*

- Select a variant:
│  JavaScript

- npm install

- npm run dev

## passo 2 (Nos arquivos)

### Exclua

- src/counter.js

- src/javascript.svg

### Crie

- vite.config.js (Na raiz do projeto)

### Conteudo

---

vite.config.js

<pre>
"import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})"
</pre>
---

main.js

<pre>
import './style.css'
</pre>

## passo 3 (Novo terminal)

- npm install tailwindcss @tailwindcss/vite

### Conteudo

---

style.css

<pre>
@import "tailwindcss";
</pre>
