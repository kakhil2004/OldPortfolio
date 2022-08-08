import Legal from '../components/Legal.js'
import PageTitle from '../components/PageTitle.js';
import Box from '../components/Box.js';
import github from '../images/icons/github.png'
import resume from '../images/icons/folder.png'
import trophy from '../images/icons/trophy.png'
import blueprint from '../images/icons/blueprint.png'
import suitcase from '../images/icons/suitcase.png'
import skills from '../images/icons/pencil.png'
import handshake from '../images/icons/handshake.png'
import love from '../images/icons/love.png'

function Test() {
  const data = {
    width: '300px',
    height: '150px',
    dataset: [
    {
      title: 'Resume',
      image: resume,
      link: 'https://drive.google.com/file/d/1Vip-qzqGid_2sIiIqoFb0PbDchvcWfN_/view?usp=sharing'
    },
    {
      title: 'Education/Skills',
      image: skills,
      link: 'Skills'
    },
    {
      title: 'Experience',
      image: suitcase,
      link: 'Experience'
    },
    {
      title: 'Projects',
      image: blueprint,
      link: 'Projects'
    },
    {
      title: 'Awards',
      image: trophy,
      link: 'Awards'
    },
    {
      title: 'GitHub',
      image: github,
      link: 'https://github.com/kakhil2004'
    },
    {
      title: 'Social Media',
      image: love,
      link: 'Socials'
    },
    {
      title: 'Attributions',
      image: handshake,
      link: 'Attributions'
    }
  ]}

  return (
    <>
      <PageTitle img={false} title={'Test Page'} subtext={'This is where I test various components!'}/>
      <Box data={data}/>
      <Legal/>
    </>

    
  );
}

export default Test;
