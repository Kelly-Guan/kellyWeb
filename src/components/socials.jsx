import React from 'react';

import linkedin from '../imgs/socialMedia/linkedin.png';
import email from '../imgs/socialMedia/gmail.png';
import github from '../imgs/socialMedia/github.png';
import devpost from '../imgs/socialMedia/devpost.png';

import '../App.css';

export default function socialMedia() {
    return(
        <div id="socialMedia">
          <a href="https://www.linkedin.com/in/kelly-guan/" target="_blank" rel="noreferrer"><img src={linkedin} alt=""/></a>
          <a href="mailto: kelly.g.guan@gmail.com" target="_blank" rel="noreferrer"><img src={email} alt=""/></a>
          <a href="https://github.com/Kelly-Guan" target="_blank" rel="noreferrer"><img src={github} alt=""/></a>
          <a href="https://www.kellogswords.rocks/" target="_blank" rel="noreferrer"><img src={devpost} alt=""/></a>
        </div>
    )
}
