# hlPromo — Landing Page

Projeto: landing page para HL Casa da Construção — scaffold criado com Vite + React (JavaScript) + Tailwind CSS.

Rápido para rodar localmente:

```bash
npm install
npm run dev
```

Pontos importantes:
- Atualize o número do WhatsApp em `src/App.jsx` (prop para `WhatsAppButton`) ou diretamente em `src/components/Products.jsx` se quiser outro número para pedidos.
- Ajuste o iframe do Google Maps em `src/components/Map.jsx` para apontar a localização real da loja.
- O projeto já inclui animações de scroll via AOS e estilos base em `src/index.css`.

Deploy sugerido: Vercel ou Netlify (build com `npm run build`).

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
