import React from 'react';
import OutScreencalcResult from './outScreencalcResult';

const OutScreen = (props)=>{
    return(
        <div className="screen">
            <OutScreencalcResult value={props.question}/>
            <OutScreencalcResult value={props.answer}/>            
        </div>
    )
}

export default OutScreen;