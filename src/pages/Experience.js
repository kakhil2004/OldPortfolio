import React from 'react'
import PageTitle from '../components/PageTitle'
import Box from '../components/Box'
import Cisco from '../images/icons/cisco.png'
import agcoImg from '../images/AGCO.jpeg'
import AGCO from '../images/icons/acgo.png'
import eotd from '../images/eotd.jpg'
import Legal from '../components/Legal'

export const Experience = () => {
    const data = {
        options : {
          width: '600px',
          height: '300px',
          iconSize:'huge',
          center: true,
          lists:true
        },
        
        dataset : [
          {
            title : 'Cisco High Externship Program - (2021)',
            image : Cisco,
            link: 'https://www.cc.gatech.edu/',
            list:[
              'Selected from hundreds of candidates',
              'Recieved Extern of the Day',
              'Second place in Capstone Project'
            ],
            descImage : eotd
          },
          {
            title : 'AGCO - FRC Team (2021)',
            image : AGCO,
            link: 'https://www.fultonschools.org/northviewhs',
            list:[
              'Recieved the Engineering Seal',
              'Electrical Head/ Lead Technician for FRC team 1683',
              'Science Olympiad Officer'
            ],
            descImage : agcoImg
          }
        ]
      }
  return (
    <>
        <PageTitle title="Experience" subtext="Some experiences with companies"/>
        <Box data={data}/>
        <Legal />
    </>
  )
}
