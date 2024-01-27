let nome = "Carol";
console.log(nome);

CalculadoraHanke("Carol", 10)
CalculadoraHanke("Ana", 50)
CalculadoraHanke("Rodrigo", 80)
CalculadoraHanke("Renata", 100)
CalculadoraHanke("Pedro", 101)

function CalculadoraHanke(nomeHeroi, saldoVitoria){
let nivel;

for (let contador = 0; contador < 3; contador++) {
 
if(saldoVitoria <= 10)
{
 nivel = "Ferro";
 console.log(`O Herói numero  de vitoria ${saldoVitoria} está no nivel ${nivel}`);
} else if(saldoVitoria >= 11 && saldoVitoria <= 20){
    nivel = "Bronze";
    console.log(`O Herói numero  de vitoria ${saldoVitoria} está no nivel ${nivel}`);
}else if(saldoVitoria >= 21 && saldoVitoria <= 50){
    nivel = "Prata";
    console.log(`O Herói numero  de vitoria ${saldoVitoria} está no nivel ${nivel}`);
}else if(saldoVitoria >= 51 && saldoVitoria <= 80){
    nivel = "Ouro";
    console.log(`O Herói numero  de vitoria ${saldoVitoria} está no nivel ${nivel}`);
} else if(saldoVitoria >= 81 && saldoVitoria <= 90){
    nivel = "Diamante";
    console.log(`O Herói numero  de vitoria ${saldoVitoria} está no nivel ${nivel}`);
}else if(saldoVitoria >= 91 && saldoVitoria <= 100){
    nivel = "Lendario";
  
}else 
{
    nivel = "Imoral";
    console.log(`O Herói numero  de vitoria ${saldoVitoria} está no nivel ${nivel}`);
}
}


}
