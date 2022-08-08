import Legal from '../components/Legal.js';
import gt from '../images/gt.png'
import nhs from '../images/nhs.png'
import Chart from '../components/Chart.js'
import PageTitle from '../components/PageTitle.js';
import Box from '../components/Box.js';

function Skills() {
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
        title : 'Georgia Institute Of Technology - (Class of 26)',
        image : gt,
        link: 'https://www.cc.gatech.edu/',
        list:[
          'Candidate for Bachelor of Computer Science',
          'Minor in Electrical Engineering',
          'Planning to volunteer at IDC'
        ]
      },
      {
        title : 'Northview High School - (Class of 22)',
        image : nhs,
        link: 'https://www.fultonschools.org/northviewhs',
        list:[
          'Recieved the Engineering Seal',
          'Electrical Head/ Lead Technician for FRC team 1683',
          'Science Olympiad Officer'
        ]
      },
      {
        useOtherElement: <Chart />,
        link: 'Chart'
        
      }
    ]
  }
  return (
    <>
      <PageTitle title={'Education and Skills'} subtext={'Click on a box to learn more'} />
      <Box data={data}/>   
      <Legal />
    </>

    
  );
}

export default Skills;
