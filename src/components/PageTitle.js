import React from 'react'
import akhil from '../images/Akhil.png'


const PageTitle = props => {
  return (
    <>
    {props.img === true && 
        <img id="pfp" src={akhil} alt="Akhil"></img>
    }
    <h1 id="maintitle">{props.title}</h1><br></br>
    <p id="clformore">{props.subtext}</p>
    </>
  )
}

PageTitle.propTypes = {}

export default PageTitle