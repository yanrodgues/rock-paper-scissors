# rock-paper-scissors

A função `getComputerChoice()` gera um número aleatório entre 0 e 100 e atribui a escolha do computador com base no intervalo do número.

A função `getPlayerChoice()` solicita ao usuário sua escolha e converte-a em minúsculas, para que o usuário não tenha que digitar exatamente como esperado.

A função `playRound()` recebe as seleções do jogador e do computador como argumentos e determina um vencedor com base nas regras do jogo. A função também incrementa a pontuação do vencedor.

A função `game()` chama as funções `getComputerChoice()`, `getPlayerChoice()` e `playRound()` cinco vezes para simular cinco rodadas do jogo. A função então compara as pontuações do jogador e do computador para determinar o vencedor do jogo.

Feito para ser rodado apenas no console, como projeto básico do Project Odin (www.theodinproject.com)
