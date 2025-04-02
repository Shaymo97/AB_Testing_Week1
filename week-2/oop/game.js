let prompt;
try {
    prompt = require('prompt-sync')();
} catch (e) {
    console.log("prompt-sync is not installed. Run `npm i prompt-sync` to download it.");
    process.exit(1);
}

class Player {
    static move = ['rock','paper','scissors']

    constructor(name) {
        this.name = name
    }
}


class HumanPlayer extends Player {
    constructor(name, userMove) {
        super(name)
        this.move = userMove
    }
}

class ComputerPlayer extends Player {
    constructor() {
        super("computer")
    }

    computerMove() {
        let index = Math.floor(Math.random() * 3)
        return Player.move[index]
    }
}

class Game {

    constructor() {
        this.playerScore = 0
        this.computerScore = 0
    }
    
    startGame() {
        console.log('\x1b[33m%s\x1b[0m',"It's time to play the gaaaaaaame! To see the game rules, enter 'rules'. To quit the game enter 'quit'")
        let userName = prompt("What's your name? ")
        while(true) {
            let userMove = prompt(`Enter rock / paper / scissors: `).toLowerCase();
            
            if (userMove === "quit") {
                break
            }

            if(userMove === "rules") {
                console.log('\x1b[33m%s\x1b[0m',"The rules of the game are simple: Input either rock / paper / scissors. The computer will also input a move.")
                console.log('\x1b[33m%s\x1b[0m',"Rock beats scissors, scissors beats paper and paper beats rock.")
                console.log('\x1b[33m%s\x1b[0m',"If you want to quit the game, type in 'quit'.")
                continue
            }

            if(!Player.move.includes(userMove)){
                console.log("Invalid move")
                continue
            }

            let human = new HumanPlayer(userName, userMove)
            let computer = new ComputerPlayer()
            let computerMove = computer.computerMove()

            console.log(`The computer's move is ${computerMove}`)
            
            if(human.move === computerMove) {
                console.log('\x1b[33m%s\x1b[0m',"Draw")
            } else if (
                (human.move === "rock" && computerMove === "scissors") || 
                (human.move === "paper" && computerMove  === "rock") || 
                (human.move === "scissors" && computerMove  === "paper"))
                {
                    console.log('\x1b[32m%s\x1b[0m',`${userName} wins!`)
                    this.playerScore++     
                }   else {
                    console.log('\x1b[31m%s\x1b[0m',"Computer wins!")
                    this.computerScore++
                }
                console.log(`The score is: ${userName} ${this.playerScore} - ${this.computerScore} Computer`)
                console.log(`__________________________________________________________`)
            } 
        }
    }


game = new Game()
game.startGame()



/**
 * Create 3 classes for player, humanplayer and computerplayer
 * Create a `Game` class that handles game logic
 * I want to be able to inpiut into HumanPlayer a move - Either rock/ scissors / paper
 * The computer will also randomly choose a move
 * If HumanPlayer chooses rock and Computer chooses scissors, human wins.
 * 
 * '\x1b[33m%s\x1b[0m' - This changes the colour of the text
 * \x1b is an escape sequence. Essentially I've used this to escape the standard terminal output.
 * This is followed by [33m which is a colour code
 * Followed by %s which is where the string that follows this code sits.   
 * \x1b[0m'
 */