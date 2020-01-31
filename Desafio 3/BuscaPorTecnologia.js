const usuarios = [
    {
        nome : 'Carlos',
        tecnologias: [
            'HTML',
            'CSS'
        ]
    },
    {
        nome : 'Jasmine',
        tecnologias : [
            'JavaScript',
            'CSS'
        ]
    },
    {
        nome : 'Tuane',
        tecnologias : [
            'HTML',
            'Node.js'
        ]
    }
]

function checaSeUsuarioUsaCSS (usuario){
    for (let tecnologia of usuario.tecnologias){
        if (tecnologia == 'CSS'){
            return true
        }
        
    }
    return false
}

for ( let usuario of usuarios){
    const cheacarSeUsaCSS = checaSeUsuarioUsaCSS(usuario)

    if (cheacarSeUsaCSS){
        console.log(`O usuario ${usuario.nome} trabalha com CSS`)
    }
}

