import {useState} from 'react'

const initialBoard=()=> Array(16).fill(null);
const UseTicTacToe=()=>{
    const[board,setBoard]=useState(initialBoard());
    const[isXNext,setIsXNext]=useState(true);
    const WINNING_PATTERNS=[ 
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const calculateWinner=(currentBoard)=>{

        for(let i =0;i<WINNING_PATTERNS.length;i++){
           const[a,b,c] =WINNING_PATTERNS[i];
           if(currentBoard[a] && currentBoard[a]===currentBoard[b] && currentBoard[a]===currentBoard[c]){
            return currentBoard[a];
           }
        }
        return null;  
    };

    const handleClick=(index)=>{;
        //   check winner
        const winner=calculateWinner(board);
        console.log(winner)
        if(winner || board[index])return
            const newBoard=[...board]
            newBoard[index]=isXNext ? 'x': 'o';
            setBoard(newBoard);
            setIsXNext(!isXNext);

    }
    const getStatusMessage=()=>{
        const winner=calculateWinner(board);
        if(winner)
        return `player is  ${winner} wins!`;
    if(!board.includes(null))return `it is a draw !`;
    return `player ${isXNext ? 'X' : '0'} turn`
    };

    const resetGame = ()=>{ 
        setBoard(initialBoard());
                setIsXNext(true);
    };
// send logic in return form 
    return{board, handleClick,calculateWinner, getStatusMessage,resetGame}
}

export default UseTicTacToe;