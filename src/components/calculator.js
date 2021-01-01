import React from 'react';
import CalcTitle from "./calcTitle";
import OutScreen from './outScreen.js';
import Button from './button.js';



class calculator extends React.Component{
    
    constructor(){
    super(); 
  
    // set our default state 
    this.state = { 
      question: '', 
      answer: ''
    }
  
    // Bind our handleClick method (sets 'this' explicitly 
    // to refer to this componenent) We did this because 'this' 
    // would refer to the source of the click events 
    this.handleClick = this.handleClick.bind(this); 
    }

    // our method to handle all click events from our buttons 
    handleClick(event){ 
    
    // get the value from the target element (button) 
    const value = event.target.value; 
    
    switch (value) { 
        case '=': { 
    
        // if it's an equal sign, use the eval module 
        // to evaluate the question ,convert the answer 
        // (in number) to String 
        if (this.state.question!=='') 
        { 
            var ans=''; 
                try
                { 
                    ans = this.eval(this.state.question); 
                } 
                catch(err) 
                { 
                    this.setState({answer: "Math Error"}); 
                } 
                if (ans===undefined) {
                    this.setState({answer: "Math Error"}); 
                }
                // update answer in our state. 
                else{
                    this.setState({ answer: ans , question: ''});
                } 
                 
            } 
            break;
        } 
        
        case 'Clear': { 
    
        // if it's the Clears sign, just clean our  
        // question and answer in the state 
        this.setState({ question: '', answer: '' }); 
        break; 
        } 
    
        case 'Delete': { 
        var str = this.state.question; 
            str = str.substr(0,str.length-1); 
            this.setState({question: str}); 
            break; 
        } 
    
    default: { 
    
        // for every other command, update the answer in the state 
        this.setState({ question: this.setState.question += value}) 
        break; 
        } 
    } 
    } 


    render(){
        return(
            <div className="frame">
                <CalcTitle value="CALCULATOR" />
                <div className="mainCalc">
                    <OutScreen />
                    <div className="button-row"> 
                        <Button label={'Clear'}/> 
                        <Button label={'Delete'}/> 
                        <Button label={'.'}/> 
                        <Button label={'/'}/> 
                    </div> 
                    <div className="button-row"> 
                        <Button label={'7'}/> 
                        <Button label={'8'}/> 
                        <Button label={'9'}/> 
                        <Button label={'*'}/> 
                    </div> 
                    <div className="button-row"> 
                        <Button label={'4'}/> 
                        <Button label={'5'}/> 
                        <Button label={'6'}/> 
                        <Button label={'-'}/> 
                    </div> 
                    <div className="button-row"> 
                        <Button label={'1'}/> 
                        <Button label={'2'}/> 
                        <Button label={'3'}/> 
                        <Button label={'+'}/> 
                    </div> 
                    <div className="button-row"> 
                        <Button label={'0'}/> 
                        <Button label={'='}/> 
                    </div>
                </div>
            </div>
        );
    }
}

export default calculator;