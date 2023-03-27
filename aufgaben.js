//ein 8 x 8-Raster mit Zeilenbruch zur Trennung der einzelnen Reihen


for (let counter = 1; counter <= 8; counter++) {
    let et = ' ####'
    let ad = '####'
    if (counter % 2 == 0) {
        console.log(et)
    } else {
        console.log(ad)
    }
}

//minimum

const minimum = (a, b) => {
    if (a > b) {
        return b
    } else if (b > a) {
        return a
    }
}

console.log(minimum(24, 33))


// Dreieck

let jogodavelha = '#'
for (counter = 0; counter < 7; counter++) {
    console.log(jogodavelha)
    jogodavelha = jogodavelha += '#'
}

//Es findet, wie viele B ineinem Wort vorhanden ist.

const findB = (word) => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == 'B') {
            count += 1
        }
    }
    return count
}

console.log(findB('BbbBBBahsj'))


////Es findet, wie viele von einem Buchstabe ineinem Wort vorhanden ist.

const findChar = (word, char) => {
    let count = 0;
    for (let j = 0; j < word.length; j++) {
        if (word[j] == char) {
            count += 1
        }
    }
    return count
}

console.log(findChar('CaioCacsgCCCCC', 'C'))
