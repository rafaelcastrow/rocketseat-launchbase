// AULA OBJETOS

const aluno01 = {
    nome : "diego",
    nota : 9.8
}

const aluno02 = {
    nome : "Rafael",
    nota : 10
}

const aluno03 = {
    nome : "Nicolas",
    nota : 2
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

console.log(`A média entre os 3 alunos é de: ${media}`)