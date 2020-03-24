import React from 'react';
import playVideo from '..//images/playVideo.jpg';

import { Player } from 'video-react';

function Cell({ video }) {
    
    
       return (
        <div class="cell">
            <h3 class="cellTitle">{video.title}</h3>

            <video width="360" height="280" controls>
                <source src= { video.vidLink } type="video/mp4" />
            </video>

            <h4 class="cellCaption">teacher: {video.teacher}</h4>
        </div>
        );  
    
    
   
  }

export default Cell;