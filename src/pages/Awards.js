import PageTitle from '../components/PageTitle.js';
import Box from '../components/Box.js';
import Legal from '../components/Legal.js';
import sw from '../images/solidworks.png'
import cisco from '../images/icons/cisco.png'

function Awards() {
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
            title : 'Second Place Capstone Project - Cisco Externship',
            image : cisco,
            link: 'https://www.cc.gatech.edu/',
            list:[
              'Candidate for Bachelor of Computer Science',
              'Minor in Electrical Engineering',
              'Planning to volunteer at IDC'
            ]
          },
          {
            title : 'Solidworks Associates Certification',
            redirect : true,
            image : sw,
            link: 'https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-CE9TAHD56N',
            list:[
              'Recieved the Engineering Seal',
              'Electrical Head/ Lead Technician for FRC team 1683',
              'Science Olympiad Officer'
            ]
          }
        ]
      }
  return (
    <>
    <PageTitle title={'Education and Skills'} subtext={'Click on a box to learn more'} />
    <Box data={data}/>   
    <Legal />
    </>
  )
}

export default Awards