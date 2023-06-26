import React from 'react'

const Box1 = (props) => {
  return (
    <div className={`box ${props.result}`}>
        <h1>{props.title}</h1>
        <img src={props.item &&props.item.img}></img>
        <h2>{props.result}</h2>
    </div>
  )
}

export default Box1