Next.js Render Showcase: Explorando Padrões de Renderização
Link para o projeto no ar: https://next-render-showcase.vercel.app

📋 Sobre o Projeto
Este projeto é um laboratório prático para explorar e demonstrar os diferentes padrões de renderização disponíveis no Next.js. Utilizando a popular PokéAPI e uma API de cotação de Bitcoin, a aplicação foi estruturada para que cada página utilize a estratégia de renderização mais adequada ao seu propósito, evidenciando as vantagens e os casos de uso de cada abordagem.

O objetivo principal é demonstrar de forma clara como as decisões de arquitetura de renderização impactam diretamente a performance, o SEO, a atualidade dos dados e a experiência do usuário.

✨ Demonstração das Estratégias de Renderização
Cada página do projeto foi construída para exemplificar um conceito-chave, usando dados reais de APIs externas:

📄 Página /ssg (Pokédex Estática)
Estratégia: SSG (Static Site Generation)

Descrição: Esta página exibe uma lista de Pokémon. Como essa lista raramente muda, ela é gerada uma única vez durante o build do projeto.

Vantagens Demonstradas: Performance máxima com carregamento instantâneo, ideal para conteúdos que não precisam de atualização constante, como blogs, documentações ou páginas de marketing.

🎲 Página /ssr (Pokémon Aleatório)
Estratégia: SSR (Server-Side Rendering)

Descrição: A cada visita, esta página busca e exibe um Pokémon diferente no servidor.

Vantagens Demonstradas: Capacidade de servir conteúdo dinâmico e sempre atualizado a cada requisição. É ideal para feeds, dashboards com dados em tempo real ou páginas personalizadas para o usuário logado.

₿ Página /isr (Cotação de Bitcoin)
Estratégia: ISR (Incremental Static Regeneration)

Descrição: A página exibe a cotação atual do Bitcoin e é configurada para se revalidar a cada 10 segundos.

Vantagens Demonstradas: O equilíbrio perfeito entre performance e dados atualizados. A página é servida estaticamente (super rápida), mas o Next.js regenera a página em segundo plano, garantindo que a informação nunca fique obsoleta. É a melhor escolha para conteúdos que mudam com frequência, mas não a cada segundo, como páginas de notícias, e-commerce ou cotações.

🔍 Página /csr (Busca de Pokémon)
Estratégia: CSR (Client-Side Rendering)

Descrição: Permite ao usuário buscar por um Pokémon de forma interativa. A busca e a renderização dos resultados acontecem inteiramente no navegador.

Vantagens Demonstradas: Ideal para interfaces com alta interatividade, como formulários complexos, painéis de controle e aplicações que se comportam como um software de desktop (SPA), oferecendo uma experiência fluida e sem recarregamento de página.

🛠️ Tecnologias Utilizadas
Framework: Next.js (App Router)

Linguagem: TypeScript

Estilização: Tailwind CSS

APIs Externas:

PokéAPI

CoinDesk Bitcoin Price Index API

⚙️ Como Executar Localmente
Siga os passos abaixo para rodar o projeto em seu ambiente de desenvolvimento:

Clone o repositório:

Bash

git clone https://github.com/mateusfj/next-render-showcase.git
Navegue até a pasta do projeto:

Bash

cd next-render-showcase
Instale as dependências:

Bash

npm install
Inicie o servidor de desenvolvimento:

Bash

npm run dev
Abra seu navegador e acesse http://localhost:3000 para ver o projeto.

📫 Contato
[Seu Nome Completo]

Atualmente em busca de novas oportunidades. Se você se interessou pelo meu trabalho e acredita que minhas habilidades podem contribuir para sua equipe, entre em contato!
