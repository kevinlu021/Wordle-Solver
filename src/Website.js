import {WordleList} from './WordleList';
import React, { Component } from 'react';
import Squares from './Squares';
import img from './background.jpeg';
export default class Website extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            green: [], 
            yellow: [],
            grey: [], 
            nextWord: "crate",
            initialList: WordleList,
            list: [],
            error: false,
            first: true
        };
    }
    setCharAt = (str,index,chr) => {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }
    chooseWord = () => {
        this.setState({first: false});
        if (this.state.count == 0){
            this.setState({nextWord: WordleList[Math.floor(Math.random()*WordleList.length)]});
        }
        else {
            if (this.state.list.length == 0){
                this.setState({error: true});
            }
            else {
                this.setState({nextWord: this.state.list[Math.floor(Math.random()*this.state.list.length)]})
            }
        }
    }
    handleCallback = (childData) => {
        this.setState({count: this.state.count+1});
        this.setState(prevState => ({
            grey: [...prevState.grey, ...childData.grey]
            }), this.setYellow(childData))
    }
    setYellow = (childData) => {
        this.setState({yellow: childData.yellow}, this.setGreen(childData));
    }
    setGreen = (childData) => {
        this.setState(prevState => ({
            green: [...prevState.green, ...childData.green]
        }), this.findWord)
    }
    findWord = () => {
        this.setState({list: []})
        // console.log(this.state.green)
        // console.log(this.state.grey)
        // console.log(this.state.yellow)
        var cont = true;
        for (let i = 0; i < WordleList.length; i++){
            var good = true;
            var string = WordleList[i];
            for (let j = 0; j < this.state.green.length; j++){
                if (!(this.state.green[j].letter == WordleList[i][this.state.green[j].position])){
                    good = false;
                }
            }
            for (let x = 0; x < this.state.grey.length; x++){
                for (let j = 0; j < this.state.green.length; j++){
                    if (this.state.green[j].letter == WordleList[i][this.state.green[j].position]){
                        string = this.setCharAt(string,this.state.green[j].position,'$');
                        // console.log(`${string} but in reality it is ${WordleList[i]}`);
                    }
                }  
                if (string.includes(this.state.grey[x]) && this.state.yellow.filter(e => e.letter == this.state.grey[x]).length == 0) good = false;
            }
            for (let y = 0; y < this.state.yellow.length; y++){
                if (!(WordleList[i].includes(this.state.yellow[y].letter) && WordleList[i][this.state.yellow[y].position] != this.state.yellow[y].letter)){
                    good = false;
                }
            }
            if (good && cont){
                console.log(WordleList[i])
                this.setState({nextWord: WordleList[i]});
                cont = false;
                continue;
            }
            if (good && !cont){
                this.setState(prevState => ({
                    list: [...prevState.list, WordleList[i]]
                    }))
                    // console.log(this.state.list)
            }
        }
    }
    render() {
      return(<>
        <div style={{ 
            height: '100vh',
            backgroundImage: "url('https://wallpaperaccess.com/full/112906.jpg')",
            backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: 0.50
          }}>
              </div>
          <div className = "center" > 
        <div>
        {this.state.count == 0 ? <><h1>Let's solve wordle together!</h1><h2>First, enter the word {this.state.nextWord}.</h2>
        <p>Click each tile to match the colors and click "done" once you're ready.</p></> : this.state.count > 0 && this.state.count <= 6 && this.state.first ? <h1>First match was {this.state.nextWord}!</h1> : this.state.count > 0 && this.state.count <= 6 ? <h1>Try {this.state.nextWord}!</h1> : <></>}
        {this.state.error ? <p>Sorry, this is the only option.</p> : <></>}
        </div>
        <div>
          {this.state.count == 0 ? <Squares greens = {this.state.green} id = {1} word = {this.state.nextWord} parentCallback2 = {this.chooseWord} parentCallback={this.handleCallback}></Squares> : <></>}
          {this.state.count == 1 ? <Squares greens = {this.state.green} word = {this.state.nextWord} parentCallback2 = {this.chooseWord} parentCallback={this.handleCallback}></Squares> : <></>}
          {this.state.count == 2 ? <Squares greens = {this.state.green} word = {this.state.nextWord} parentCallback2 = {this.chooseWord} parentCallback={this.handleCallback}></Squares> : <></>}
          {this.state.count == 3 ? <Squares greens = {this.state.green} word = {this.state.nextWord} parentCallback2 = {this.chooseWord} parentCallback={this.handleCallback}></Squares> : <></>}
          {this.state.count == 4 ? <Squares greens = {this.state.green} word = {this.state.nextWord} parentCallback2 = {this.chooseWord} parentCallback={this.handleCallback}></Squares> : <></>}
          {this.state.count == 5 ? <Squares greens = {this.state.green} word = {this.state.nextWord} parentCallback2 = {this.chooseWord} parentCallback={this.handleCallback}></Squares> : <></>}
          
        </div>
        </div></>
      );
    }
  }