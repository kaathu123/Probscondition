import React from 'react'
import './SecondChild.css'

const SecondChild = ({check}) => {
  return (
    <div>
        {
            check && <img src="https://uploads.prod01.sydney.platformos.com/instances/260/assets/images/light-bulb.jpg" alt="" className="src" />
        }
    </div>
  )
}

export default SecondChild