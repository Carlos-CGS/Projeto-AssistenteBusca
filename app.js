// Objeto para armazenar o número de pesquisas por linguagem
let contadorLinguagens = {
    javascript: 0,
    python: 0,
    java: 0,
    'c#': 0,
    html: 0,
    css: 0,
    kotlin: 0,
    r: 0,
    'c++': 0,
    assembly: 0,
    c: 0,
    php: 0,
    go: 0,
    swift: 0,
    typescript: 0,
    ruby: 0,
    scala: 0,
    dart: 0,
    rust: 0,
    perl: 0,
    github: 0,
    docker: 0,
    json: 0,
    yaml: 0,
    sql: 0,
    linux: 0,
    windows: 0,
};

// Função que retorna a linguagem com mais pesquisas
function linguagemMaisPesquisada() {
    let maiorPesquisa = null;
    let maiorValor = 0;

    // Percorre o objeto e identifica a linguagem com mais pesquisas
    for (let linguagem in contadorLinguagens) {
        if (contadorLinguagens[linguagem] > maiorValor) {
            maiorValor = contadorLinguagens[linguagem];
            maiorPesquisa = linguagem;
        }
    }

    return maiorPesquisa;
}

// Função de pesquisa
function pesquisar() {
    let input = document.getElementById("pesquisa").value.toLowerCase();
    let section = document.getElementById("resultados-pesquisa");
    const cardContainer = document.querySelector('.card')
    cardContainer.style.display = 'flex';
    let resultados = "";
    let adBanner = document.querySelector('.ad-banner'); // Seleciona o banner de propaganda

    // Verifica se o campo de pesquisa não está vazio
    if (!input) {
        resultados = 
            `<div class="item-resultado">
                <div class="texto-resultado"><h2>Você não inseriu nenhuma informação.</h2></div>
            </div>`;
        section.innerHTML = resultados;
        limparCampo();
        return;
    }

    // Varre todas as linguagens e compara com o input
    for (let linguagem of linguagens) {
        let titulo = linguagem.titulo.toLowerCase();

        if (titulo === input) {
            resultados += 
                `<div class="item-resultado">
                    <img src="img/${linguagem.avatar}" alt="${linguagem.titulo}">
                    <div class="texto-resultado">
                        <h2>${linguagem.titulo}</h2>
                        <p class="descricao-meta">${linguagem.descricao}</p>
                        <p class="descricao-meta"><br> Exemplo de Código:</p><code>${linguagem.exemplo}</code>
                        <p class="descricao-meta"><br># Paradigma: ${linguagem.paradigma}</p>
                        <p class="descricao-meta"># Criação: ${linguagem.criadoEm}</p>
                        <p class="descricao-meta">${linguagem.curiosidade}</p>
                        <a href="${linguagem.link}" target="_blank">Link para Documentação ${linguagem.titulo}</a>
                    </div>
                </div>`;

            // Incrementa o contador da linguagem pesquisada
            if (contadorLinguagens[titulo] !== undefined) {
                contadorLinguagens[titulo]++;
            }

            limparCampo();
        }
    }

    // Se não encontrou resultados
    if (!resultados) {
        resultados = 
            `<div class="item-resultado">
                <div class="texto-resultado"><h2>Linguagem não encontrada!</h2></div>
            </div>`;
        limparCampo();
    }

    function limparCampo() {
        valorPesquisa = document.querySelector('input');
        valorPesquisa.value = '';
    }

    // Exibe a linguagem com mais pesquisas
    const linguagemComMaisPesquisas = linguagemMaisPesquisada();

    switch (linguagemComMaisPesquisas) {
        case 'javascript':
            adBanner.innerHTML = `
                <img src="img/javascript.png" alt="Propaganda JavaScript" class="ad-image">
                    <p>Aprenda JavaScript com Google X Alura por 50% Off</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'python':
            adBanner.innerHTML = `
                <img src="img/python.png" alt="Propaganda Python" class="ad-image">
                    <p>Aprenda Python com Google X Alura por 50% Off</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'java':
            adBanner.innerHTML = `
                <img src="img/java.png" alt="Propaganda Java" class="ad-image">
                    <p>Aprenda Java com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'c#':
            adBanner.innerHTML = `
                <img src="img/csharp.png" alt="Propaganda C#" class="ad-image">
                    <p>Aprenda C# com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'html':
            adBanner.innerHTML = `
                <img src="img/html.png" alt="Propaganda HTML" class="ad-image">
                    <p>Aprenda HTML com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'css':
            adBanner.innerHTML = `
                <img src="img/css.png" alt="Propaganda CSS" class="ad-image">
                    <p>Aprenda CSS com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'kotlin':
            adBanner.innerHTML = `
                <img src="img/kotlin.png" alt="Propaganda Kotlin" class="ad-image">
                    <p>Aprenda Kotlin com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'r':
            adBanner.innerHTML = `
                <img src="img/r.png" alt="Propaganda R" class="ad-image">
                    <p>Aprenda R com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'c++':
            adBanner.innerHTML = `
                <img src="img/c++.png" alt="Propaganda C++" class="ad-image">
                    <p>Aprenda C++ com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'assembly':
            adBanner.innerHTML = `
                <img src="img/assembly.png" alt="Propaganda Assembly" class="ad-image">
                    <p>Aprenda Assembly com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'c':
            adBanner.innerHTML = `
                <img src="img/c.png" alt="Propaganda C" class="ad-image">
                    <p>Aprenda C com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'php':
            adBanner.innerHTML = `
                <img src="img/php.png" alt="Propaganda PHP" class="ad-image">
                    <p>Aprenda PHP com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'go':
            adBanner.innerHTML = `
                <img src="img/go.png" alt="Propaganda Go" class="ad-image">
                    <p>Aprenda Go com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'swift':
            adBanner.innerHTML = `
                <img src="img/swift.png" alt="Propaganda Swift" class="ad-image">
                    <p>Aprenda Swift com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'typescript':
            adBanner.innerHTML = `
                <img src="img/typescript.png" alt="Propaganda TypeScript" class="ad-image">
                    <p>Aprenda TypeScript com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'ruby':
            adBanner.innerHTML = `
                <img src="img/ruby.png" alt="Propaganda Ruby" class="ad-image">
                    <p>Aprenda Ruby com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'scala':
            adBanner.innerHTML = `
                <img src="img/scala.png" alt="Propaganda Scala" class="ad-image">
                    <p>Aprenda Scala com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'dart':
            adBanner.innerHTML = `
                <img src="img/dart.png" alt="Propaganda Dart" class="ad-image">
                    <p>Aprenda Dart com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'rust':
            adBanner.innerHTML = `
                <img src="img/rust.png" alt="Propaganda Rust" class="ad-image">
                    <p>Aprenda Rust com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'perl':
            adBanner.innerHTML = `
                <img src="img/perl.png" alt="Propaganda Perl" class="ad-image">
                    <p>Aprenda Perl com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'github':
            adBanner.innerHTML = `
                <img src="img/github.png" alt="GitHub" class="ad-image">
                    <p>Explore projetos no GitHub e colabore! Com % Off!</p>
                    <a href="https://github.com/" target="_blank">GitHub</a>
                `;
            break;
        case 'docker':
            adBanner.innerHTML = `
                <img src="img/docker.png" alt="Docker" class="ad-image">
                    <p>Aprenda a Gerenciar containers com Docker! Com 50% Off!</p>
                    <a href="https://www.docker.com/" target="_blank">Site Docker</a>
                `;
            break;
        case 'json':
            adBanner.innerHTML = `
                <img src="img/json.png" alt="JSON" class="ad-image">
                    <p>Aprenda e Entenda e use JSON para dados! Com 50% Off!</p>
                    <a href="https://www.json.org/" target="_blank">Site JSON</a>
                `;
            break;
        case 'yaml':
            adBanner.innerHTML = `
                <img src="img/yaml.png" alt="YAML" class="ad-image">
                    <p>Aprenda a Trabalhar com YAML para configuração! Com 50% Off!</p>
                    <a href="https://yaml.org/" target="_blank">Site YAML</a>
                `;
            break;
        case 'sql':
            adBanner.innerHTML = `
                <img src="img/sql.png" alt="SQL" class="ad-image">
                    <p>Domine SQL para gerenciamento de dados! Com 50% Off!</p>
                    <a href="https://www.sql.org/" target="_blank">Site SQL</a>
                `;
            break;
        case 'linux':
            adBanner.innerHTML = `
                <img src="img/linux.png" alt="Linux" class="ad-image">
                    <p>Aprenda Linux e torne-se um pro! Com 50% Off!</p>
                    <a href="https://www.linux.org/" target="_blank">Site Linux</a>
                `;
            break;
        case 'windows':
            adBanner.innerHTML = `
                <img src="img/windows.png" alt="Windows" class="ad-image">
                    <p>Explore e aproveite Windows ao máximo! com 50% off!</p>
                    <a href="https://www.microsoft.com/windows" target="_blank">Site Windows</a>
                `;
            break;
            default:
                adBanner.innerHTML = 
                    `<img src="img/geral.png" alt="Propaganda Geral" class="ad-image">
                    <p>Confira nossas promoções e ferramentas para desenvolvedores!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>`;
                break;
        }
    
        section.innerHTML = resultados;
    }
    
    // Função para configurar o banner padrão
    function configurarBannerPadrao() {
        let adBanner = document.querySelector('.ad-banner');
        adBanner.innerHTML = 
            `<img src="img/geral.png" alt="Propaganda Geral" class="ad-image">
            <p>Confira nossas promoções e ferramentas para desenvolvedores!</p>
            <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>`;
    }
    
    // Configura o banner padrão ao carregar a página
    window.onload = function () {
        configurarBannerPadrao();
    };

    // Adiciona o evento de tecla "Enter" para realizar a pesquisa
    document.getElementById('pesquisa').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            pesquisar();
            event.preventDefault(); 
        }
    });
