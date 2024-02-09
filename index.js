const perguntas = [
    {
      pergunta: "Qual período musical é conhecido por sua polifonia complexa, melodias ornamentadas e uso de contraponto, tendo se desenvolvido na Europa entre os séculos XIII e XIV?",
      respostas: [
        "Renascimento",
        "Barroco",
        "Ars Nova",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual compositor alemão do período Barroco é considerado um dos maiores gênios da música ocidental, famoso por obras como 'O Messias' e 'Concertos de Brandemburgo'?",
      respostas: [
        "Johann Sebastian Bach",
        "Ludwig van Beethoven",
        "Wolfgang Amadeus Mozart",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual estilo musical surgiu nos Estados Unidos no final do século XIX e início do XX, caracterizado por improvisação, ritmo sincopado e uso do blues?",
      respostas: [
        "Jazz",
        "Rock",
        "Música Eletrônica",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual o movimento musical que se originou na Inglaterra no final da década de 1950 e se caracterizou por guitarras distorcidas, letras rebeldes e uma postura anti-establishment?",
      respostas: [
        "Rock and Roll",
        "Heavy Metal",
        "Punk Rock",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual o instrumento musical considerado o precursor da harpa moderna, com cordas perpendiculares à caixa de ressonância e originário da Mesopotâmia?",
      respostas: [
        "Alaúde",
        "Lira",
        "Cítara",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual compositor italiano do período Clássico é conhecido por óperas como 'As Bodas de Fígaro' e 'Don Giovanni', e por sinfonias que influenciaram compositores posteriores?",
      respostas: [
        "Wolfgang Amadeus Mozart",
        "Ludwig van Beethoven",
        "Franz Schubert",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual estilo musical que surgiu no Brasil no final do século XIX e início do XX, caracterizado por ritmo sincopado, uso de instrumentos como o pandeiro e o cavaquinho, e temas relacionados à cultura afro-brasileira?",
      respostas: [
        "Samba",
        "Bossa Nova",
        "Forró",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual o instrumento musical de cordas dedilhadas, com corpo em forma de pera e braço longo, que se originou na Península Ibérica e é considerado um dos instrumentos mais populares do mundo?",
      respostas: [
        "Violão",
        "Guitarra",
        "Baixo",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual o período musical que se desenvolveu na Europa entre os séculos XV e XVI, caracterizado por uma textura vocal mais homofônica, uso de melodias mais simples e maior expressividade?",
      respostas: [
        "Renascimento",
        "Barroco",
        "Classicismo",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual o estilo musical que surgiu nos Estados Unidos na década de 1950, caracterizado por melodias simples e dançantes, letras românticas e uso de guitarras elétricas?",
      respostas: [
        "Rock and Roll",
        "Country",
        "Jazz",
      ],
      correta: 0,
    },
  ];
  
  const quiz = document.querySelector('#quiz') // Está pegando os item da Div com o id "quiz", esse querySelector, serve como "mecanismo" de busca
  const template = document.querySelector('template') // Está pegando os items da tag templeta, usando o querySelector.
  
  const corretas = new Set() // New é uma palavra reservada do JS para criar coisas novas, geralmente uma estrutura de dados ou objetos específicos, e Set/conjunto é um desses tipos de objeto específico, para retirar ou colocar, e nunca posso repetir a informação
  const totalDePerguntas = perguntas.length // Criei uma variável para contar a quantidade de perguntas
  const mostrarTotal = document.querySelector('#acertos span') // Selecionei dentro desta variável o id "Acertos" (uma div do meu HTML) e dentro dela, usando o espaço procurei pelo 'span'
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas // Alterei o número automaticamente dos acertos contando eles com o "corretas.size" e concatenei com o totalDePerguntas que é a quantidade de perguntas que tenho
  
  
  // loop ou laço de repetição
  for (const item of perguntas) { // Está sendo feito um laço de repetição usando a constante item das perguntas
    const quizItem = template.content.cloneNode(true) // Essa variável está pegando o conteúdo dentro do template e clonando, clonando os nós usando o cloneNode, e esse conteúdo está dentro da constante criada o "quizItem"
    quizItem.querySelector('h3').textContent = item.pergunta // Está alterando o cabeçalho h3 de todos os itens do template usando a constante "quizItem" que foi atribuída na linha anterior
    for(let resposta of item.respostas) { 
      const dt = quizItem.querySelector('dl dt').cloneNode(true) // Estou clonando dentro da variável dt todo o conteúdo dentro de dt no meu html
      dt.querySelector('span').textContent = resposta // Estou pegando todo meu contéudo dentro do span no html
      dt.querySelector('input').setAttribute('name', 'pergunta -' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
  
      quizItem.querySelector('dl').appendChild(dt) // Coloca as opções na tela
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  