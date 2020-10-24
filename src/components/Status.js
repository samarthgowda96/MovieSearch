import React, {useState} from 'react';

function Status(){
    const [stat, setStat] = useState('50 %')
    return(
        <div>
            <h1>Status: {stat}</h1>
            <button className='button' onClick={()=>setStat('100%')}>Exhausted :P</button>
        </div>
    )

}
export default Status;