// Array contendo todas as perguntas do quiz
const questions = [
  {
    question: "Qual é a capital do Brasil?",  // Enunciado
    answers: [
      { option: "Brasília", correct: true },
      { option: "São Paulo", correct: false },
      { option: "Mato Grosso", correct: false },
    ],
    img: "img/image.png" // Imagem associada à pergunta (ainda não usada no JS)
  },

  {
    question: "Qual é o estado do Sul que começa com a letra P?",
    answers: [
      { option: "Santa Catarina", correct: false },
      { option: "Nordeste", correct: false },
      { option: "Paraná", correct: true },
    ],
  },

  {
    question: "Qual é o estado do Nordeste que começa com a letra M?",
    answers: [
      { option: "Bahia", correct: false },
      { option: "Maranhão", correct: true },
      { option: "Alagoas", correct: false },
    ],
  },
  
  {
    question: "Qual destas cidades tem praia?",
    answers: [
      { option: "Curitiba", correct: false },
      { option: "Londrina", correct: false },
      { option: "Florianopolis", correct: true },
    ],
  },

  {
    question: "Qual é o estado com uma grande floresta?",
    answers: [
      { option: "Pará", correct: false },
      { option: "Alagoas", correct: false },
      { option: "Amazonia", correct: true },
    ],
  },
];

// Torna o array acessível ao arquivo principal
export default questions;
