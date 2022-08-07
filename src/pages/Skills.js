import HugeBox from '../components/HugeBox.js'
import Legal from '../components/Legal.js';
import gt from '../images/gt.png'
import nhs from '../images/nhs.png'
import Chart from '../components/Chart.js'
import PageTitle from '../components/PageTitle.js';
import Box2 from '../components/Box2.js';
const techText = "Pursuing a Bachelor's in Computer Science"

function Skills() {
  const data = {
    options : {
      width: '700px',
      height: '300px',
      iconSize:'huge',
      center: true,
      lists:true
    },
    
    dataset : [
      {
        title : 'Georgia Institute Of Technology',
        image : gt,
        link: 'https://www.cc.gatech.edu/',
        list:[
          'Working towards a Bachelors in CS',
          'Planning to become an officer at a MakerSpace'
        ]
      },
      {
        title : 'Northview High School',
        image : nhs,
        link: 'https://www.fultonschools.org/northviewhs',
        list:[
          'Gradutated on May 2022'
        ]
      }
    ]
  }
  return (
    <>
      <PageTitle title={'Education and Skills'} subtext={'Click on a box to learn more'} />
      <Box2 data={data}/>
      <Chart />      
      <Legal />
    </>

    
  );
}

export default Skills;
