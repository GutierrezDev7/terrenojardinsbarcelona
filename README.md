# Jardins Barcelona

Landing page do lote exclusivo no Condomínio Horizontal Jardins Barcelona, construída com Next.js, React, TypeScript e Tailwind CSS. A experiência visual combina rolagem suave com Lenis, animações GSAP e Motion, e uma paisagem procedimental em Three.js, React Three Fiber e shader GLSL.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Verificação e produção

```bash
npm run lint
npm run build
npm start
```

O Next.js carrega variáveis de ambiente de arquivos `.env*` automaticamente. Consulte `.env.example` para os nomes de variáveis usados pelo projeto.

Antes de publicar, configure `NEXT_PUBLIC_SITE_URL` com o domínio real para habilitar a URL canônica, as imagens sociais e o sitemap. Configure também `NEXT_PUBLIC_WHATSAPP_NUMBER` com o número real do vendedor, em formato internacional e somente com dígitos. Sem o domínio, o sitemap fica vazio; sem o telefone, os links do WhatsApp não direcionam a um vendedor específico.
