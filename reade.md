# Typing Game

## Requisitos:

- Node.js
- npm

## Inicializando a aplicação:

Rode os seguintes comandos em ordem:
  - npm install
  - npm run build
  - npm run start

## Como Jogar:

- Digite seu nome no campo "Username", e clique no botão "START!";
- Se prepare durante os 3 segundos fornecidos, depois digite a frase exibida o mais rápido que conseguir;
- Assim que a mensagem for completamente digitada, o jogo exibira seu placar e sua posição na lista de placares;
- Jogue novamente quantas vezes quiser. Tente competir com seus amigos!

## Como funciona:

### Primeira Tela: home

O título aninamado foi adaptado da code pen de Marko em: https://codepen.io/denic/pen/GRoOxbM*/.

O botão de inicio de jogo só é habilitado quando o usuário digita algo no campo "Username". Essa validação é feita atravéz dos hooks do React.

O nome de usuário também é salvado na cache atravéz dos hooks de React.

### Segunda Tela: Jogo

Assim que a segunda tela é renderizada, o momento atual é capturado. Também é iniciado uma animação que conta a quantidade de segundos e milisegundos decorridos.

Existe um input escondido que entra em foco assim que o componente da tela é carregado. Nesse input, existe um hook "useEffect" que captura o último caractere digitado no input escondido.

É realizada a validação do input de acordo com a frase que deve ser digitada. Caso o caractere seja digitada corretamente, o usuário pode prosseguir para o próximo caractere.

Depois que todos os caracteres foram digitados, o jogo registra o tempo final, e de acordo com a subtração de tempo final - tempo inicial, é calculado o tempo decorrido e a quantidade de palavras por minuto. 

### Tela Final: Pontuação

A tela de pontuação demonstra 3 propriedades: nome, tempo decorrido e wpm (palavras por minuto).

Os placares são ordenados por wpm, e salvos na cache do navegador, para manter histório em jogadas consecutivas.

## Questões Kutova: 

- A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente?

Sim. Peguei algumas técnicas de CSS da internet, mas mencionei-as acima.

- A aplicação tem pelo menos duas interfaces (telas ou páginas) independentes?

Sim. Tem 4. A tela inicial, a tela do contador (3, 2, 1), a tela do jogo e a tela de placares.

- A aplicação armazena e usa de forma relevante dados complexos do usuário?

Sim. A aplicação processa os dados de nome, tempo de máquina e teclas digitadas no teclado, manipulando-as no placar final para calcular a quantidade de palavras por minuto

- A aplicação foi desenvolvida com o React?

Sim. Exclusivamente.  Evitei utilizar muitas funções de JavaScript puro.


- A aplicação contém pelo menos dois componentes React além do componente principal?

Sim. Tem vários.

- O código da minha aplicação possui comentários explicando cada operação?

Sim. Mas são poucos, porque os nomes das variáveis e funções estão suficinetes para o entendimento, de forma que a adição de mais comentarios seria uma poluição redundante do código.

- A aplicação está funcionando corretamente?

Sim. Contudo à um bug ao recarregar a tela na tela de Placar, onde o placar do usuário é reinserido. Mas esse não faz parte do fluxo da aplicação.

- A aplicação está completa?

Sim.