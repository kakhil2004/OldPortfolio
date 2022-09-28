import React from 'react'
import akhil from '../images/Akhil.png'
import {isMobile} from 'react-device-detect';

const PageTitle = props => {
  console.log(isMobile)
  return (
    <>
    {props.img === true && 
        <img id="pfp" src={akhil} alt="Akhil"></img>
    }
    <h1 id="maintitle">{props.title}</h1><br></br>
    <p id="clformore">{props.subtext}</p>
    {isMobile === true &&
      <p id="clformore">{"Please put your phone in landscape mode!"}</p>
    }
    </>
  )
}

PageTitle.propTypes = {}

export default PageTitle