const caixaPrincipal = document.querySelector(".caixa-pricipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual modelo de jogos você prefere para sua diversão?",
        alternativas: [
            {
                texto: "jogos online nos quais você pode jogar com seus amigos ou com pessoas aleatórias de diferentes regiões do planeta, promovendo uma experiência global e interativa.",
                afirmacao: "Interaja e socialize com velhos amigos ou com desconhecidos de terras distantes, a interação está a um clique de distância.",
            },
            {
                texto: "Jogos com aventuras épicas em jogos singleplayer onde você é o protagonista absoluto!",
                afirmacao: "Descubra o poder do silêncio, onde a calma apaga os ruídos da mente.",
            }
        ]
    },
    {
        enunciado: "Qual dessas duas opções de jogos é de sua preferência?",
        alternativas: [
            {
                texto: "Jogos de ação e aventuras.",
                afirmacao: "Você curte um desafio a mais e prioriza sua vitória, mesmo com mais desafios.",
            },
            {
                texto: "Jogos com mapas abertos e histórias pré-moldadas.",
                afirmacao: "Você se conforta com o que o destino pode te proporcionar, sem ter pressa para o futuro.",
            }
        ]
    },
    {
        enunciado: "Você prefere jogos com desafios difíceis ou mais fáceis e relaxantes?",
        alternativas: [
            {
                texto: "Prefiro jogos com desafios difíceis, pois gosto de testar minhas habilidades, pensar estrategicamente e sentir aquela sensação de conquista ao superar obstáculos.",
                afirmacao: "Jogos difíceis exigem raciocínio, paciência e persistência, o que pode ser muito gratificante. A sensação de vencer algo complicado traz orgulho e motivação, funcionando quase como uma recompensa emocional por todo o esforço investido.",
            },
            {
                texto: "Gosto mais de jogos fáceis e relaxantes, porque eles me ajudam a descontrair, curtir a experiência sem pressão e aproveitar o tempo de forma leve.",
                afirmacao: "Jogos fáceis e relaxantes oferecem um ambiente acolhedor, sem a necessidade de competir ou enfrentar grandes desafios. Eles são ideais para momentos de descanso, ajudando a aliviar o estresse e proporcionando diversão leve.",
            }
        ]
    },
    {
        enunciado: "Qual desses dois jogo você recomendaria para um amigo e por quê?",
        alternativas: [
            {
                texto: "Eu recomendaria Minecraft, porque é um jogo criativo e versátil que permite construir mundos, explorar e jogar com amigos. É ótimo para desenvolver imaginação e trabalhar em equipe.",
                afirmacao: "Minecraft é um jogo educativo e social, onde a construção de mundos e a cooperação são essenciais para o sucesso.",
            },
            {
                texto: "Indicaria FIFA, porque é divertido para quem gosta de futebol, tem gráficos realistas e permite jogar partidas emocionantes com amigos, seja de forma competitiva ou cooperativa.",
                afirmacao: "FIFA é ideal para quem ama futebol e quer viver a emoção das partidas com amigos, seja ganhando ou perdendo.",
            }
        ]
    },
    {
        enunciado: "Você gosta de jogos com gráficos realistas ou com estilo mais artístico?",
        alternativas: [
            {
                texto: "Prefiro jogos com gráficos realistas, porque gosto de sentir que estou dentro do jogo, com ambientes e personagens que se parecem com o mundo real.",
                afirmacao: "Jogos com gráficos realistas criam cenários detalhados, personagens expressivos e efeitos visuais que simulam o mundo físico.",
            },
            {
                texto: "Gosto mais de jogos com estilo artístico, pois acho criativo e único. Eles têm visuais diferentes que tornam a experiência mais especial e imaginativa.",
                afirmacao: "Jogos com estilo artístico estimulam a imaginação, com visuais únicos e atmosferas criativas.",
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = ""; // Limpar as alternativas antes de adicionar novas
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function () {
            respondeSelecionada(alternativa);
        });
        caixaAlternativa.appendChild(botaoAlternativa);
    }
}

function respondeSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " "; // Adiciona a afirmação à história final
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Se fosse possível...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativa.textContent = ""; // Limpar as alternativas
}

mostraPergunta();
