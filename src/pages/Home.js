import Legal from '../components/Legal.js'
import resume from '../images/icons/folder.png'
import trophy from '../images/icons/trophy.png'
import github from '../images/icons/github.png'
import blueprint from '../images/icons/blueprint.png'
import suitcase from '../images/icons/suitcase.png'
import skills from '../images/icons/pencil.png'
import handshake from '../images/icons/handshake.png'
import love from '../images/icons/love.png'
import PageTitle from '../components/PageTitle.js';
import Box2 from '../components/Box.js'

function Home() {
  const data = {
    options:{
      width: '300px',
      height: '150px'
    },
    dataset: [
    {
      title: 'Resume',
      image: resume,
      link: 'https://drive.google.com/file/d/1zB3OfnVuSAS9MPyQvgu5oMh2aSIClyRr/view?usp=sharing',
      redirect: true
    },
    {
      title: 'Education/Skills',
      image: skills,
      link: '#/Skills'
    },
    {
      title: 'Experience',
      image: suitcase,
      link: '#/Experience'
    },
    {
      title: 'Projects',
      image: blueprint,
      link: '#/Projects'
    },
    {
      title: 'Awards',
      image: trophy,
      link: '#/Awards'
    },
    {
      title: 'GitHub',
      image: github,
      link: 'https://github.com/kakhil2004',
      redirect: true
    },
    {
      title: 'Social Media',
      image: love,
      link: '#/Socials'
    },
    {
      title: 'Attributions',
      image: handshake,
      link: '#/Attributions'
    }
    ]
  }
  return (
    <>
      <PageTitle img={true} title={"Hi, I'm Akhil Kothapalli!"} subtext={'Click on a box to learn more'}/>
      <Box2 data={data}/>
      <Legal/>
    </>
    
  );
}

export default Home;
