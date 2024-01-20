
Desafios
//1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

        alert('Bem vindo!')

        let chute = prompt('Chute um dia da semana? ');
        console.log('Dia:', chute);

        if (chute == 'Sábado' || chute == 'Domingo') {
            alert('Bom final de semana!');
        } else {
            alert('Hoje é: ' + chute + `! Boa Semana!`);
        }

//2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

        alert('Bem vindo!')

        let numero = prompt('Digite um numero: ');
        console.log('Numero digitado:', numero);

        if (numero > 0) {
            alert('Número positivo');
        } else {
            alert('Número negativo');
        }

//3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".


        pontuacao = 105

        if (pontuacao >= 100) {
            alert('Parabéns, você venceu!');
        } else {
            alert('Tente novamente para ganhar');
        }

//4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

        let saldoConta = 500; 
        alert(`Seu saldo é de R$${saldoConta}.`);

//5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.*/
        
         let nome = prompt('Qual o seu nome?');
         alert(`Boas vindas ${nome}`);
