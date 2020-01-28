/* =============================
            Operadores de Lógicos

            && "E" As duas condições devem ser verdadeiras para que a condição final seja verdadeira.
            || "OU" Uma das condições deve ser verdadeira para que a condição final seja verdadeira.
            ! "Não" Nega uma condição

===================================*/

// As duas condições precisam ser verdadeiras para o final ser true
console.log( 5 == 5 && 6 == 6) //true
console.log( 5 == 5 && 6 == 7) //false

// Uma das duas condições precisa ser verdadeira para o final ser true
console.log( 5 == 5 || 6 == 6) //true
console.log( 5 == 5 || 6 == 7) //true

console.log(!(5 > 6)) //true
console.log(!(5 < 6)) //false


/* =============================
            Operadores de Aritméticos

            * Multiplicação
            / Divisão
            % Resto da divisão
            + Adição
            - Subtração

===================================*/

console.log ( 2 * 2) // 4
console.log ( 2 / 2 ) // 1
console.log ( 2 % 1.5 ) // 0.5
console.log ( 2 + 2) // 4 
console.log ( 2 - 2) // 0
