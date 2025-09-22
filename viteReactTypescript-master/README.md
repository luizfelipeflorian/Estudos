# Stack Tecnológica do Projeto

Este documento descreve a stack tecnológica utilizada no projeto **template-react-vite**, um template para aplicações React modernas.

## Visão Geral

Este projeto é um template para desenvolvimento de aplicações web utilizando React com Vite como bundler, TypeScript para tipagem estática e Tailwind CSS para estilização. Ele inclui configurações para linting com ESLint e suporte completo para desenvolvimento moderno.

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
- **Integração**: Arquivos `.tsx` para componentes React, configurações em `tsconfig.json`, `tsconfig.app.json` e `tsconfig.node.json`.

### Tailwind CSS

- **Versão**: 4.1.13
- **Descrição**: Framework CSS utilitário para estilização rápida.
- **Por que usar**: Permite criar designs responsivos e consistentes com classes utilitárias, reduzindo a necessidade de CSS customizado.
- **Integração**: Integrado via `@tailwindcss/vite`, permitindo uso direto em componentes React.

### ESLint

- **Versão**: 9.33.0
- **Descrição**: Ferramenta de linting para JavaScript/TypeScript.
- **Por que usar**: Garante consistência no código, detecta erros potenciais e segue boas práticas.
- **Integração**: Configurado em `eslint.config.js`, com plugins para React hooks e refresh.

## Estrutura do Projeto

```
template-react-vite/
├── public/                 # Arquivos estáticos públicos
├── src/                    # Código fonte
│   ├── assets/            # Recursos (imagens, ícones, etc.)
│   ├── App.tsx            # Componente principal da aplicação
│   ├── main.tsx           # Ponto de entrada da aplicação
│   ├── index.css          # Estilos globais
│   └── vite-env.d.ts      # Tipos para Vite
├── eslint.config.js       # Configuração do ESLint
├── tsconfig*.json         # Configurações do TypeScript
├── vite.config.ts         # Configuração do Vite
├── package.json           # Dependências e scripts
└── index.html             # HTML base
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
- **Qualidade de Código**: ESLint mantém consistência
- **Moderno**: Usa versões recentes das tecnologias

## Próximos Passos

Para começar a desenvolver:

1. Instale as dependências: `npm install`
2. Inicie o servidor: `npm run dev`
3. Edite os componentes em `src/`
4. Use Tailwind classes para estilização
5. Execute `npm run lint` para verificar o código

Esta stack é ideal para projetos React modernos que priorizam performance, manutenibilidade e experiência de desenvolvimento.
