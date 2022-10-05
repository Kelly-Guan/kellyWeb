import logo from '../imgs/logo.svg';

import swim from '../imgs/swim/swim main.png';
import coach from '../imgs/swim/coach.png';
import Heart from '../imgs/thanku.png';



import React, {useState, useEffect} from 'react';
import Nav from '../components/nav';
import SocialMedia from '../components/socials';
import Footer from '../components/footer';


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
          <img id="loaderImg" size={1250} src={logo} loading={loading} alt="rockhands" />
        </div>
        :     
    <body>
        <Nav />
        <SocialMedia />
        
        {/* CONTENT */}
        <div id="expMain">

         {/* Title*/}
        <section class="expPage">
            <div id="h1"> <a href="#"  class="title-swim">Competitive Swimming</a></div> 
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
                    <div id="text" class="info-section-Info"><a href="https://www.instagram.com/crestswimclub/" target="_blank" rel="noreferrer"><b>Crest Swimming</b></a></div>
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
                            Swimming Canada <a href="https://www.swimming.ca/en/swimmer/5059654/" target="_blank" rel="noreferrer">Profile</a>:
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

        <Footer />
        </body> 
        }
        </div>
        );
    }
