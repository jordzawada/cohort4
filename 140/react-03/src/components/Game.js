import React from 'react';
import Board from './Board';
import { ThemeContext } from "../ThemeContext.js";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.refreshy = this.refreshy.bind(this);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      currentPlayer:"human",
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    
    if (this.state.currentPlayer==="human") {
      if(true){ //this.state.sqaures[i]===''
        squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
        this.currentPlayer="ai";
        // this.bestMove();
      }
      
    }

  }
  //  bestMove (){
  //   let bestScore=-Infinity;
  //   let bestMove;
  //   for (let i=0;i<3;i++){
  //     for (let j=0;j<3;j++){
  //       if (this.state.squares[i][j]==='' ){
  //         //spot available
  //         this.state.squares[i][j]="ai";
  //         let score = minimax(this.state.squares);
  //         this.state.squares[i][j]='';
  //         if(score> bestScore){
  //           bestScore=score;
  //           bestMove={i,j};  
  //         }
  //       }
  //     }
  //   }
  //   this.state.squares[bestScore.i][bestScore.j]="ai"
  //   this.setState({currentPlayer:"human"});
  // }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  refreshy(){
    this.setState({
      history: [{
      squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true,
    currentPlayer:"human",
    })
  }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });

      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <ThemeContext.Consumer>
        {(context) => {
          const { changeColor } = context;
          const setColor = () => {
            changeColor(this.state.color);
          };
          return (
        <div>
        <h1>Tic-Tac-Toe</h1>
        
        <div className="game">
          <div className="game-board">
            <Board 
            onNewGame={this.refreshy}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)} 
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
        <p>text to change</p>
        <button onClick={setColor}> Click </button>
        </div>
        );
      }}
    </ThemeContext.Consumer>
      );
    }
  }
 
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

        return squares[a];
      }
    }
    return null;
  }

  

  // function minimax(baord){
  //   return 1;
  // }


  export default Game;