import React, { useState } from 'react'
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';

const Parent = () => {
const[check,setCheck]=useState(false);
  return (
    <div>
        <FirstChild setCheck = {setCheck}/>
        <SecondChild check = {check}/>

    </div>
  )
}

export default Parent