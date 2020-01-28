const nome = 'Silvana'
const sexo = 'F'
const idade = 80
const contribuicao = 30
const tempoContri = idade + contribuicao

if (sexo == 'F' && tempoContri >= 85 && contribuicao >= 30 || sexo == 'M' && tempoContri >= 95 && contribuicao >= 35){
    console.log (`Você está apto a se aposentar!`)
    console.log (`Nome: ${nome}, Sexo: ${sexo} , Idade: ${idade},  Contribuição: ${contribuicao}, Tempo de contribuição: ${tempoContri}`)
} 
else {
    console.log (`Você não está apto a se aposentar!`)
    console.log(`Nome: ${nome}, Sexo:${sexo}, Idade: ${idade},  Contribuição: ${contribuicao}, Tempo de contribuição: ${tempoContri}`)
}