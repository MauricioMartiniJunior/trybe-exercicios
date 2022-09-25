let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*
Percorra o array imprimindo todos os valores nele contidos com a função console.log();*/
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
};
console.log()
/*Some todos os valores contidos no array e imprima o resultado;*/
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
console.log("A soma total dos valores dentro do array são:\n", soma);

/*Calcule e imprima a média aritmética dos valores contidos no array;*/
let media = soma / numbers.length;
console.log("A média dos valores são:\n", media)

/*Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
*/
if (media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor que 20.");
}

/*Utilizando for, descubra qual o maior valor contido no array e imprima-o;*/
let numero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    numero = numbers[index];
    for (let index = 1; index < numbers.length; index += 1) {
        if (numero < numbers[index]) {
            numero = numbers[index];
        }
    }

};
console.log("O maior valor dentro do array:\n", numero);

/*Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;*/
contador = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 == 1) {
        contador += 1;
    };
};
if (contador != 0) {
    console.log(`O array contém ${contador} numeros ímpares.`)
} else {
    console.log("Nenhum valor ímpar encontrado!");
}

/*Utilizando for, descubra qual o menor valor contido no array e imprima-o;*/
let menorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    menorNumero = numbers[index];
    for (let index = 1; index < numbers.length; index += 1) {
        if (menorNumero > numbers[index]) {
            menorNumero = numbers[index];
        }
    }

};
console.log("O maior valor dentro do array:\n", menorNumero);

/*Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;*/
let array = [];
for (index = 0; index <= 25; index += 1) {
    array.push(index);
    console.log(index);
}

/*Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.*/
for (let index = 0; index < array.length; index += 1) {
    console.log(`${array[index]} / 2 = ${(array[index] / 2)}`)
}

/*Ordene o array numbers em ordem crescente e imprima seus valores;*/
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

/*Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte.*/
let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
novoArray = [];
for (let index = 0; index < number.length ; index += 1) {
    let novoValor = number[index] * number[index+1];
    novoArray.push(novoValor);
}

console.log(novoArray);


/*[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]*/
