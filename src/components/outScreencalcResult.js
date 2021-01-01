import React from 'react';

const OutScreencalcResult = (props)=>{
    return(
        <div className="screen-res">
            <input type="text" readOnly value={props.value}/>
        </div>
    )
}

export default OutScreencalcResult;