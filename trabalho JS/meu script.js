// Importa o array de perguntas do arquivo questoes.js
import questions from "./questoes.js"

// Seleciona elementos HTML necessários
const elQuestion = document.querySelector(".questoes")
const answers = document.querySelector(".answers")
const spnQtd = document.querySelector(".spnQtd")
const textFinish = document.querySelector(".finalizado span")
const content = document.querySelector(".content")
const contentFinish = document.querySelector(".finalizado")
const btnRestart = document.querySelector(".finalizado button")

// Variáveis principais do quiz
let currentIndex = 0            // Índice da pergunta atual
let questionsCorrect = 0        // Contador de acertos

// Botão de reinício do quiz
btnRestart.onclick = () => {
    content.style.display = "block"   // Mostra a área do quiz
    contentFinish.style.display = "none" // Esconde tela final

    currentIndex = 0          // Volta para a primeira pergunta
    questionsCorrect = 0      // Zera os acertos
    loadQuestion()            // Carrega a primeira pergunta
}

// Função chamada ao clicar em uma resposta
function nextQuestion(e) {
    // Se a resposta clicada é correta, soma 1 acerto
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++
    }

    // Se ainda há perguntas, vai para a próxima
    if (currentIndex < questions.length - 1) {
        currentIndex++
        loadQuestion()
    } else {
        finish() // Se for a última, finaliza o quiz
    }
}

// Mostra a tela final
function finish() {
    textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`
    content.style.display = "none"      // Esconde perguntas
    contentFinish.style.display = "block" // Mostra resultado final
}

// Carrega uma pergunta baseada no currentIndex
function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`

    const item = questions[currentIndex] // Pega pergunta atual
    answers.innerHTML = ""               // Limpa respostas antigas
    elQuestion.innerHTML = item.question // Adiciona texto da pergunta

    // Cria botões das respostas
    item.answers.forEach((answer) => {
        answers.innerHTML += `
            <button class="btn btn-outline-primary" data-correct="${answer.correct}">
                ${answer.option}
            </button>
        `
    })

    // Adiciona eventos de clique em cada botão
    document.querySelectorAll(".answers button").forEach((btn) => {
        btn.addEventListener("click", nextQuestion)
    })
}

// Carrega a primeira pergunta ao iniciar
loadQuestion()
