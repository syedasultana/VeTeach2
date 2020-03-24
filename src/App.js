import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Cell from './components/Cell'
import { Table } from 'semantic-ui-react';
import veLogo from './images/veLogo.svg';
import Meditation from './videos/Meditation.mp4'
import Forro from './videos/Forro.mp4'
import ImprovisedInstantRamen from './videos/ImprovisedInstantRamen.mp4'
import ClickbaitLight from './videos/ClickbaitLight.mp4'
import SwedishLanguageClass from './videos/SwedishLanguageClass.mp4'
import SaraChohan from './videos/SaraChohan.mp4'
import SkySportsVideo from './videos/SkySportsVideo.mp4'

const videos = [
  {
    title: 'The Basic Steps of Forro',
    vidLink: Forro,
    teacher: 'Jaz Outerbridge'
  },
  {
    title: 'The Basics of Meditation',
    vidLink: Meditation,
    teacher: 'Monti Berlanga'
  },
  {
    title: 'How to make a Clickbait Thumbnail for YouTube',
    vidLink: ClickbaitLight,
    teacher: 'Syeda Sultana'
  },
  {
    title: 'Improvised Instant Ramen (Cornovirus Edition)',
    vidLink: ImprovisedInstantRamen,
    teacher: 'Alison Lam'
  },
  {
    title: 'Insights of Modern Piracy',
    vidLink: SkySportsVideo,
    teacher: 'Avin Dulku'
  },
  {
    title: 'Baby Shark Dance',
    vidLink: SaraChohan,
    teacher: 'Sara Chohan... well her daughter'
  },
  {
    title: 'Swedish Language Class',
    vidLink: SwedishLanguageClass,
    teacher: 'Hanna Ahlqvist'
  }
  // {
  //   title: 'How to....',
  //   vidLink: '',
  //   teacher: 'Goda Zelvyte'
  // },
  ,
  // {
  //   title: 'How to....',
  //   vidLink: '',
  //   teacher: 'Yuki Fung'
  // },
  // {
  //   title: 'How to....',
  //   vidLink: '',
  //   teacher: 'Juan Nunez'
  // },
  // {
  //   title: 'How to....',
  //   vidLink: '',
  //   teacher: 'Maruta Kiyonaga'
  // },
  // {
  //   title: 'How to....',
  //   vidLink: '',
  //   teacher: 'Mattias Gustavsson'
  // },
  // {
  //   title: 'How to....',
  //   vidLink: '',
  //   teacher: 'Mohi Uddin'
  // },
  // {
  //   title: 'How to....',
  //   vidLink: '',
  //   teacher: 'Patricia Franco Gómez'
  // },
  // {
  //   title: 'How to....',
  //   vidLink: '',
  //   teacher: 'Sara Chohan'
  // },
  // {
  //   title: 'How to....',
  //   vidLink: '',
  //   teacher: 'Trevor Pope-Ellis'
  // },
  // {
  //   title: 'How to....',
  //   vidLink: '',
  //   teacher: 'Will Goulstone'
  // }
]


function App() {
  return (
    <div>
      <div class="header">
        <img src={veLogo} height="150" width="150" class="veLogo"/>
        <Header />
      </div>
     
      <div class="container2">
        <div class="box1of2"></div>
        <div class="box2of2">
          
          <div class="container1">
            <div class="box1"></div>
            <div class="box2"> 
                <h2 class="gridHeading">The Curriculum</h2>       
                <Table celled>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                              <Cell video={videos[0]} />
                            </Table.Cell>
                            <Table.Cell>
                              <Cell video={videos[1]} />
                            </Table.Cell>
                            <Table.Cell>
                              <Cell video={videos[2]} />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                              <Cell video={videos[3]} />
                            </Table.Cell>
                            <Table.Cell>
                              <Cell video={videos[4]} />
                            </Table.Cell>
                            <Table.Cell>
                              <Cell video={videos[5]} />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                              <Cell video={videos[6]} />
                            </Table.Cell>
                            {/* <Table.Cell>
                              <Cell video={videos[7]} />
                            </Table.Cell>
                            <Table.Cell>
                              <Cell video={videos[8]} />
                            </Table.Cell> */}
                        </Table.Row>
                        {/* <Table.Row>
                            <Table.Cell>
                              <Cell video={videos[9]} />
                            </Table.Cell>
                            <Table.Cell>
                              <Cell video={videos[10]} />
                            </Table.Cell>
                            <Table.Cell>
                              <Cell video={videos[11]} />
                            </Table.Cell>
                        </Table.Row> */}
                        {/* <Table.Row>
                            <Table.Cell>
                              <Cell video={videos[12]} />
                            </Table.Cell>
                            <Table.Cell>
                              <Cell video={videos[13]} />
                            </Table.Cell>
                            <Table.Cell>
                              <Cell video={videos[14]} />
                            </Table.Cell>
                        </Table.Row> */}
                        {/* <Table.Row>
                            <Table.Cell>
                              <Cell video={videos[15]} />
                            </Table.Cell>
                            <Table.Cell>
                              <Cell video={videos[16]} />
                            </Table.Cell>
                            <Table.Cell>
                              <Cell video={videos[11]} />
                            </Table.Cell>
                        </Table.Row> */}
                        
                    </Table.Body>
                </Table>
            </div>
            <div class="box3"></div>
          </div>
        </div>
        <div class="box3of2"></div>
      </div>
    </div>
  );
}

export default App;
