import logo from '../imgs/logo.svg';
import React from 'react';
import '../App.css';

export default function Nav() {
    return(
        <nav>
        <a id="navImg" href="https://youtu.be/eBGIQ7ZuuiU" target="_blank" rel="noreferrer"><img src={logo} alt=""/></a>
        <div id="h4" >
            <a class="navLinks" href="/#moi">moi</a>
            <a class="navLinks" href="/#experience">experience</a>
            <button id="h4"><a href="https://drive.google.com/file/d/1hfFTuoNawgP5eAs9LqLvQPMhr4uEKES5/view?usp=sharing" target="_blank" rel="noreferrer">resume</a></button>
        </div>
      </nav>
    )
}
