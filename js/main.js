const divs = document.querySelectorAll('div')
const arr = divs.forEach(div => {
  div.addEventListener('click', markSquare)
})

document.querySelector('button').addEventListener('click', clearBoard)

let turn = 0
let xChoices = []
let oChoices = []

function markSquare(event) {
  if(event.target.textContent === 'X' || event.target.textContent === 'O'){
    alert("Error - square is already filled")
  }else{
    if(turn % 2 === 0 ){
      event.target.textContent = 'X'
      turn++
      xChoices.push(Number(event.target.id))
    }else{
      event.target.textContent = 'O'
      turn++
      oChoices.push(Number(event.target.id))
    }
  }if(turn === 9){
    alert("Game is over - you tied")
  }  
  checkWin()
}


function checkWin (){
  xChoices.sort((a,b) => a-b)
  oChoices.sort((x,y) => x-y)
  for (let i = 0; i < winConditions.win.length; i++) {
    if(winConditions.win[i].every(el => xChoices.includes(el))){
      alert('Player X wins! Please press Reset')
    }else if(winConditions.win[i].every(el => oChoices.includes(el))){
      alert('Player O wins! Please press Reset')
    } 
    }
  }

const winConditions = {
  win: [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]]
}

function clearBoard(){
  turn = 2
  divs.forEach(div => div.textContent = '')
  xChoices = []
  oChoices = []
}