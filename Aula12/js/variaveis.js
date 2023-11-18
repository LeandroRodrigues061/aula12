function exemploVar(){
    var x = 5
    if (true){
        var x = 10; //re-atribuido a valor de X
        console.log(x);
    }
    console.log(x)
}

function exemploLet(){
    let x = 5 //escopo da função
    if (true){
        let x = 10; 
        console.log(x); //esse X deixa de existir
    }
    console.log(x) 
}

function exemploConst(){
    const x = 5 //atribuir o valor uma unica vez
    if (true){
        x = 10; //causará falha ao re-atribuir
        console.log(x);
    }
    console.log(x)
}

function tiposVariaveis(){
    let nome = "Francisco"
    let idade = 18
    let altura = 1.74

    let verdade = true
    let falso = false

    let lista = [ 'carro', 'casa', 'computador']

    let vazio = null 

    let sem_valor

    let aluno = {
        "nome": nome,
        "idade": idade,
        "altura": altura
    }

    console.log(nome, idade, altura)
    console.log(verdade, falso)
    console.log(lista)
    console.log(vazio)
    console.log(sem_valor)
    console.log(aluno)
}