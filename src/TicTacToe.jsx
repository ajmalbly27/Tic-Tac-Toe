import React, { useState } from "react";
import RenderCell from './RenderCell.jsx';
import './TicTacToe.css';
// import './styles.css';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentUser, setCurrentUser] = useState("X");
    const [winner, setWinner] = useState(null); 

    const handleClick = (index) => {
        if(winner || board[index]){
            return;
        }
        
        const newBoard = [...board];
        newBoard[index] = currentUser;
        setBoard(newBoard);

        setCurrentUser(currentUser === 'X' ? 'O' : 'X');

        calculateWinner(newBoard);
    };

    const calculateWinner = (board) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        for(let i=0; i<lines.length; i++){
            const [a, b, c] = lines[i];
            if(board[a] && board[a] === board[b] && board[a] === board[c]){
                setWinner(board[a]);
                return;
            }
        }
        
        if(!board.includes(null)){
            setWinner('Draw');
        }
    }
    
    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setCurrentUser('X');
        setWinner(null);
    }

    return (
        <div className="tic-tac-toe">
            <div className="board">
                {board.map((cell,index) => <RenderCell board={board} index={index} handleClick={handleClick} key={index}/>)}
            </div>
            {winner && (
                <div className="status">
                    {winner === 'Draw' ? "It's a draw!" : `Player ${winner} wins!`}
                </div>
            )}
            <div>
                <button className="reset-button" onClick={handleReset}>Reset Game</button>
            </div>
        </div>
    )
}

export default TicTacToe;