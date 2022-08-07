import React from 'react'
import PropTypes from 'prop-types'
import './box2.css'


const Box2 = props => {
    const options = props.data.options
    const dataset = props.data.dataset
    const box2 = {
        minWidth : options.width,
        minHeight : options.height,
    }
    var iconSize = 'icon'
    if (options.iconSize === 'huge'){
        iconSize = 'bigicon'
    }
  return (
    <div class='boxContainer'>
        {[...Array(dataset.length)].map((elem, index) => 
        <a href={dataset[index].link} target={options.redirect ? '_blank' : ''} rel={options.redirect ? 'noopener noreferrer' : ''}>
        <div class='box2' style={box2}>
            <img id={iconSize} src={dataset[index]['image']} alt="logo"></img>
            <h2 id="title" style={{textAlign: options.center ? 'center' : 'left'}}>{dataset[index]['title']}</h2>
            <ul>
                {options.lists === true && [...Array(dataset[index]['list'].length)].map((elem, index2) => 
                    <li>{dataset[index]['list'][index2]} </li>
                )}
            </ul>
        </div>
        </a>
        )}
        
    </div>
  )
}

Box2.propTypes = {}

export default Box2