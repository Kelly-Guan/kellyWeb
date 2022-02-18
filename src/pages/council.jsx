import logo from '../imgs/logo.svg';

import linkedin from '../imgs/socialMedia/linkedin.png';
import email from '../imgs/socialMedia/gmail.png';
import github from '../imgs/socialMedia/github.png';
import devpost from '../imgs/socialMedia/devpost.png';

import GradSweaters from '../imgs/council/gradsweaters.png';
import NDGrads from '../imgs/council/social media.jpg';
import Xmas2020 from '../imgs/council/xmas2020.JPG';
import CurrentCouncil from '../imgs/council.svg';

import Council2019 from '../imgs/council/council2019.png';
import Assemblies from '../imgs/council/assemblies.png';
import Waffle from '../imgs/council/waffle wednesday.png';
import Swap from '../imgs/council/clothing swap.png';
import XMas2019 from '../imgs/council/xmas2019.png';



import React, {useState, useEffect} from 'react';
import {  Link } from "react-router-dom";

import '../App.css';

export default function Council() {
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
          <img id="loaderImg" size={1250} src={logo} loading={loading} alt="load"/>
        </div>
        :     
    <body>
        <nav id= "backNav">
          <a id="navImg" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><img src={logo} alt=""/></a>
          <div id="h4" >
                <a class="navLinks"><Link to="/">back to the past</Link></a>
              <button id="h4" ><a href="https://drive.google.com/file/d/1ezTMjhwMJyGFKOjswkWZ7Zz8pjxofTwW/view" target="_blank" rel="noreferrer">resume</a></button>
          </div>
        </nav>

        <div id="socialMedia">
          <a href="https://www.linkedin.com/in/kelly-guan/" target="_blank" rel="noreferrer"><img src={linkedin} alt=""/></a>
          <a href="mailto: kelly.g.guan@gmail.com" target="_blank" rel="noreferrer"><img src={email} alt=""/></a>
          <a href="https://github.com/Kelly-Guan" target="_blank" rel="noreferrer"><img src={github} alt=""/></a>
          <a href="https://devpost.com/KellyGuan" target="_blank" rel="noreferrer"><img src={devpost} alt=""/></a>
        </div>

        {/* CONTENT */}
        <div id="expMain">

         {/* Title*/}
        <section class="expPage">
            <div id="h1"> <a href="#" class="title-council">Notre Dame High School</a></div> 
        </section>
         
        <section class="expPageDesc">
            <div class="expPageDescCont">
                <div class="expPageDescBox">
                    <div id="h4" class="info-section-Title">Current Student Council</div>
                    <div id="text" class="info-section-Info"><b>President</b></div>
                </div>
                <div class="expPageDescBox">
                    <div id="h4" class="info-section-Title">Prior Student Council</div>
                    <div id="text" class="info-section-Info">Treasurer</div>
                </div>
                <div class="expPageDescBox">
                    <div id="h4" class="info-section-Title">Running Grade Account</div>
                    <div id="text" class="info-section-Info"><a href="https://www.instagram.com/ndgrads_2022/" target="_blank" rel="noreferrer">@ndgrads_2022</a></div>
                </div>
                <div class="expPageDescBox">
                    <div id="h4" class="info-section-Title">School</div>
                    <div id="text" class="info-section-Info"><b>Notre Dame High School</b>, Toronto</div>
                </div>
            </div>
        </section>

        {/* CONTENT */}
        <section class="expPageContent">
            <div class="expPageContentCont">

                {/* CURRENT COUNCIL */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                    <div id="h2">Meet my Current Council</div>
                        <ul id="text">
                            <li><b>Kelly Guan (moi), Co-President</b></li>
                            <li>Eve Valin, Co-President</li>
                            <li>Nancin Yusuf, Vice President </li>
                            <li>Ella Uren, Secretary</li>
                            <li>Ndatila Nakale, Treasurer</li>
                            <li>Bernadene Labio, External Affairs</li>
                            <li>Naomi Abel, Equity, Inclusion, and Diversity Rep</li>
                            <li>Jazzy Wilson-Slater, Gr.12 Rep</li>
                            <li>Kirsten Izellah Pinera, Gr. 11 Rep</li>
                            <li>Dannii Lopez, Gr.10 Rep</li>
                            <li>Makayla Valisno, Gr.9 Rep</li>
                        </ul>
                    </div>
                    <div class="expPageContentSec">
                        <img src={CurrentCouncil} alt="" />
                    </div>
                </div>
                {/* Social Media */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <img src={NDGrads} alt="" />
                    </div>
                    <div class="expPageContentSec">
                        <div id="h2">@ndgrads_2022</div>
                        <div id="text">
                        Recognizing the little moments in life are so precious, I decided to <b>record the life of my senior class through film</b>. I created a social media account with <b>daily posts capturing memorie</b>s made during our final year of high school. The account currently has over <b>220 posts and 400 followers</b>. 
                        </div>
                    </div>
                </div>
                {/* GRAD SWEATERS */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <div id="h2">Grad Sweaters</div>
                        <div id="text">Orangized our <b>Grad Sweaters</b> - Communicated w/ admin, grade (via IG, google classroom, and whatapp)</div>
                    </div>
                    <div class="expPageContentSec">
                        <img src={GradSweaters} alt="" />
                    </div>
                </div>
                {/* Color Day*/}
                <div class="expPageContentBox">
                    <div class="expPageContentSec"> 
                        <iframe src="https://giphy.com/embed/vRrXjOeyCmL5PBpTxm" width="700" height="500" frameBorder="0" class="giphy-embed"></iframe>
                    </div>
                    <div class="expPageContentSec">
                        <div id="h2">Color Day</div>
                        <div id="text">
                            Annual Color Day - 12's: <b>YELLOW YELLOW!!</b>
                        </div>
                    </div>
                </div>
                {/* 5 Days of Xmas  2020*/}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <div id="h2">5 Days of Xmas - 2020</div>
                        <div id="text">
                        Organized and moderated 5 days of Christmas
                        <ol>
                            <li>Ugly Sweater, Photos w/ Santa and Hot Cocoa</li>
                            <li>Toques & Crazy Socks Day and Christmas Kahoot</li>
                            <li>Chrsitmas Character Day and Christmas Karaoke</li>
                            <li>Civvies Day, Photos w/ Santa and Hot Cocoa</li>
                            <li>Red & Green Day, Paper Chain Competition, Winter Activities</li>
                        </ol>
                        </div>
                    </div>
                    <div class="expPageContentSec"> 
                        <img id="xmas2020" src={Xmas2020} alt=""/>
                    </div>
                </div>


                {/* PASTCOUNCIL */}
                <div class="expPageContentBox">
                <div class="expPageContentSec">
                        <img src={Council2019} alt="" />
                    </div>
                    <div class="expPageContentSec">
                    <div id="h2">Meet my 2019-2020 Council</div>
                        <ul id="text">
                            <li><b>Kelly Guan (moi), Treasurer</b></li>
                            <li>Madelyn De Melo, President</li>
                            <li>Patricia Ochere, Vice President</li>
                            <li>Venise Yalda, Secretary</li>
                            <li>Hafeez Gomez, External Affairs Representative</li>
                            <li>Eve Valin, Junior Representative</li>
                            <li>Zhenyi Xie, International Representative</li>
                        </ul>
                    </div>
                </div>
                {/* ASSEMBLIES*/}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <div id="h2">Student Assemblies</div>
                        <div id="text">Planned and performed countless assemblies to build and uplift school spirit</div>
                    </div>
                    <div class="expPageContentSec">
                        <img src={Assemblies} alt=""/>
                    </div>
                </div> 
                {/* Waffle */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec"> 
                        <img src={Waffle} alt=""/>
                    </div>
                    <div class="expPageContentSec">
                        <div id="h2">Waffle Wednesday</div>
                        <div id="text">Invented, organized, and moderated Waffle Wednesday, for students to have an inexpensive snack at lunch</div>
                    </div>
                </div>
                {/* 5 Days of Xmas  */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <div id="h2">5 Days of Xmas - 2019</div>
                        <div id="text">
                        Organized and moderated 5 days of Christmas
                        <ul>
                            <ol>Ugly Sweater and Pictures with Santa</ol>
                            <ol>Karaoke in the Cafeteria</ol>
                            <ol>Door Decorating</ol>
                            <ol>Cookie races in the Cafeteria</ol>
                            <ol>Christmas Assembly</ol>
                        </ul>
                        </div>
                    </div>
                    <div class="expPageContentSec"> 
                        <img src={XMas2019} alt=""/>
                    </div>
                </div>
                {/* Clothing Swap */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <img src={Swap} alt=""/>
                    </div>
                    <div class="expPageContentSec">
                        <div id="h2">Clothing Swap</div>
                        <div id="text">Organized and conducted a school wide Clothing Swap, to engage students and staff to invest in sustainable fashion</div>
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
            <div id="text">© Feb 2022 Kelly Guan</div>
            </div>
        </section>
        </body> 
        }
        </div>
        );
    }
