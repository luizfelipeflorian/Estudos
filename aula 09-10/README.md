# Stack Tecnológica do Projeto

Este documento descreve a stack tecnológica utilizada no projeto **template-vite-react-shadcn**, um template para aplicações React modernas com componentes UI reutilizáveis.

## Visão Geral

Este projeto é um template para desenvolvimento de aplicações web utilizando React com Vite como bundler, TypeScript para tipagem estática, Tailwind CSS para estilização e Shadcn/UI para componentes UI reutilizáveis. Ele inclui configurações para linting com ESLint, suporte completo para desenvolvimento moderno e um sistema de design consistente.

## Tecnologias Principais

### React

- **Versão**: 19.1.1
- **Descrição**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Por que usar**: React é uma das bibliotecas mais populares para desenvolvimento de SPAs (Single Page Applications), oferecendo componentes reutilizáveis e um ecossistema vasto.
- **Integração**: Usado como base para a construção da interface, com hooks e JSX.

### Vite

- **Versão**: 7.1.2
- **Descrição**: Ferramenta de build rápida para projetos web modernos.
- **Por que usar**: Vite oferece desenvolvimento rápido com hot module replacement (HMR), build otimizado e suporte nativo para TypeScript e JSX.
- **Integração**: Configurado via `vite.config.ts`, com plugin React para transformação de JSX.

### TypeScript

- **Versão**: 5.8.3
- **Descrição**: Superset do JavaScript que adiciona tipagem estática.
- **Por que usar**: TypeScript ajuda a detectar erros em tempo de desenvolvimento, melhora a manutenibilidade e oferece melhor suporte em IDEs.
- **Integração**: Arquivos `.tsx` para componentes React, configurações em `tsconfig.json`, `tsconfig.app.json` e `tsconfig.node.json` com aliases de caminho (`@/*`).

### Tailwind CSS

- **Versão**: 4.1.13
- **Descrição**: Framework CSS utilitário para estilização rápida.
- **Por que usar**: Permite criar designs responsivos e consistentes com classes utilitárias, reduzindo a necessidade de CSS customizado.
- **Integração**: Integrado via `@tailwindcss/vite`, permitindo uso direto em componentes React.

### Shadcn/UI

- **Versão**: Configurado via components.json
- **Descrição**: Biblioteca de componentes UI reutilizáveis e acessíveis para React.
- **Por que usar**: Fornece componentes pré-construídos seguindo as melhores práticas de design, acelera o desenvolvimento de interfaces e mantém consistência visual.
- **Integração**: Configurado com `components.json`, utiliza `class-variance-authority`, `clsx` e `tailwind-merge` para gerenciamento de classes CSS. Inclui ícones via `lucide-react` e suporte a temas dark/light.

### ESLint

- **Versão**: 9.33.0
- **Descrição**: Ferramenta de linting para JavaScript/TypeScript.
- **Por que usar**: Garante consistência no código, detecta erros potenciais e segue boas práticas.
- **Integração**: Configurado em `eslint.config.js`, com plugins para React hooks e refresh.

## Estrutura do Projeto

```
template-vite-react-shadcn/
├── components.json           # Configuração do Shadcn/UI
├── public/                   # Arquivos estáticos públicos
├── src/
│   ├── components/           # Componentes React reutilizáveis
│   ├── lib/
│   │   └── utils.ts          # Funções utilitárias (cn para combinar classes)
│   ├── App.tsx               # Componente principal da aplicação
│   ├── main.tsx              # Ponto de entrada da aplicação
│   ├── index.css             # Estilos globais com variáveis CSS
│   └── vite-env.d.ts         # Tipos para Vite
├── eslint.config.js          # Configuração do ESLint
├── tsconfig*.json            # Configurações do TypeScript com aliases
├── vite.config.ts            # Configuração do Vite com aliases
├── package.json              # Dependências e scripts
└── index.html                # HTML base
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento com Vite
- `npm run build`: Compila o projeto para produção
- `npm run lint`: Executa o linting com ESLint
- `npm run preview`: Visualiza o build de produção

## Benefícios da Stack

- **Desenvolvimento Rápido**: Vite oferece HMR e build rápido
- **Tipagem Forte**: TypeScript reduz bugs e melhora DX
- **Estilização Eficiente**: Tailwind CSS acelera o desenvolvimento de UI
- **Componentes Reutilizáveis**: Shadcn/UI fornece componentes pré-construídos e acessíveis
- **Sistema de Design Consistente**: Variáveis CSS e temas dark/light integrados
- **Qualidade de Código**: ESLint mantém consistência
- **Moderno**: Usa versões recentes das tecnologias

## Próximos Passos

Para começar a desenvolver:

1. Instale as dependências: `npm install`
2. Inicie o servidor de desenvolvimento: `npm run dev`
3. Adicione componentes Shadcn/UI: `npx shadcn@latest add button` (exemplo)
4. Edite os componentes em `src/components/` ou crie novos
5. Use a função `cn()` de `src/lib/utils.ts` para combinar classes Tailwind
6. Configure temas dark/light usando as variáveis CSS em `src/index.css`
7. Execute `npm run lint` para verificar o código

Para adicionar novos componentes Shadcn/UI:

- Execute `npx shadcn@latest add <component-name>` para instalar componentes
- Componentes são salvos em `src/components/ui/`
- Use ícones do Lucide React importando de `lucide-react`

Esta stack é ideal para projetos React modernos que priorizam performance, manutenibilidade, consistência visual e experiência de desenvolvimento.
