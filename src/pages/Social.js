import React from 'react'
import PageTitle from '../components/PageTitle'
import Box from '../components/Box'
import insta from '../images/icons/insta.png'
import gmail from '../images/icons/gmail.png'
import linkin from '../images/icons/linkedin.png'
import Legal from '../components/Legal'
export const Social = () => {
    const data = {
        options:{
          width: '400px',
          height: '150px',
          iconSize: 'huge',
          center: true
        },
        dataset: [
        {
          title: 'Instagram',
          image: insta,
          link: 'https://www.instagram.com/a.khil.k/',
          redirect: true
        },
        {
          title: 'Email',
          image: gmail,
          link: 'mailto:kakhil2004@gmail.com',
          redirect: true
        },
        {
          title: 'Linked In',
          image: linkin,
          link: 'https://www.linkedin.com/in/akhil-kothapalli-384349216/',
          redirect: true
        }
        ]
      }
  return (
    <>
    <PageTitle img={false} title={'Social Media'} subtext={'Pick an box to reach out to me!'}/>
    <Box data={data}/>
    <Legal />
    </>
  )
}
