import React from 'react';
import './Button.css'
export default function Squares(props) {
  const [button1, setButton1] = React.useState(0);
  const [button2, setButton2] = React.useState(0);
  const [button3, setButton3] = React.useState(0);
  const [button4, setButton4] = React.useState(0);
  const [button5, setButton5] = React.useState(0);
  const button1ref = React.useRef();
  button1ref.current = button1;
  const button2ref = React.useRef();
  button2ref.current = button2;
  const button3ref = React.useRef();
  button3ref.current = button3;
  const button4ref = React.useRef();
  button4ref.current = button4;
  const button5ref = React.useRef();
  button5ref.current = button5;
  var green = [];
  var yellow = [];
  var grey = [];
    for (let i = 0; i < props.greens.length; i++){
        if (props.greens[i].position == 0){
            button1ref.current = 2+66;
        }
        else if (props.greens[i].position == 1){
            button2ref.current = 2+66;
        }
        else if (props.greens[i].position == 2){
            button3ref.current = 2+66;
        }
        else if (props.greens[i].position == 3){
            button4ref.current = 2+66;
        }
        else if (props.greens[i].position == 4){
            button5ref.current = 2+66;
        }
      }
  function one(){
      setButton1(button1+1);
  }
  function two(){
    setButton2(button2+1);
  }
  function three(){
    setButton3(button3+1);
}
function four(){
    setButton4(button4+1);
}
function five(){
    setButton5(button5+1);
}
function another(){
    props.parentCallback2();
}
function handleClick(){
    button1ref.current % 3 == 0 ? grey.push(props.word[0]) : button1ref.current % 3 == 1 ? yellow.push({letter: props.word[0], position: 0}) : green.push({letter: props.word[0], position: 0});
    button2ref.current % 3 == 0 ? grey.push(props.word[1]) : button2ref.current % 3 == 1 ? yellow.push({letter: props.word[1], position: 1}) : green.push({letter: props.word[1], position: 1});
    button3ref.current % 3 == 0 ? grey.push(props.word[2]) : button3ref.current % 3 == 1 ? yellow.push({letter: props.word[2], position: 2}) : green.push({letter: props.word[2], position: 2});
    button4ref.current % 3 == 0 ? grey.push(props.word[3]) : button4ref.current % 3 == 1 ? yellow.push({letter: props.word[3], position: 3}) : green.push({letter: props.word[3], position: 3});
    button5ref.current % 3 == 0 ? grey.push(props.word[4]) : button5ref.current % 3 == 1 ? yellow.push({letter: props.word[4], position: 4}) : green.push({letter: props.word[4], position: 4});
    props.parentCallback({green: green, yellow: yellow, grey: grey});
};
  return <><div className = "container">
      <div>
      <button onClick = {one} className = {button1ref.current % 3 == 0 ? "grey" : button1ref.current % 3 == 1 ? "yellow" : "green"} disabled = {button1ref.current == 68 ? true : false}>{props.word[0].toUpperCase()}</button>
      <button onClick = {two} className = {button2ref.current % 3 == 0 ? "grey" : button2ref.current % 3 == 1 ? "yellow" : "green"} disabled = {button2ref.current == 68 ? true : false}>{props.word[1].toUpperCase()}</button>
      <button onClick = {three} className = {button3ref.current % 3 == 0 ? "grey" : button3ref.current % 3 == 1 ? "yellow" : "green"} disabled = {button3ref.current == 68 ? true : false}>{props.word[2].toUpperCase()}</button>
      <button onClick = {four} className = {button4ref.current % 3 == 0 ? "grey" : button4ref.current % 3 == 1 ? "yellow" : "green"} disabled = {button4ref.current == 68 ? true : false}>{props.word[3].toUpperCase()}</button>
      <button onClick = {five} className = {button5ref.current % 3 == 0 ? "grey" : button5ref.current % 3 == 1 ? "yellow" : "green"} disabled = {button5ref.current == 68 ? true : false}>{props.word[4].toUpperCase()}</button></div>
      <button className = "button-15" onClick = {handleClick}>Done</button>
      <button onClick = {another} className = "button-16">I don't like this word</button>
      <br/><br/>
      {props.id == 1 ? <h4>Or, if you're midway through a game and need help click <a>here!</a></h4> : <></>}
  </div></>;
}
