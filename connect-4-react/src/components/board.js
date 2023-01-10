import React from 'react';
import Square from './square'

export default function Board(props) {
  return <div className="board">
  <div>
      <Square value={props.squares[0]} onClick={()=>{props.onClick(0)}}/>
      <Square value={props.squares[1]} onClick={()=>{props.onClick(1)}}/>
      <Square value={props.squares[2]} onClick={()=>{props.onClick(2)}}/>
      <Square value={props.squares[3]} onClick={()=>{props.onClick(3)}}/>
      <Square value={props.squares[4]} onClick={()=>{props.onClick(4)}}/>
      <Square value={props.squares[5]} onClick={()=>{props.onClick(5)}}/>
      <Square value={props.squares[6]} onClick={()=>{props.onClick(6)}}/>
    </div>
    
    <div>
    
    <Square value={props.squares[7]} onClick={()=>{props.onClick(7)}}/>
    <Square value={props.squares[8]} onClick={()=>{props.onClick(8)}}/>
    <Square value={props.squares[9]} onClick={()=>{props.onClick(9)}}/>
    <Square value={props.squares[10]} onClick={()=>{props.onClick(10)}}/>
    <Square value={props.squares[11]} onClick={()=>{props.onClick(11)}}/>
    <Square value={props.squares[12]} onClick={()=>{props.onClick(12)}}/>
    <Square value={props.squares[13]} onClick={()=>{props.onClick(13)}}/>
</div>
<div>
    
    <Square value={props.squares[14]} onClick={()=>{props.onClick(14)}}/>
    <Square value={props.squares[15]} onClick={()=>{props.onClick(15)}}/>
    <Square value={props.squares[16]} onClick={()=>{props.onClick(16)}}/>
    <Square value={props.squares[17]} onClick={()=>{props.onClick(17)}}/>
    <Square value={props.squares[18]} onClick={()=>{props.onClick(18)}}/>
    <Square value={props.squares[19]} onClick={()=>{props.onClick(19)}}/>
    <Square value={props.squares[20]} onClick={()=>{props.onClick(20)}}/>
</div>
<div>
 
    <Square value={props.squares[21]} onClick={()=>{props.onClick(21)}}/>
    <Square value={props.squares[22]} onClick={()=>{props.onClick(22)}}/>
    <Square value={props.squares[23]} onClick={()=>{props.onClick(23)}}/>
    <Square value={props.squares[24]} onClick={()=>{props.onClick(24)}}/>
    <Square value={props.squares[25]} onClick={()=>{props.onClick(25)}}/>
    <Square value={props.squares[26]} onClick={()=>{props.onClick(26)}}/>
    <Square value={props.squares[27]} onClick={()=>{props.onClick(27)}}/>
</div>
<div>
    
    <Square value={props.squares[28]} onClick={()=>{props.onClick(28)}}/>
    <Square value={props.squares[29]} onClick={()=>{props.onClick(29)}}/>
    <Square value={props.squares[30]} onClick={()=>{props.onClick(30)}}/>
    <Square value={props.squares[31]} onClick={()=>{props.onClick(31)}}/>
    <Square value={props.squares[32]} onClick={()=>{props.onClick(32)}}/>
    <Square value={props.squares[33]} onClick={()=>{props.onClick(33)}}/>
    <Square value={props.squares[34]} onClick={()=>{props.onClick(34)}}/>
</div>
<div>

    <Square value={props.squares[35]} onClick={()=>{props.onClick(35)}}/>
    <Square value={props.squares[36]} onClick={()=>{props.onClick(36)}}/>
    <Square value={props.squares[37]} onClick={()=>{props.onClick(37)}}/>
    <Square value={props.squares[38]} onClick={()=>{props.onClick(38)}}/>
    <Square value={props.squares[39]} onClick={()=>{props.onClick(39)}}/>
    <Square value={props.squares[40]} onClick={()=>{props.onClick(40)}}/>
    <Square value={props.squares[41]} onClick={()=>{props.onClick(41)}}/>
</div>



    </div>
  
}