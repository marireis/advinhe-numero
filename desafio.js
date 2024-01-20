
IF -ELSE
Desafios
1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

        alert('Bem vindo!')

        let chute = prompt('Chute um dia da semana? ');
        console.log('Dia:', chute);

        if (chute == 'Sábado' || chute == 'Domingo') {
            alert('Bom final de semana!');
        } else {
            alert('Hoje é: ' + chute + `! Boa Semana!`);
        }

2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

        alert('Bem vindo!')

        let numero = prompt('Digite um numero: ');
        console.log('Numero digitado:', numero);

        if (numero > 0) {
            alert('Número positivo');
        } else {
            alert('Número negativo');
        }

3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".


        pontuacao = 105

        if (pontuacao >= 100) {
            alert('Parabéns, você venceu!');
        } else {
            alert('Tente novamente para ganhar');
        }

4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

        let saldoConta = 500; 
        alert(`Seu saldo é de R$${saldoConta}.`);

5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.*/
        
         let nome = prompt('Qual o seu nome?');
         alert(`Boas vindas ${nome}`);


LAÇO DE REPETIÇÃO ENQUANTO

Desafios

1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

        let contador = 0;
        while(contador < 10){
            contador++;
            console.log(contador);
        }
2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

        let contador = 11;
        while(contador > 0){
            contador--;
            console.log(contador);
        }
3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.


        let numero = prompt('Digite um numero');
        while(numero >= 0){
            console.log(numero)
            numero--;
        }

4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

        let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");
        let contador = 0;

        while (contador <= numeroMaximo) {
            console.log(contador);
            contador++
        }
    
DESAFIO FINAIS (IF-ELSE-WHILE-OPERADOR TERNARIO)

 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
    
    console.log('Boas vindas ao jogo do número secreto');

 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

    let nome = 'Marina';
    console.log(`Olá, ${nome}`)

 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

    let nome = 'Marina';
    alert(`Olá, ${nome}`)

 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

    let pergunta = prompt('Qual a linguagem de programação você mais gosta?');
    console.log(pergunta);

 5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

    let valor1 = 10;
    let valor2 = 5;
    let resultado = valor1 + valor2;
    console.log(`A soma de ${valor1} + ${valor2} é igual a ${resultado}`);

 6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

    let valor1 = 10;
    let valor2 = 5;
    let resultado = valor1 - valor2;
    console.log(`A difernça entre ${valor1} e ${valor2} é igual a ${resultado}`);

 7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
 
    let idade = prompt('Digite sua idade: ');
    if(idade >= 18){
        console.log(`Você é maior de idade, têm ${idade} anos`);
    } else{
        console.log(`Você é menor de idade, têm ${idade} anos`);
    }

 8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

    let numero = prompt('Digite um número: ');
    if(numero > 0) {
        console.log('Positivo')
    } 
    else if(numero < 0) {
        console.log('Negativo')
    }
    else {
        console.log('Zero')
    }
    
 9. Use um loop while para imprimir os números de 1 a 10 no console.

    let numInicial = 1
    let numFInal = 10;
    while(numInicial <= numFInal){
        console.log(numInicial)
        numInicial++;
    }

 10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

    let nota = 8
    if(nota >= 7){
        console.log('Aprovado')
    } else{
        console.log('Reprovado')
    }

 11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

    let numeroSecreto = Math.random();
    console.log(numeroSecreto)

 12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

    let numeroSecreto = parseInt(Math.random() * 10 + 1);
    console.log(numeroSecreto)

 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

    let numeroSecreto = parseInt(Math.random() * 1000 + 1);
    console.log(numeroSecreto)