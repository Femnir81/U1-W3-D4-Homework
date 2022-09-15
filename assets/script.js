let saluto = 'Ciao a tutti'
console.log(`${saluto}`)

let salutoUp = saluto.toUpperCase()
console.log(`Questo è maiuscolo: ${salutoUp}`)

let salutoDown = saluto.toLowerCase()
console.log(`Questo è minuscolo: ${salutoDown}`)

let salutoSplit1 = saluto.split()
console.log(salutoSplit1)

let salutoSplit2 = saluto.split("")
console.log(salutoSplit2)

let salutoSplit3 = saluto.split(" ")
console.log(salutoSplit3)

console.log(`${salutoSplit3[0]} ${salutoSplit3[2]}`)

let persone = ['Cristiano', 'Gaia', 'Giuseppe', 'Luca']
console.log(`${persone}`)

console.log(`${persone[2]}`)

persone[4] = 'Lidia'
console.log(`${persone}`)


function generePersona() {
    let personeRandom = persone[Math.round(Math.random()*(5-1))]
    if (personeRandom === persone[1] || personeRandom === persone[4]) {
        document.getElementById('result').innerHTML = `${personeRandom} è una femminuccia`
    }
    else {
        document.getElementById('result').innerHTML = `${personeRandom} è un maschietto`
    }
    console.log(persone)
}

