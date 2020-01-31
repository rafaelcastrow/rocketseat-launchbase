const programador = {
    nome : 'Carlos',
    idade : 32,
    linguagens : [
             { nome : 'C++' , especialidade : 'Desktop'},
             { nome : 'Python' , especialidade : 'Data Science'},
            { nome : 'JavaScript' , especialidade : 'Web/Mobile'}
 ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.linguagens[2].nome} com especialidade em ${programador.linguagens[2].especialidade}`)