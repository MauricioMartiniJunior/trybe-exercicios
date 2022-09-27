const myName = "Mauricio";
const birthCity = "Aruja";
let birthYear = 1987; 

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;
console.log(birthYear);

//birthCity = "São Paulo";
//console.log(birthCity);

const base = 5;
const heigth = 8;
const area = base * heigth;
console.log(area);

const nota = 45;

if (nota >= 80){
    console.log("Parabéns, você foi aprovada(o)!")
}else if (nota < 80 && nota >= 60){
    console.log("Você está na nossa lista de espera");
}else if (nota < 60){
    console.log("Você foi reprovada(o)");
}

const currentHour = 17;
let message;
if (currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir"
}else if (currentHour >= 18 && nota < 22){
    message = "Rango da noite, vamos jantar :D";
}else if (currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde";
}else if (currentHour >= 11 && currentHour < 14){
        message = "Hora do almoço";
}else if (currentHour >= 4 && currentHour < 11){
    message = "Humm, cheiro de café recém-passado";
}
console.log(message);

let weekDay = "quarta-feira";
if (weekDay == "segunda-feira" || "terça-feira" || "quarta-feira" || "quinta-feira" || "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}else if(weekDay == "sabado" || "domingo"){
    console.log("FINALMENTE, descanso merecido UwU.");
}


let candidato = "reprovada";

switch (candidato) {
  case 'aprovado':
    console.log("Parabens você foi aprovado!");
    break;
  case "lista":
    console.log('Vocẽ está na lista de espera.');
    break;
  case 'reprovada':
    console.log('Você foi reprovada(o).');
    break
  default:
    console.log('Informação incorreta.');
}

let a = -5;
let b = 65;
let c = 8;

let Adição = (a + b);
let Subtração = (a - b);
let Multiplicação = (a * b);
let Divisão = (a / b);
let Módulo = (a % b);

const resultado = [Adição,Subtração,Multiplicação,Divisão,Módulo];
resultado.forEach( e => {
    console.log(e);
});
 
if( a < c && c > b ){
    console.log(c);
}else if( a < b && b > c ){
    console.log(b);
}else if( b < a && a > c ){
    console.log(a)
}
 
if( a < 0 ){
    console.log("Este numero é negativo");
}else if(a > 0){
    console.log("este numero é positivo");
}else if( a == 0){
    console.log("zero");
}
 
let angulo1 = 50;
let angulo2 = 70;
let angulo3 = 60;
 
let isTriangulo = angulo1 + angulo2 + angulo3;
console.log( isTriangulo == 180);
console.log( isTriangulo);

let peca = "CAVALO";
peca = peca.toLowerCase()

switch (peca) {
  case 'torre':
    console.log("Mova-se em linha reta tanto horizontal ou em diagonal");
    break;
  case "rainha":
    console.log('Mova-se em sempre e linha reta, para qualquer direção.');
    break;
  case 'bispo':
    console.log('Mova-se sempre em diagonal');
  case "cavalo":
    console.log("Mova-se sempre em l, tanto em horizontal como diagonal.")  
}

notaAluno1 = 3;
notaAluno2 = 7; 
notaAluno3 = 5; 
let divisor = [notaAluno1, notaAluno2, notaAluno3].length;
let porcentagem = ((notaAluno1 + notaAluno2 + notaAluno3) / divisor) * 10;
console.log(porcentagem)
let notaFinalAluno;

if (porcentagem < 0 || porcentagem > 100){
    console.log("Dados incorreto!");
}else if(porcentagem >= 90){
    notaFinalAluno = "A";
}else if(porcentagem >= 80){
    notaFinalAluno = "B";
}else if(porcentagem >= 70){
    notaFinalAluno = "C";
}else if(porcentagem >= 60){
    notaFinalAluno = "D";
}else if(porcentagem >= 50){
    notaFinalAluno = "E";
}else if(porcentagem < 50){
    notaFinalAluno = "F";
};
console.log("Sua nota total foi",notaFinalAluno);

const numero1 = 5;
const numero2 = 47;
const numero3 = 8;

if(numero1 || numero2 || numero3 % 2 == 0){
    console.log(true);
}else{
    console.log(false);
}

const valorCustoProduto1 = 56.25;
const valorVendaProduto1 = 76.50;
if(valorCustoProduto1 < 0 || valorVendaProduto1 < 0){
    console.log("Erro nos valores digitado");
}else{
    const lucroDeVendaProduto = valorVendaProduto1 - (valorCustoProduto1 + valorCustoProduto1 * 0.2);
    const lucroTotalDeVendaDeMilProdutos = lucroDeVendaProduto * 1000;
    console.log("O valor de compra mais o imposto de 20% foi:\n",lucroDeVendaProduto, "\nLucro total de mil produtos foi:\n",lucroTotalDeVendaDeMilProdutos);
};

const salarioBruto = 3000 ;
let aliquota;

if(salarioBruto <= 1556.94){
    aliquota = 8;
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquota = 9;
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    aliquota = 11;
}else if(salarioBruto > 5189.82){
    aliquota = 570.88;
};

let salarioBase = salarioBruto - ((salarioBruto /100) * aliquota);
    
let impostoDeRenda;
let parcela;

if(salarioBase <= 1903.98){
    impostoDeRenda = 0;
}else if(salarioBase == 1.903,99 && salarioBase <= 2826.65){
    aliquota = 7.5 
    parcela = 142.80 
}else if( salarioBase >= 2826.66 && salarioBase <= 3751.05){
    aliquota = 15;
    parcela = 354.80
}else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    aliquota = 22.5
    parcela = 636.13 
}else if (salarioBase > 4664.68){
    aliquota = 27.5;
    parcela = 869,36;
};

let desconto = ((salarioBase / 100)* 7.5) - parcela;
let salarioLiquido = salarioBase - desconto;

console.log(salarioLiquido);

const n = `"?"` ;

let resul = 100;
for (let index = 0; index <= 9; index += 1) {
  resul -= index;
};
console.log(resul);

n = 5;

let resultad = 0;
for (let index = 0; index <= n; index += 1) {
    resultad += index;
};
console.log(resultad)
