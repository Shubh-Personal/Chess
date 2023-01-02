export const BLACK_TEAM = 'BLACK'
export const WHITE_TEAM = 'WHITE'

// valid positions
const hourseValidPositions = (x, y) =>
    [
        x < 6 && y > 0 ? (`${x + 2}, ${y - 1}`) : null,
        x > 1 && y > 0 ? (`${x - 2}, ${y - 1}`) : null,
        y > 1 && x < 7 ? (`${x + 1}, ${y - 2}`) : null,
        y > 1 && x > 0 ? (`${x - 1}, ${y - 2}`) : null,
        x < 6 && y < 7 ? (`${x + 2}, ${y + 1}`) : null,
        x > 1 && y < 7 ? (`${x - 2}, ${y + 1}`) : null,
        y < 6 && x < 6 ? (`${x + 1}, ${y + 2}`) : null,
        y < 6 && x < 6 ? (`${x + 1}, ${y - 2}`) : null
    ]

const camelValidPositions = (x, y) => {
    let validPositions = []
    const tx = x;
    const ty = y;
    while (x > 0 && y > 0) {
        validPositions.push((`${x - 1}, ${y - 1}`));
        x--;
        y--;
    }
    x = tx;
    y = ty;

    while (x < 7 && y < 7) {
        validPositions.push((`${x + 1}, ${y + 1}`));
        x++
        y++
    }
    x = tx;
    y = ty;

    while (x < 7 && y > 0) {
        validPositions.push((`${x + 1}, ${y - 1}`));
        x++
        y--
    }
    x = tx;
    y = ty;

    while (x > 0 && y < 7) {
        validPositions.push((`${x - 1}, ${y + 1}`));
        x--
        y++
    }
    return validPositions
}

const soldierValidPositions = (x, y, team) => [
    (x < 7 & team === BLACK_TEAM) ? (`${x + 1}, ${y}`) : null,
    (x === 1 & team === BLACK_TEAM) ? (`${x + 2}, ${y}`) : null,
    (x > 0 & team === WHITE_TEAM) ? (`${x - 1}, ${y}`) : null,
    (x === 6 & team === WHITE_TEAM) ? (`${x - 2}, ${y}`) : null
]

const elephantValidPositions = (x, y) => {
    let validPositions = []
    const tx = x;
    const ty = y;

    while (x > 0) {
        validPositions.push((`${x - 1}, ${y}`));
        x--
    }
    x = tx
    y = ty

    while (x < 7) {
        validPositions.push((`${x + 1}, ${y}`));
        x++
    }
    x = tx
    y = ty

    while (y > 0) {
        validPositions.push((`${x}, ${y - 1}`));
        y--
    }
    x = tx
    y = ty

    while (y < 7) {
        validPositions.push((`${x}, ${y + 1}`));
        y++
    }
    x = tx
    y = ty

    return validPositions;
}

const queenValidPositions = (x, y) => {
    let validPositions = []
    const tx = x;
    const ty = y;

    while (x > 0) {
        validPositions.push((`${x - 1}, ${y}`));
        x--
    }
    x = tx
    y = ty

    while (x < 7) {
        validPositions.push((`${x + 1}, ${y}`));
        x++
    }
    x = tx
    y = ty

    while (y > 0) {
        validPositions.push((`${x}, ${y - 1}`));
        y--
    }
    x = tx
    y = ty

    while (y < 7) {
        validPositions.push((`${x}, ${y + 1}`));
        y++
    }
    x = tx
    y = ty
    while (x > 0 && y > 0) {
        validPositions.push((`${x - 1}, ${y - 1}`));
        x--;
        y--;
    }
    x = tx;
    y = ty;

    while (x < 7 && y < 7) {
        validPositions.push((`${x + 1}, ${y + 1}`));
        x++
        y++
    }
    x = tx;
    y = ty;

    while (x < 7 && y > 0) {
        validPositions.push((`${x + 1}, ${y - 1}`));
        x++
        y--
    }
    x = tx;
    y = ty;

    while (x > 0 && y < 7) {
        validPositions.push((`${x - 1}, ${y + 1}`));
        x--
        y++
    }
    return validPositions
}

const kingValidPositions = (x, y) => [
    x > 0 ? (`${x - 1}, ${y}`) : null,
    x > 0 && y > 0 ? (`${x - 1}, ${y - 1}`) : null,
    y > 0 ? (`${x}, ${y - 1}`) : null,
    x < 7 ? (`${x + 1}, ${y}`) : null,
    y < 7 ? (`${x}, ${y + 1}`) : null,
    y < 7 && x < 7 ? (`${x + 1}, ${y + 1}`) : null,
    x < 7 && y > 0 ? (`${x + 1}, ${y - 1}`) : null,
    y < 7 && x > 0 ? (`${x - 1}, ${y + 1}`) : null,
]

//PLAYERS
export const CAMEL = {
    name: 'CAMEL',
    posiblePositions: (x, y) => camelValidPositions(x, y)
}

export const HOURSE = {
    name: 'HOURSE',
    posiblePositions: (x, y) => hourseValidPositions(x, y)
}

export const ELEPHANT = {
    name: 'ELEPHANT',
    posiblePositions: (x, y) => elephantValidPositions(x, y)
}

export const SOLDIER = {
    name: 'SOLDIER',
    posiblePositions: (x, y, team) => soldierValidPositions(x, y, team)
}

export const QUEEN = {
    name: 'QUEEN',
    posiblePositions: (x, y) => queenValidPositions(x, y)
}

export const KING = {
    name: 'KING',
    posiblePositions: (x, y) => kingValidPositions(x, y)
}
