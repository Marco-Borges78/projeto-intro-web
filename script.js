let personagem01 = {
    nome: 'Ipupiara',
    nomeReal: 'MARIA - \"Criatura anfíbia que devora homens\"',
    idade: 0 + ' anos.',
    altura: 185 + 'cm',
    peso: 40 + ' kg',
    historico: 'Foi encontrada inconciente as margens do Rio Paraná por um jovem biólogo que cuidou dela notando que sofria de algum tipo de amnésia. A presença dela nos arredores, chamou a atenção de traficantes de animais que tentaram capturá-la, mas ao ver seu salvador sofrendo nas mãos dos homens maus, ela liberta seus intintos predatórios e os devora. Não sabendo o que fazer, o cientista entra em contato com o Projeto Força BR e a entrega a eles. Ela sente, mas entende que seu lugar não era ali e promete a ele voltar um dia.',
    heroi: true,
    personalidade: [`Infantil, maliciosa e  passional.`],
    imagem: `../midias/ipupiara.jpg`,
    link:"https://forcabr.com.br/produto/card-5-fichas-ipupiara/"

};

let personagem02 = {
    nome: 'Jequitibá',
    nomeReal: 'Guapari Anga',
    idade: 350 + ' anos.',
    altura: 350 + 'cm',
    peso: 1000 + ' kg',
    historico: 'Uma vez cacique de sua tribo natal, Guapari, não pode evitar o masacre causado pelos invasores europeus culminando em sua execução junto a uma árvore sagrada. Centenas de anos depois, ele renasce como Jequitibá, um ser vegetal orgânico fora do seu tempo. Após constatar o progresso da civilização moderna, ele se retira no interior das matas, mas é encontrado pelo grupo Força BR e convencido a juntar-se a eles por uma causa maior. Ele reluta mais aceita o pedido.',
    heroi: true,
    personalidade: [`Sábio, pacífico e bondoso.`],
    imagem:`../midias/jequitiba.jpg`,
    link:"https://forcabr.com.br/produto/card-6-fichas-jequitiba/"
    
};


let personagem03 = {
    nome: 'Muzenza',
    nomeReal: 'João Machado da Silva \"Guerreiro de Ogum - Espírito Guerreiro\"',
    idade: 25 + ' anos.',
    altura: 190 + 'cm',
    peso: 95 + ' kg',
    historico: 'Apesar de seu talento como mestre de Capoeira, Muzenza tinha um comportamento irresponsável e imaturo. Por um caso do destino, ele cruza o caminho do misterioso Kibungo que faz despertar nele o espírito da guerra de Ogum que estava adormecido. Agora muito mais poderoso, o capoeirista ingressa na equipe do Projeto Força BR para terminar o combate que iniciou com o seu algoz, mas sempre com muito otimismo e bom humor.',
    heroi: true,
    personalidade: [`Arrogante, orgulhoso e fanfarrão`],
    imagem:`../midias/muzenza.jpg`,
    link:"https://forcabr.com.br/produto/card-4-fichas-muzenza/"
};

let personagem04 = {
    nome: 'O.R.D.E.M.',
    nomeReal: 'Fernando Pereira',
    idade: 25 + ' anos.' ,
    altura: 178 + 'cm',
    peso: 75 + ' kg',
    historico: 'Ao trabalhar em um projeto secreto para o governo, que desenvolvia formas alternativas de energia, Fernando e Maurício (seu professor) sofreram um acidente quase fatal, culminando em uma explosão na plataforma onde trabalhavam. A radiação liberada pelo acidente fez com que o corpo de Fernando passase as liberar uma espécie de energia ilimitada. Percebendo seu potencial, Morubixaba o convida para participar do projeto Força BR e juntos desenvolveram uma sofisticada armadura que contém e redireciona esta energia ilimitada, dando-lhe super capacidades, surgindo dessa forma O.R.D.E.M.',
    heroi: true,
    personalidade: [`Ousado, confiante, bondoso e caridoso.`],
    imagem:`../midias/ordem.jpg`,
    link:"https://forcabr.com.br/produto/card-1-fichas-o-r-d-e-m/"
};

let personagem05 = {
    nome: 'Amanari',
    nomeReal: 'Amanari \"Água da chuva\"',
    idade: 19 + ' anos.' ,
    altura: 160 + 'cm',
    peso: 50 + ' kg',
    historico: 'Nascida em um tribo isolada e rejeitada por sei pai por não ser um homem, a jovem Amanari parte sozinha para uma arriscada missão para adquirir o lendário Maracá de Guaraci que, além de aflorar toda a magia que corria em sua veias, fez com que ela recebessa o dom da vidência. Com esses poderes ela se tornou um membro essencial para o Projeto Força BR, uma vez que sua habilidade dá ao grupo a possibilidade de estar sempre um passo a frente de seus adversários. Porém, ela é pacifísta e ferrenha defensora da vida, sofrendo com os conflitos que tem que participa.',
    heroi: true,
    personalidade: [`Emotiva, caridosa e reservada.`],
    imagem:`../midias/amanari.jpg`,
    link:"https://forcabr.com.br/produto/card-2-fichas-amanari/"
};


let personagem06 = {
    nome: 'Jaguaruna',
    nomeReal: 'Sapiranga \"Olhos Vermelhos\"',
    idade: 25 + ' anos.' ,
    altura: 165 + 'cm',
    peso: 80 + ' kg',
    historico: 'Órfão, Sapiranga nas ruas e nas matas próximas a sua cidade, desenvolvendo suas habilidades defendendo a selva de ocasionais infratores. Um dia encontrou um velho misterioso que lhe treinou para derrotar uma grande fera e adquirir seus poderes. Vitorioso, nasceu então Jaguaruna, um feiticeiro selvagem que ingressou ao Projeto BR por acreditar que eles lhe mostrariam seus próximos adversários a serem eliminados.',
    heroi: true,
    personalidade: [`Introvertido, implacável e solitário.`],
    imagem:`../midias/jaguaruna.jpg`,
    link:"https://forcabr.com.br/produto/card-3-fichas-jaguaruna/"
};

// console.log(personagem01.nome.toUpperCase());
// console.log(personagem01)
// console.log(personagem02.nome.toUpperCase());
// console.log(personagem02)
// console.log(personagem03.nome.toUpperCase());
// console.log(personagem03)
// console.log(personagem04.nome.toUpperCase());
// console.log(personagem04)
// console.log(personagem05.nome.toUpperCase());
// console.log(personagem05)
// console.log(personagem06.nome.toUpperCase());
// console.log(personagem06)


let arrayObjetos =[]
arrayObjetos.push(personagem01, personagem02, personagem03, personagem04, personagem05, personagem06)


let mediaIdade = 0
for (let i in arrayObjetos){
    mediaIdade += arrayObjetos[i].idade
}
//console.log(`Médias das idades dos personagens é de ${mediaIdade / arrayObjetos.length} anos.`);


let verificaHeroi = arrayObjetos[0].heroi && arrayObjetos[1].heroi && arrayObjetos[2].heroi && arrayObjetos[3].heroi && arrayObjetos[4].heroi && arrayObjetos[5].heroi
//console.log('Todos são herois?' , verificaHeroi);


let lista = []
let personagens = []
for (i in arrayObjetos) {
    personagens.push(arrayObjetos[i].nome)
}

for (i in arrayObjetos) {
    arrayObjetos[i].heroi ? lista.push(arrayObjetos[i]) : alert(`O personagem ${personagens[i]} não foi adicionado.`)
}
// console.log(lista)


let personalidade1 = ``
for (i in personagem01.personalidade) {
    personalidade1 += `${personagem01.personalidade[i]}`
}

let personalidade2 = ``
for (i in personagem02.personalidade) {
    personalidade2 += `${personagem02.personalidade[i]}`
}

let personalidade3 = ``
for (i in personagem03.personalidade) {
    personalidade3 += `${personagem03.personalidade[i]}`
}

let personalidade4 = ``
for (i in personagem04.personalidade) {
    personalidade4 += `${personagem04.personalidade[i]}`
}

let personalidade5 = ``
for (i in personagem05.personalidade) {
    personalidade5 += `${personagem05.personalidade[i]}`
}

let personalidade6 = ``
for (i in personagem06.personalidade) {
    personalidade6 += `${personagem06.personalidade[i]}`
}

let listapersonalidade = []
listapersonalidade.push(personalidade1, personalidade2, personalidade3, personalidade4,personalidade5, personalidade6)




impressaoRelatorio = (personagem) => {
    let imprimir = ``
    for (i in personagem) {
        imprimir += `${i}: ${personagem[i]}\n`
    }
    return imprimir
}
// console.log(impressaoRelatorio(personagem01))
// console.log(impressaoRelatorio(personagem02))
// console.log(impressaoRelatorio(personagem03))
// console.log(impressaoRelatorio(personagem04))
// console.log(impressaoRelatorio(personagem05))
// console.log(impressaoRelatorio(personagem06))

for (i in arrayObjetos) {
    let div = document.getElementById("div-sections")
    let section = document.createElement("section")
    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let li4 = document.createElement("li")
    let li5 = document.createElement("li")
    let li6 = document.createElement("li")
    let li7 = document.createElement("li")
    let li8 = document.createElement("li")
    let a = document.createElement("a")
    let imagem = document.createElement("img")
    section.setAttribute("id", "section1")
    imagem.setAttribute("id", "imagem1")
    ul.setAttribute("id", "lista1")
    ul.setAttribute("class", "lista")
    imagem.src = arrayObjetos[i].imagem
    a.setAttribute("target", "_blank")
    a.setAttribute("href", arrayObjetos[i].link)
    a.innerHTML += `${arrayObjetos[i].nome.toUpperCase()}`
    li1.appendChild(a)
    li2.innerHTML = `Nome: ${arrayObjetos[i].nome}`
    li3.innerHTML = `Nome real: ${arrayObjetos[i].nomeReal}`
    li4.innerHTML = `Idade: ${arrayObjetos[i].idade}`
    li5.innerHTML = `Altura: ${arrayObjetos[i].altura}`
    li6.innerHTML = `Peso: ${arrayObjetos[i].peso}`
    li7.innerHTML = `História: ${arrayObjetos[i].historico}`
    li8.innerHTML = `Personalidade: ${arrayObjetos[i].personalidade}`
    div.appendChild(section)
    section.appendChild(imagem)
    section.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    ul.appendChild(li5)
    ul.appendChild(li6)
    ul.appendChild(li7)
    ul.appendChild(li8)
}

buscando = (arrayObjetos, string) => {
    for (i in arrayObjetos) {
        if (arrayObjetos[i].nome === string) {
            let main = document.getElementById("main")
            let div = document.createElement("div")
            let section = document.createElement("section")
            let ul = document.createElement("ul")
            let li1 = document.createElement("li")
            let li2 = document.createElement("li")
            let li3 = document.createElement("li")
            let li4 = document.createElement("li")
            let li5 = document.createElement("li")
            let li6 = document.createElement("li")
            let li7 = document.createElement("li")
            let li8 = document.createElement("li")
            let a = document.createElement("a")
            let imagem = document.createElement("img")
            div.setAttribute("id", "div-sections")
            section.setAttribute("id", "section1")
            imagem.setAttribute("id", "imagem1")
            ul.setAttribute("id", "lista1")
            ul.setAttribute("class", "lista")
            imagem.src = arrayObjetos[i].imagem
            a.setAttribute("target", "_blank")
            a.setAttribute("href", arrayObjetos[i].link)
            a.innerHTML += `${arrayObjetos[i].nome.toUpperCase()}`
            li1.appendChild(a)
            li2.innerHTML = `Nome: ${arrayObjetos[i].nome}`
            li3.innerHTML = `Nome real: ${arrayObjetos[i].nomeReal}`
            li4.innerHTML = `Idade: ${arrayObjetos[i].idade}`
            li5.innerHTML = `Altura: ${arrayObjetos[i].altura}`
            li6.innerHTML = `Peso: ${arrayObjetos[i].peso}`
            li7.innerHTML = `História: ${arrayObjetos[i].historico}`
            li8.innerHTML = `Personalidade: ${arrayObjetos[i].personalidade}`
            main.appendChild(div)
            div.appendChild(section)
            section.appendChild(imagem)
            section.appendChild(ul)
            ul.appendChild(li1)
            ul.appendChild(li2)
            ul.appendChild(li3)
            ul.appendChild(li4)
            ul.appendChild(li5)
            ul.appendChild(li6)
            ul.appendChild(li7)
            ul.appendChild(li8)
        }
    }
}

function busca(event) {
    event.preventDefault()
    let input = document.getElementById("input").value.toUpperCase()
    if(input === "") {
        alert("Nenhum objeto encontrado!")
    }else{
        document.getElementById("div-sections").remove()
        buscando(arrayObjetos, input)
    }
   
}
