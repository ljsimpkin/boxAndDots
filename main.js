var BOARD = []
var WIDTH = 3

function Cell() {
    this.row = null
    this.col = null

    this.playerColor = 'playerRed'
    this.cellColor = 'hello'

    this.leftBoarder = null
    this.rightBoarder = null
    this.topBoarder = null
    this.bottomBoarder = null
}

function start() {
    displayMessage("Let's play!")
    initBoard()
}

function initBoard() {
    displayMessage("Let's play!")
    buildBoardArray(WIDTH)
    var boardNode = document.getElementsByClassName('board')[0]
    drawBoard(boardNode)
    return true
}

function buildBoardArray(width) {
    for (let i = 0; i < width * width; i++) {
        cell = new Cell()
        cell.row = Math.floor(i / width)
        cell.col = i % width
        BOARD.push(cell)
    }
}

// Draw board based on number of cells and an assumption about how much
// space should be allowed for each cell.
function drawBoard(boardNode) {
    boardNode.style.width = Math.sqrt(BOARD.length) * 85 + 'px'
    BOARD.reduce(cellsToNodes, boardNode)
}

// function cellsToNodes(boardNode, cell) {
//     var cell = document.createElement('div')
//     cell.classList.add('cell')
//     cell.classList.add(cell.playerColor)
//     boardNode.appendChild(cell)
//     return boardNode
// }

function cellsToNodes(boardNode, cell) {
    var cell = document.createElement('div')
    var left = document.createElement('div')
    var right = document.createElement('div')
    var top = document.createElement('div')
    var bottom = document.createElement('div')

    cell.classList.add('cell')
    left.classList.add('cellLeft')
    right.classList.add('cellRight')
    top.classList.add('cellTop')
    bottom.classList.add('cellBottom')

    cell.appendChild(left)
    cell.appendChild(right)
    cell.appendChild(top)
    cell.appendChild(bottom)

    boardNode.appendChild(cell)
    return boardNode
}

// function insideCells() {
//     var left = document.createElement('div')
//     var right = document.createElement('div')
//     var top = document.createElement('div')
//     var bottom = document.createElement('div')

//     left.classList.add('leftCell')
//     right.classList.add('rightCell')
//     top.classList.add('topCell')
//     bottom.classList.add('bottomCell')
// }

function displayMessage(msg, id) {
    document.getElementById(id || 'message').innerHTML = '<p>' + msg + '</p>'
}

window.onload = start()