import React from 'react';
import './square.css';

export default function Square(props) {
  return <button className="btn box" onClick={props.onClick}>{props.value}</button>;
}