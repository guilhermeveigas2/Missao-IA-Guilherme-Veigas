const { createElement } = require("react");

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
                texto: " jogos online nos quais você pode jogar com seus amigos ou com pessoas aleatórias de diferentes regiões do planeta, promovendo uma experiência global e interativa.",
                afirmacao: " Interaja e socialize com velhos amigos ou com desconhecidos de terras distantes, a interação está a um clique de distância.",
            },
            {
                texto: " Jogos com aventuras épicas em jogos singleplayer onde você é o protagonista absoluto!",
                afirmacao: " Afirmação 2 - Descubra o poder do silêncio, onde a calma apaga os ruídos da mente. ",
            }
        ]
    },
    {
        enunciado: " Qual dessas duas opções de jogos é de sua preferência?",
        alternativas: [
            {
                texto: " Jogos de ação e aventuras. ",
                afirmacao: " Você curte um desafio a mais e prioriza sua vitória, mesmo com mais desafios  ",
            },
            {
                texto: " jogos com mapas abertos e histórias pré-moldadas. ",
                afirmacao: " Você se conforta com o que o destino pode te proporcionar, sem ter pressa para o futuro.",
            }
        ]
    },
    {
        enunciado: " Você prefere jogos com desafios difíceis ou mais fáceis e relaxantes?",
        alternativas: [
            {
                texto: " Prefiro jogos com desafios difíceis, pois gosto de testar minhas habilidades, pensar estrategicamente e sentir aquela sensação de conquista ao superar obstáculos.",
                afirmacao: " Afirmação 1 -  Jogos difíceis exigem raciocínio, paciência e persistência, o que pode ser muito gratificante. A sensação de vencer algo complicado traz orgulho e motivação, funcionando quase como uma recompensa emocional por todo o esforço investido. ",
            },
            {
                texto: " Gosto mais de jogos fáceis e relaxantes, porque eles me ajudam a descontrair, curtir a experiência sem pressão e aproveitar o tempo de forma leve. ",
                afirmacao: " Afirmação 2 -Jogos fáceis e relaxantes oferecem um ambiente acolhedor, sem a necessidade de competir ou enfrentar grandes desafios. Eles são ideais para momentos de descanso, ajudando a aliviar o estresse e proporcionando diversão leve. Além disso, permitem que o jogador aproveite a narrativa, os gráficos ou a música com calma, tornando a experiência mais contemplativa e prazerosa.",
            }
        ]
    },
    {
        enunciado: " Qual desses dois jogo você recomendaria para um amigo e por quê?",
        alternativas: [
            {
                texto: " Eu recomendaria Minecraft, porque é um jogo criativo e versátil que permite construir mundos, explorar e jogar com amigos. É ótimo para desenvolver imaginação e trabalhar em equipe. ",
                afirmacao: "   recomendação destaca o valor educativo e social de Minecraft. O jogo oferece um ambiente aberto onde os jogadores podem construir estruturas, resolver problemas e explorar cenários variados, estimulando a criatividade e o raciocínio lógico. Além disso, por permitir partidas cooperativas, ele promove o trabalho em equipe, a comunicação e a colaboração entre os participantes. É uma experiência que combina diversão com aprendizado, tornando-o ideal para diferentes faixas etárias e estilos de jogo. ",
            },
            {
                texto: " Indicaria FIFA, porque é divertido para quem gosta de futebol, tem gráficos realistas e permite jogar partidas emocionantes com amigos, seja de forma competitiva ou cooperativa.",
                afirmacao: " FIFA é conhecido por sua fidelidade ao futebol real, com gráficos detalhados, jogabilidade dinâmica e times atualizados. Além disso, o jogo oferece modos cooperativos e competitivos, permitindo que amigos joguem juntos ou se desafiem, o que torna a experiência mais envolvente e divertida. É ideal para quem gosta de esportes e quer sentir a emoção das partidas dentro do universo virtual.",
            }
        ]
    },
    {
        enunciado: " Você gosta de jogos com gráficos realistas ou com estilo mais artístico?",
        alternativas: [
            {
                texto: " Prefiro jogos com gráficos realistas, porque gosto de sentir que estou dentro do jogo, com ambientes e personagens que se parecem com o mundo real. ",
                afirmacao: "Jogos com gráficos realistas criam cenários detalhados, personagens expressivos e efeitos visuais que simulam o mundo físico, o que aumenta a sensação de presença e envolvimento. Para quem valoriza esse estilo, jogar se torna quase como viver uma aventura cinematográfica, onde cada detalhe contribui para tornar a experiência mais intensa e autêntica.",
            },
            {
                texto: "Gosto mais de jogos com estilo artístico, pois acho criativo e único. Eles têm visuais diferentes que tornam a experiência mais especial e imaginativa.",
                afirmacao: " jogos com estilo artístico costumam fugir do padrão visual realista, apostando em cores vibrantes, traços únicos e atmosferas que estimulam a imaginação. Eles oferecem experiências visuais marcantes, muitas vezes parecidas com obras de arte interativas, e podem transmitir emoções e mensagens de forma mais subjetiva. Para quem valoriza esse estilo, jogar é também uma forma de apreciar estética, originalidade e expressão criativa. ",
            }
        ]
    },



];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function() { 
            atual++
            mostraPergunta();
        })
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}

mostraPergunta ();