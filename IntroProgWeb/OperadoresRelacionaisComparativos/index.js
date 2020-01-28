/* ============================
            OPERADORES DE COMPARAÇÃO
            > Maior
            < Menor
            >= Maior igual a
            <= Menor igual a
            == Igual a
            === Igual e do mesmo tipo
            != Diferente de 
            !== Diferente, inclusive do tipo

================================*/

const idade = 17

// Desafio 1 -> Verificar se a pessoa é maior igual de 18 anos
console.log(idade >= 18)

// Desafio 1.1 -> Se sim, deixar entrar, se não, bloquear entrada
if (idade >= 18){
    console.log('Você pode entar')
} else {
    console.log ('Bloquear a entrada')
}

// Desafio 1.2 -> Se a pessoa tiver 17 anos
if (idade === 17 ) {
    console.log('Volte quando tiver 18')
}

