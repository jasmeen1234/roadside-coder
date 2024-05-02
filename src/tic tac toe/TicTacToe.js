import React from 'react'
import '../App.css'
import UseTicTacToe from './UseTicTacToe'

function TicTacToe() {
    const {board, handleClick, calculateWinner, resetGame, getStatusMessage}=UseTicTacToe();
  
  return (
    <div>
      <div className='status'>
        {getStatusMessage()}
        <button className='reset-button' onClick={resetGame}>Reset Game</button>
      </div>
<div className='board'>
   {board.map((b,index)=>{
    return( 
        <button className='cell'  key={index} onClick={()=>handleClick(index)} disabled={ b!== null} >{b}</button>
    )
   })}


</div>
    </div>
  )
}

export default TicTacToe
