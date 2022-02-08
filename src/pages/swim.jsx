import logo from '../imgs/logo.svg';

import linkedin from '../imgs/socialMedia/linkedin.png';
import email from '../imgs/socialMedia/gmail.png';
import github from '../imgs/socialMedia/github.png';
import devpost from '../imgs/socialMedia/devpost.png';

import swim from '../imgs/swim/swim main.png';
import coach from '../imgs/swim/coach.png';


import Heart from '../imgs/thanku.png';



import React, {useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";

import '../App.css';

export default function Swim() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
        setLoading(false)
        }, 2000)
    }, [])

    
    return(
    <div class="loader">
    {
        loading ?
        <div id="loadMe">
          <img id="loaderImg" size={1250} src={logo} loading={loading}/>
        </div>
        :     
    <body>
        <nav id= "backNav">
          <a id="navImg" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img src={logo} alt=""/></a>
          <div id="h4" >
                <a class="navLinks"><Link to="/">back to the past</Link></a>
              <button id="h4" ><a href="https://drive.google.com/file/d/1ezTMjhwMJyGFKOjswkWZ7Zz8pjxofTwW/view" target="_blank">resume</a></button>
          </div>
        </nav>

        <div id="socialMedia">
            <a href="https://www.linkedin.com/in/kelly-guan/" target="_blank"><img src={linkedin} alt=""/></a>
            <a href="mailto: kelly.g.guan@gmail.com" target="_blank"><img src={email} alt=""/></a>
            <a href="https://github.com/Kelly-Guan" target="_blank"><img src={github} alt=""/></a>
            <a href="https://devpost.com/KellyGuan" target="_blank"><img src={devpost} alt=""/></a>
        </div>

        {/* CONTENT */}
        <div id="expMain">

         {/* Title*/}
        <section class="expPage">
            <div id="h1"> <a href="https://www.instagram.com/market_angelo/" target="_blank" class="title-swim">Competitive Swimming</a></div> 
            <div id="text">I currently swim for Crest Swimming in Toronto and I'm a mid-distance swimmer:)</div>
        </section>
         
        <section class="expPageDesc">
            <div class="expPageDescCont">
                <div class="expPageDescBox">
                    <div id="h4" class="info-section-Title">Timeline</div>
                    <div id="text" class="info-section-Info">Sep 2015 - Present</div>
                </div>
                <div class="expPageDescBox">
                    <div id="h4" class="info-section-Title">Position</div>
                    <div id="text" class="info-section-Info">Female Team Captain & Junior Comp Coach</div>
                </div>
                <div class="expPageDescBox">
                    <div id="h4" class="info-section-Title">Location</div>
                    <div id="text" class="info-section-Info"><a href="https://www.instagram.com/crestswimclub/" target="_blank"><b>Crest Swimming</b></a></div>
                </div>
            </div>
        </section>

        {/* CONTENT */}
        <section class="expPageContent">
            <div class="expPageContentCont">
                {/* My Times */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <img src={swim} alt=""/>
                    </div>
                    <div class="expPageContentSec">
                        <div id="h2">My Times</div>
                        <div id="text">
                            <p>
                            I am a mid distance, multi-event swimmer. But my favorite events are probably 200Bk and 200IM. 
                            </p>
                            Swimming Canada <a href="https://www.swimming.ca/en/swimmer/5059654/">Profile</a>:
                            <ul>
                                <li><b>200BK</b> SC: 2:23.49</li>
                                <li><b>200IM</b> SC: 2:24.18</li>
                                <li><b>400IM</b> SC: 5:12.47</li>
                            </ul>
                    </div>
                    </div>
                </div> 

                {/* COACH */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <div id="h2">Jr. Comp Coaching</div>
                        <div id="text">
                            Responsibilites as a Jr. Coach:
                        <ul>
                            <li>Completed 100+ hours of Swimming Canada’s Fundamental Coach training including first aid training, NCCP training and Make Ethical Decisions (MED) training</li>
                            <li>Coached 20+ young swimmers, ages 6-13, proper swimming etiquette and technique in freestyle, butterfly, backstroke, breaststroke, pull, kick, start and back dives</li>
                            <li>Constructed engaging lessons</li>
                            <li>Conducted parent meetings to communicate with swimmer’s parents</li>
                            <li>Provided a safe environment to 20+ young swimmers, ages 6-13, while strictly enforcing pool rules</li>
                        </ul>
                    </div>
                    </div>
                    <div class="expPageContentSec"> 
                        <img src={coach} alt=""/>
                    </div>
                </div>

                
                {/* THANKS  */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <img src={Heart} alt=""/>
                    </div>
                    <div class="expPageContentSec">
                        <div id="h2">Thank You!</div>
                        <div id="text">
                        My journey as a swimmer and coach would not be possible without my amazing family, my fantastic coaches Fred, Che, and AJ and my previous coaches Josh, Andre, Phil, Robbin and Kaylee. And a huge shout out to Crest, my swim club, for all of your support.
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        </div>

        <section id="footer">
            <div id="footerTitle">
            <div id="h3">Thanks for stopping by!</div>
            <div id="text">Feel free to reach out to me, I love meeting new people!😊</div>
            </div>                 
            <div id="footerBottom">
            <div id="text">© May 2021 Kelly Guan</div>
            </div>
        </section>
        </body> 
        }
        </div>
        );
    }
