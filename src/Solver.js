import React, { useMemo } from 'react'
import "./Button.css";
import { WordleList } from "./WordleList";

export default function Solver() {
    const [ind, setInd] = React.useState(0);
    const indRef = React.useRef();
    indRef.current = ind;
    const inputRefs = useMemo(() => Array(26).fill(0).map(i=> React.createRef()), []);
    const inputRefs2 = useMemo(() => Array(5).fill(false).map(i=> React.createRef()), []);
    const handleChange = index => (e) => {
    // console.log(e.target.value)
    if (e.target.value.length !== 0){
      if (inputRefs[index + 1]){
        setInd(index+1);
        inputRefs[index + 1].current.focus();
        console.log(`${index+1} is now highlighted`)
      } 
    }
    function sel(){
      console.log('hi')
    }
}
return (
  <div className="center">
    <div className="container">
      <table className="wordle-table">
        <tbody>
        <input ref = {inputRefs[25]}
    onKeyDown={(e) => {
      if (e.key === 'Backspace'){
        setInd(24);
        inputRefs[24].current.focus();
        console.log(`${24} is highlighted now.`)
      }
    }}
    style = {{width: "0%", height: "0%", padding: "0", border: "none"}}
    maxLength = "1" />
          <tr>
            <td className= {indRef.current == 0 ? `invalid grey` : `grey`}>
              <input
              autoFocus = {true}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace'){
                    console.log('hi')
                  }
                  // else{
                  //   console.log('yes');
                  //   inputRefs[1].current.focus();
                  //   console.log(`${1} is now highlighted`)
                  // }
                }}
                onChange = {handleChange(0)}
                maxLength = "1"
                className="letter"
                type="text"
                ref={inputRefs[0]}/>
            </td>
            {new Array(4).fill(0).map((inp, index) => (
            <td className=  {indRef.current == index+1 ? `invalid grey` : `grey`}>
              <input
                maxLength = "1"
                className="letter"
                type="text"
                onKeyDown={(e) => {
                  if (e.key === 'Backspace'){
                    setInd(index);
                    inputRefs[index].current.focus();
                    console.log(`${index} is highlighted now.`)
                  }
                  // else{
                  //   console.log('yes');
                  //   inputRefs[1].current.focus();
                  //   console.log(`${1} is now highlighted`)
                  // }
                }}
                onChange = {handleChange(index+1)}
                ref={inputRefs[index+1]}
              />
              </td>
            ))}
          </tr>
          <tr>
          {new Array(5).fill(0).map((inp, index) => (
            <td className=  {indRef.current == index+5 ? `invalid grey` : `grey`}>
              <input
                maxLength = "1"
                className="letter"
                type="text"
                onKeyDown={(e) => {
                  if (e.key === 'Backspace'){
                    setInd(index+4);
                    inputRefs[index+4].current.focus();
                    console.log(`${index} is highlighted now.`)
                  }
                  // else{
                  //   console.log('yes');
                  //   inputRefs[1].current.focus();
                  //   console.log(`${1} is now highlighted`)
                  // }
                }}
                onChange = {handleChange(index+5)}
                ref={inputRefs[index+5]}
              />
              </td>
            ))}
          </tr>
          <tr>
          {new Array(5).fill(0).map((inp, index) => (
            <td className=  {indRef.current == index+10 ? `invalid grey` : `grey`}>
              <input
                maxLength = "1"
                className="letter"
                type="text"
                onKeyDown={(e) => {
                  if (e.key === 'Backspace'){
                    setInd(index+9);
                    inputRefs[index+9].current.focus();
                    console.log(`${index} is highlighted now.`)
                  }
                  // else{
                  //   console.log('yes');
                  //   inputRefs[1].current.focus();
                  //   console.log(`${1} is now highlighted`)
                  // }
                }}
                onChange = {handleChange(index+10)}
                ref={inputRefs[index+10]}
              />
              </td>
            ))}
          </tr>
          <tr>
          {new Array(5).fill(0).map((inp, index) => (
            <td className=  {indRef.current == index+15 ? `invalid grey` : `grey`}>
              <input
                maxLength = "1"
                className="letter"
                type="text"
                onKeyDown={(e) => {
                  if (e.key === 'Backspace'){
                    setInd(index+14);
                    inputRefs[index+14].current.focus();
                    console.log(`${index} is highlighted now.`)
                  }
                  // else{
                  //   console.log('yes');
                  //   inputRefs[1].current.focus();
                  //   console.log(`${1} is now highlighted`)
                  // }
                }}
                onChange = {handleChange(index+15)}
                ref={inputRefs[index+15]}
              />
              </td>
            ))}
          </tr>
          <tr>
          {new Array(5).fill(0).map((inp, index) => (
            <td className=  {indRef.current == index+20 ? `invalid grey` : `grey`}>
              <input
                maxLength = "1"
                className="letter"
                type="text"
                onKeyDown={(e) => {
                  if (e.key === 'Backspace'){
                    setInd(index+19);
                    inputRefs[index+19].current.focus();
                    console.log(`${index} is highlighted now.`)
                  }
                  // else{
                  //   console.log('yes');
                  //   inputRefs[1].current.focus();
                  //   console.log(`${1} is now highlighted`)
                  // }
                }}
                onChange = {handleChange(index+20)}
                ref={inputRefs[index+20]}
              />
              </td>
            ))}
          </tr>
          <input
    style = {{width: "0%", height: "0%", padding: "0", border: "none"}}
    />
        </tbody>
        
      </table>
    </div>
  </div>
);
}
