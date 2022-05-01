class Game {

    constructor(gameType) {
        this.gameType = gameType
        this.turn = 0
        this.xChoices = []
        this.oChoices = []
    }

    markSquare(event) {
        if (event.target.textContent === 'X' || event.target.textContent === 'O'){
          alert("Error - square is already filled")
        } else {
            if (this.turn % 2 === 0 ) {
                event.target.textContent = 'X'
                this.turn++
                this.xChoices.push(Number(event.target.id))
            } else {
                event.target.textContent = 'O'
                this.turn++
                this.oChoices.push(Number(event.target.id))
            }
        } if (this.turn === 9) {
          alert("Game is over - you tied!")
        }  
        this.checkWin()
      }

    checkWin() {
        this.xChoices.sort((a, b) => a - b)
        this.oChoices.sort((a, b) => a - b)

        let winConditions = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]]

        winConditions.forEach(condition => {
            if (condition.every(square => this.xChoices.includes(square))){
                alert('Player X wins! Please press Reset.')
            } else if (condition.every(square => this.oChoices.includes(square))){
                alert('Player O wins! Please press Reset.')
            } 
        })
    }

    clearBoard() {
        this.turn = 0
        divs.forEach(div => div.textContent = '')
        this.xChoices = []
        this.oChoices = []
    }
}

const game = new Game()

const divs = document.querySelectorAll('div')
divs.forEach(div => div.addEventListener('click', game.markSquare.bind(game)))

document.querySelector('button').addEventListener('click', game.clearBoard.bind(game))

