import React from 'react';
import Square from './square';
import './board.css'

export default function Board(props) {
    return (
        <div className="border">
            <div>
                <Square value={props.row1[0]} onClick={() => { props.onClick(0); }} />
                <Square value={props.row1[1]} onClick={() => {  props.onClick(1); }} />
                <Square value={props.row1[2]} onClick={() => { props.onClick(2); }} />
                <Square value={props.row1[3]} onClick={() => { props.onClick(3); }} />
                <Square value={props.row1[4]} onClick={() => { props.onClick(4); }} />
                <Square value={props.row1[5]} onClick={() => { props.onClick(5); }} />
                <Square value={props.row1[6]} onClick={() => { props.onClick(6); }} />
            </div> 
            <div>
                <Square value={props.row2[0]} onClick={() => { props.onClick(0); }} />
                <Square value={props.row2[1]} onClick={() => { props.onClick(1); }} />
                <Square value={props.row2[2]} onClick={() => { props.onClick(2); }} />
                <Square value={props.row2[3]} onClick={() => { props.onClick(3); }} />
                <Square value={props.row2[4]} onClick={() => { props.onClick(4); }} />
                <Square value={props.row2[5]} onClick={() => { props.onClick(5); }} />
                <Square value={props.row2[6]} onClick={() => { props.onClick(6); }} />
            </div>
            <div>
                <Square value={props.row3[0]} onClick={() => { props.onClick(0); }} />
                <Square value={props.row3[1]} onClick={() => { props.onClick(1); }} />
                <Square value={props.row3[2]} onClick={() => { props.onClick(2); }} />
                <Square value={props.row3[3]} onClick={() => { props.onClick(3); }} />
                <Square value={props.row3[4]} onClick={() => { props.onClick(4); }} />
                <Square value={props.row3[5]} onClick={() => { props.onClick(5); }} />
                <Square value={props.row3[6]} onClick={() => { props.onClick(6); }} />
            </div>
            <div>
                <Square value={props.row4[0]} onClick={() => { props.onClick(0); }} />
                <Square value={props.row4[1]} onClick={() => { props.onClick(1); }} />
                <Square value={props.row4[2]} onClick={() => { props.onClick(2); }} />
                <Square value={props.row4[3]} onClick={() => { props.onClick(3); }} />
                <Square value={props.row4[4]} onClick={() => { props.onClick(4); }} />
                <Square value={props.row4[5]} onClick={() => { props.onClick(5); }} />
                <Square value={props.row4[6]} onClick={() => { props.onClick(6); }} />
            </div>
            <div>
                <Square value={props.row5[0]} onClick={() => { props.onClick(0); }} />
                <Square value={props.row5[1]} onClick={() => { props.onClick(1); }} />
                <Square value={props.row5[2]} onClick={() => { props.onClick(2); }} />
                <Square value={props.row5[3]} onClick={() => { props.onClick(3); }} />
                <Square value={props.row5[4]} onClick={() => { props.onClick(4); }} />
                <Square value={props.row5[5]} onClick={() => { props.onClick(5); }} />
                <Square value={props.row5[6]} onClick={() => { props.onClick(6); }} />
            </div>
            <div>
                <Square value={props.row6[0]} onClick={() => { props.onClick(0); }} />
                <Square value={props.row6[1]} onClick={() => { props.onClick(1); }} />
                <Square value={props.row6[2]} onClick={() => { props.onClick(2); }} />
                <Square value={props.row6[3]} onClick={() => { props.onClick(3); }} />
                <Square value={props.row6[4]} onClick={() => { props.onClick(4); }} />
                <Square value={props.row6[5]} onClick={() => { props.onClick(5); }} />
                <Square value={props.row6[6]} onClick={() => { props.onClick(6); }} />
            </div>
        </div>
    );
}