import React from 'react'
import './FirstChild.css';

const FirstChild = ({setCheck}) => {
    const submit = ()=>{
        setCheck((p)=> !p);//switch the satate
    }
  return (
    <div>
        <button onClick={submit} className=''>click</button>
    </div>
  );
};
    
export default FirstChild