# InstaRadar - Instagram Analytics Platform

## Setup

1. Extraia o ZIP na pasta desejada
2. Copie o conteúdo de cada arquivo do Orchids para os arquivos correspondentes
3. Execute `npm install` ou `bun install`
4. Execute `npm run dev` ou `bun dev`

## Estrutura

```
src/
├── app/                    # Páginas (App Router)
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── instagram-tracker/ # Tracker pages
│   ├── instagram-viewer/  # Viewer pages
│   ├── download-from-instagram/ # Download pages
│   ├── dashboard/         # User dashboard
│   └── ...
├── components/
│   ├── ui/               # Shadcn/UI components
│   ├── Navbar.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   └── ...               # Custom components
├── lib/
│   ├── utils.ts          # Utility functions
│   └── auth-context.tsx  # Auth context
└── hooks/                # Custom hooks
```

## Arquivos para copiar do Orchids

Copie o conteúdo de cada arquivo correspondente do Orchids.
Os arquivos estão vazios/com placeholder prontos para receber o código.

## Notas

- O favicon.ico precisa ser substituído por um ícone real
- Ajuste as variáveis de ambiente conforme necessário
- O projeto usa Tailwind CSS v4 e Next.js 15
