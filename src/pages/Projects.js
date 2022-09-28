import React from 'react'
import PageTitle from '../components/PageTitle'
import Box from '../components/Box'
import Legal from '../components/Legal'

export const Projects = () => {
    const data = {
        options:{
          width: '600px',
          height: '300px',
          iconSize: 'huge',
          center: true,
          lists:true
        },
        dataset: [
        {
          title: 'Mechatronics Channel - Youtube (2020)',
          image: 'https://yt3.ggpht.com/lwiw_QVy-ah8VXsyQdZMddPuA2g_zzrL2Yu5z9MVmoe9uQfLMiWFZ6Tnkm_Xp2K3hnEux0fi=s88-c-k-c0x00ffffff-no-rj',
          link: 'https://www.youtube.com/channel/UCrhXTVoPMwMAXNTQe8INsZw',
          list :[
            'Showing some projects with Arduinos',
            'People reaching out for help',
            'Over 8000 views',
          ],
          redirect: true
        },
        {
            title: 'Science Olympiad Bot',
            image: 'https://cdn.discordapp.com/avatars/869295988446220379/b08d970aa144b6d0b3dd62bf4f3dfbe4.png?size=240',
            link: 'https://scioly.org/wiki/index.php/Northview_High_School_(Georgia)',
            list :[
              'Checks Science Olympiad site for updates and reports it',
              'Can store data using custom commands',
              'Uses Discord to interact with User'
            ],
            redirect: true
        },
        {
            title: 'Game Development - (Unity/Roblox)',
            image: 'https://tr.rbxcdn.com/74b6acdc8cee3024f6a510a1d6dc517b/352/352/Avatar/Png',
            link: 'https://www.roblox.com/create',
            list :[
              'Learnt game logic, creating models, GUI etc.',
              'Created a game with more than 200k visits',
            ],
            redirect: true
        },
        ]
      }
  return (
    <>
    <PageTitle img={false} title={'Projects'} subtext={'Clicking on some boxes might show a demo!'}/>
    <Box data={data}/>
    <Legal />
    </>
  )
}
