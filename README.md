        <h1>🚀 Next.js Render Showcase: Explorando Padrões de Renderização</h1>

        <p class="badges">
            <img src="https://img.shields.io/badge/status-concluído-green?style=for-the-badge" alt="Status do Projeto">
            <img src="https://img.shields.io/github/languages/top/[SEU_USUARIO_GITHUB]/[NOME_DO_REPOSITORIO]?style=for-the-badge" alt="Linguagem Principal">
            <img src="https://img.shields.io/github/license/[SEU_USUARIO_GITHUB]/[NOME_DO_REPOSITORIO]?style=for-the-badge" alt="Licença">
        </p>

        <p>
            <img src="[LINK_PARA_UM_GIF_OU_IMAGEM_DO_SEU_PROJETO_AQUI]" alt="Demo do Projeto em Ação">
        </p>

        <blockquote>
            <p><strong>Link para o projeto no ar:</strong> <a href="https://next-render-showcase.vercel.app" target="_blank" rel="noopener noreferrer">https://next-render-showcase.vercel.app</a></p>
        </blockquote>

        <h2>📋 Sobre o Projeto</h2>
        <p>
            Este projeto é um <strong>laboratório prático</strong> para explorar e demonstrar os diferentes padrões de renderização disponíveis no <strong>Next.js</strong>. Utilizando a popular <strong>PokéAPI</strong> e uma API de cotação de <strong>Bitcoin</strong>, a aplicação foi estruturada para que cada página utilize a estratégia de renderização mais adequada ao seu propósito, evidenciando as vantagens, desvantagens e os casos de uso de cada abordagem.
        </p>
        <p>
            O objetivo principal é demonstrar de forma clara como as decisões de arquitetura de renderização impactam diretamente a <strong>performance, o SEO, a atualidade dos dados e a experiência do usuário</strong>.
        </p>

        <h2>✨ Demonstração das Estratégias de Renderização</h2>

        <h3>📄 Página <code>/ssg</code> (Pokédex Estática)</h3>
        <ul>
            <li><strong>Estratégia:</strong> SSG (Static Site Generation)</li>
            <li><strong>Descrição:</strong> Esta página exibe uma lista de Pokémon. Como essa lista raramente muda, ela é gerada <em>uma única vez</em> durante o <code>build</code> do projeto.</li>
            <li><strong>Vantagens Demonstradas:</strong> Performance máxima com carregamento instantâneo, ideal para conteúdos que não precisam de atualização constante, como blogs, documentações ou páginas de marketing.</li>
        </ul>

        <h3>🎲 Página <code>/ssr</code> (Pokémon Aleatório)</h3>
        <ul>
            <li><strong>Estratégia:</strong> SSR (Server-Side Rendering)</li>
            <li><strong>Descrição:</strong> Esta página busca e exibe um Pokémon diferente no servidor a cada visita, gerando o HTML dinamicamente <em>a cada requisição</em>.</li>
        </ul>
        <blockquote class="teaching-point">
            <h4>💡 O Ponto de Ensino: "Demorou para redirecionar, né?"</h4>
            <p>A pequena latência que você percebe ao navegar para esta página é <strong>intencional e serve como um ponto de ensino crucial</strong>.</p>
            <p>Ela exemplifica o principal trade-off do SSR: o <strong>TTFB (Time to First Byte)</strong>. Diferente de uma página estática (SSG) ou de uma navegação no cliente (CSR), o servidor precisa executar um trabalho antes de enviar qualquer resposta:</p>
            <ol>
                <li>Receber a requisição do seu navegador.</li>
                <li>Fazer uma chamada para a API externa (PokéAPI).</li>
                <li>Montar o documento HTML com os dados recebidos.</li>
                <li>Enviar o HTML completo de volta.</li>
            </ol>
            <p>Esse processo, apesar de rápido, não é instantâneo. A "demora" que você sente é o tempo desse processamento no servidor. É o custo que se paga para ter uma página com conteúdo sempre atualizado e totalmente renderizada para SEO.</p>
        </blockquote>

        <h3>₿ Página <code>/isr</code> (Cotação de Bitcoin)</h3>
        <ul>
            <li><strong>Estratégia:</strong> ISR (Incremental Static Regeneration)</li>
            <li><strong>Descrição:</strong> A página exibe a cotação atual do Bitcoin e é configurada para se <strong>revalidar a cada 10 segundos</strong>.</li>
            <li><strong>Vantagens Demonstradas:</strong> O equilíbrio perfeito entre performance e dados atualizados. A página é servida estaticamente (super rápida), mas o Next.js regenera a página em segundo plano, garantindo que a informação nunca fique obsoleta. É a melhor escolha para conteúdos que mudam com frequência, mas não a cada segundo, como páginas de notícias, e-commerce ou cotações.</li>
        </ul>

        <h3>🔍 Página <code>/csr</code> (Busca de Pokémon)</h3>
        <ul>
            <li><strong>Estratégia:</strong> CSR (Client-Side Rendering)</li>
            <li><strong>Descrição:</strong> Esta página oferece uma experiência de busca interativa, onde toda a lógica de busca e exibição dos Pokémon acontece no lado do cliente (no navegador).</li>
        </ul>
        <blockquote class="teaching-point">
            <h4>💡 O Ponto de Ensino: Navegação Rápida vs. Carregamento de Conteúdo</h4>
            <p>Você notará que, ao clicar no link para esta página, a <strong>navegação é instantânea</strong>, mas os <strong>Pokémon demoram um momento para aparecer</strong>. Este comportamento é a essência do CSR e foi destacado de propósito.</p>
            <p>O processo é o seguinte:</p>
            <ol>
                <li>O servidor envia um arquivo HTML mínimo, quase vazio (a "casca" da aplicação).</li>
                <li>O navegador renderiza essa casca imediatamente, dando a sensação de velocidade.</li>
                <li>O JavaScript (React) é executado, e o hook <code>useEffect</code> dispara uma chamada para a PokéAPI.</li>
                <li>Enquanto os dados são buscados, a aplicação exibe um estado de carregamento.</li>
                <li>Quando os dados chegam, o React atualiza a página com a lista de Pokémon.</li>
            </ol>
            <p>Isso cria um contraste direto com o SSR: no SSR, você espera mais no início mas recebe a página completa. No CSR, a página chega rápido, mas o conteúdo principal chega depois. É o trade-off ideal para painéis de controle e aplicações com alta interatividade.</p>
        </blockquote>

        <h2>🛠️ Tecnologias Utilizadas</h2>
        <ul>
            <li><strong>Framework:</strong> <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> (App Router)</li>
            <li><strong>Linguagem:</strong> <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a></li>
            <li><strong>Estilização:</strong> <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a></li>
            <li><strong>APIs Externas:</strong>
                <ul>
                    <li><a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></li>
                    <li><a href="https://www.coindesk.com/price/bitcoin" target="_blank" rel="noopener noreferrer">CoinDesk Bitcoin Price Index API</a></li>
                </ul>
            </li>
        </ul>

        <h2>⚙️ Como Executar Localmente</h2>
        <p>Siga os passos abaixo para rodar o projeto em seu ambiente de desenvolvimento:</p>
        <ol>
            <li><strong>Clone o repositório:</strong>
                <pre><code>git clone https://github.com/[SEU_USUARIO_GITHUB]/[NOME_DO_REPOSITORIO].git</code></pre>
            </li>
            <li><strong>Navegue até a pasta do projeto:</strong>
                <pre><code>cd [NOME_DO_REPOSITORIO]</code></pre>
            </li>
            <li><strong>Instale as dependências:</strong>
                <pre><code>npm install</code></pre>
            </li>
            <li><strong>Inicie o servidor de desenvolvimento:</strong>
                <pre><code>npm run dev</code></pre>
            </li>
            <li><strong>Abra seu navegador</strong> e acesse <a href="http://localhost:3000">http://localhost:3000</a> para ver o projeto.</li>
        </ol>

        <h2>📫 Contato</h2>
        <p><strong>[Seu Nome Completo]</strong></p>
        <p class="badges">
            <a href="[LINK_DO_SEU_PERFIL_NO_LINKEDIN]" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
            </a>
            <a href="mailto:[SEU_EMAIL_DE_CONTATO]">
                <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
            </a>
        </p>
        <p>Atualmente em busca de novas oportunidades. Se você se interessou pelo meu trabalho e acredita que minhas habilidades podem contribuir para sua equipe, entre em contato!</p>
