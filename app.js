
alert('Boas vindas ao jogo do número secreto');

let chute ;
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto)
let tentativas = 1;

console.log('Resultado da comparação:', chute == numeroSecreto);

while(chute != numeroSecreto){
    
    chute = prompt('Escolha um número entre 1 e 100');
    if (chute == numeroSecreto) {
        
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${numeroSecreto}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


    