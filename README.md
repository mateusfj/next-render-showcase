🚀 Next.js Render Showcase: Explorando Padrões de Renderização
Link para o projeto no ar: https://next-render-showcase.vercel.app

📋 Sobre o Projeto
Este projeto é um laboratório prático para explorar e demonstrar os diferentes padrões de renderização disponíveis no Next.js. Utilizando a popular PokéAPI e uma API de cotação de Bitcoin, a aplicação foi estruturada para que cada página utilize a estratégia de renderização mais adequada ao seu propósito, evidenciando as vantagens, desvantagens e os casos de uso de cada abordagem.

O objetivo principal é demonstrar de forma clara como as decisões de arquitetura de renderização impactam diretamente a performance, o SEO, a atualidade dos dados e a experiência do usuário.

✨ Demonstração das Estratégias de Renderização
Cada página do projeto foi construída para exemplificar um conceito-chave, usando dados reais de APIs externas:

📄 Página /ssg (Pokédex Estática)
Estratégia: SSG (Static Site Generation)

Descrição: Esta página exibe uma lista de Pokémon. Como essa lista raramente muda, ela é gerada uma única vez durante o build do projeto.

Vantagens Demonstradas: Performance máxima com carregamento instantâneo, ideal para conteúdos que não precisam de atualização constante, como blogs, documentações ou páginas de marketing.

🎲 Página /ssr (Pokémon Aleatório)
Estratégia: SSR (Server-Side Rendering)

Descrição: Esta página busca e exibe um Pokémon diferente no servidor a cada visita, gerando o HTML dinamicamente a cada requisição.

💡 O Ponto de Ensino: "Demorou para redirecionar, né?"
A pequena latência que você percebe ao navegar para esta página é intencional e serve como um ponto de ensino crucial.

Ela exemplifica o principal trade-off do SSR: o TTFB (Time to First Byte). Diferente de uma página estática (SSG) ou de uma navegação no cliente (CSR), o servidor precisa executar um trabalho antes de enviar qualquer resposta:

Receber a requisição do seu navegador.

Fazer uma chamada para a API externa (PokéAPI).

Montar o documento HTML com os dados recebidos.

Enviar o HTML completo de volta.

Esse processo, apesar de rápido, não é instantâneo. A "demora" que você sente é o tempo desse processamento no servidor. É o custo que se paga para ter uma página com conteúdo sempre atualizado e totalmente renderizada para SEO.

₿ Página /isr (Cotação de Bitcoin)
Estratégia: ISR (Incremental Static Regeneration)

Descrição: A página exibe a cotação atual do Bitcoin e é configurada para se revalidar a cada 10 segundos.

Vantagens Demonstradas: O equilíbrio perfeito entre performance e dados atualizados. A página é servida estaticamente (super rápida), mas o Next.js regenera a página em segundo plano, garantindo que a informação nunca fique obsoleta. É a melhor escolha para conteúdos que mudam com frequência, mas não a cada segundo, como páginas de notícias, e-commerce ou cotações.

🔍 Página /csr (Busca de Pokémon)
Estratégia: CSR (Client-Side Rendering)

Descrição: Esta página oferece uma experiência de busca interativa, onde toda a lógica de busca e exibição dos Pokémon acontece no lado do cliente (no navegador).

💡 O Ponto de Ensino: Navegação Rápida vs. Carregamento de Conteúdo
Você notará que, ao clicar no link para esta página, a navegação é instantânea, mas os Pokémon demoram um momento para aparecer. Este comportamento é a essência do CSR e foi destacado de propósito.

O processo é o seguinte:

O servidor envia um arquivo HTML mínimo, quase vazio (a "casca" da aplicação).

O navegador renderiza essa casca imediatamente, dando a sensação de velocidade.

O JavaScript (React) é executado, e o hook useEffect dispara uma chamada para a PokéAPI.

Enquanto os dados são buscados, a aplicação exibe um estado de carregamento.

Quando os dados chegam, o React atualiza a página com a lista de Pokémon.

Isso cria um contraste direto com o SSR: no SSR, você espera mais no início mas recebe a página completa. No CSR, a página chega rápido, mas o conteúdo principal chega depois. É o trade-off ideal para painéis de controle e aplicações com alta interatividade.

🛠️ Tecnologias Utilizadas
Framework: Next.js (App Router)

Linguagem: TypeScript

Estilização: Shadcn e Tailwind CSS

APIs Externas:

PokéAPI

CoinDesk Bitcoin Price Index API

⚙️ Como Executar Localmente
Siga os passos abaixo para rodar o projeto em seu ambiente de desenvolvimento:

Clone o repositório:

<pre> ```bash https://github.com/mateusfj/next-render-showcase.git``` </pre>

Navegue até a pasta do projeto:

<pre> ```bash cd next-render-showcase``` </pre>

Instale as dependências:

Bash

<pre> ```bash npm install``` </pre>

Inicie o servidor de desenvolvimento:

Bash

npm run dev
Abra seu navegador e acesse http://localhost:3000 para ver o projeto.

📫 Contato
Mateus França Sousa

Atualmente em busca de novas oportunidades. Se você se interessou pelo meu trabalho e acredita que minhas habilidades podem contribuir para sua equipe, entre em contato!
