import logo from '../imgs/logo.png';

import insta from '../imgs/socialMedia/Instagram.png';
import linkedin from '../imgs/socialMedia/linkedin.png';
import email from '../imgs/socialMedia/gmail.png';
import github from '../imgs/socialMedia/github.png';
import devpost from '../imgs/socialMedia/devpost.png';

import ProductLaunch from '../imgs/marketangelo/maProduct.png';
import Product from '../imgs/marketangelo/maSolution.png';
import Problem from '../imgs/marketangelo/Sally With Pencil.png';



import ThankU from '../imgs/thanku.png';

import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import '../App.css';

export default function MarketAngelo() {
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

        <div id="expMain">
         {/* Title*/}
        <section class="expPage">
            <div id="h1"> <a href="https://www.instagram.com/market_angelo/" target="_blank" rel="noreferrer" class="title-marketangelo">MarketAngelo</a></div> 
            <div id="text">Startup dedicated to teaching youth sustainable investing through an interactive gamified learning platform</div>
        </section>
         
        <section class="expPageDesc">
            <div class="expPageDescCont">
                <div class="expPageDescBox">
                    <div id="h4" class="info-section-Title">Timeline</div>
                    <div id="text" class="info-section-Info">Dec 2020 - Present</div>
                </div>
                <div class="expPageDescBox">
                    <div id="h4" class="info-section-Title">Position</div>
                    <div id="text" class="info-section-Info">Co-founder & Co-President</div>
                </div>
                <div class="expPageDescBox">
                    <div id="h4" class="info-section-Title">Tools</div>
                    <div id="text" class="info-section-Info">Figma, HTMl, CSS, Google Suite</div>
                </div>
                <div class="expPageDescBox">
                    <div id="h4" class="info-section-Title">Learn More:</div>
                    <div id="text" class="info-section-Info">
                        <a href="https://www.instagram.com/market_angelo/" target="_blank" rel="noreferrer" ><img src={insta} alt=""/></a>
                    </div>
                </div>
            </div>
        </section>

        <section class="expAd">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qUthldkrTtY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>


        {/* CONTENT */}
        <section class="expPageContent">
            <div class="expPageContentCont">
                {/* PROBLEM */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <img src={Problem} alt=""/>
                    </div>
                    <div class="expPageContentSec">
                        <div id="h2">The Problem</div>
                        <div id="text">
                            Students and young adults view investing solely as a way to turn a profit, overlooking the impact that their investments can have on the <b>enviroment</b>, <b>addressing social</b>concerns, and promoting equitable corporate <b>governance</b> (ESG).                         </div>
                    </div>
                </div> 

                {/* SOLUTION */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <div id="h2">Our Product</div>
                        <div id="text">
                         MarketAngelo is an <b>interactive learning platform</b> which aims to <b>educate youth</b> about the relationship between <b>sustainable investing</b> and pursuing profits. We allow users to discover their ESG values and choose the winning stock in our weekly contests                        </div>
                    </div>
                    <div class="expPageContentSec"> 
                        <img src={Product} alt=""/>
                    </div>
                </div>

                {/* TEAM */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <div id="text">I’m a part of the <b>Technology & Product</b> department (aka TP🧻) :</div>
                        <ul id="text">
                        
                            <li><b>Kelly Guan (moi), Product Designer</b></li>
                            <li>Samuel Lo, Chief Product Officer</li>
                            <li>Jacob Kolyakov, Chief Technology Officer</li>
                            <li>Hash Sharma, Director of Technology</li>
                            <li>Isabelle Gan, Director of Product</li>
                            <li>Kelvin Wu, Frontend Developer</li>
                            <li>Ryan Shum, UX Writer</li>
                            <li>Samantha Lam, Product Advisor</li>
                            <li>Danielle Troung, Technology Advisor</li>
                            <li>Milana Micanovic, Tech & Product Advisor</li>
                        </ul>
                    </div>
                    <div class="expPageContentSec">
                        <div id="h2">Meet the Team</div>
                        <div id="text">
                            Our company is divided into the following departments: Sales, Finance, Marketing, Human Resources, Growth, and <b>Technology & Product</b>                        </div>
                    </div>
                </div>

                {/* RESONSIBILITIES  */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <div id="h2">My Responsibilities</div>
                    </div>
                    <div class="expPageContentSec">
                        <div id="text">
                            As the Product Designer for the Product and Technology team (TP🧻) I developed the user flow, user experience, wireframes, low to hi-fidelity prototypes for our product.
                        </div>
                    </div>
                </div>


                {/* PRODUCT LAUNCH  */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <div class="ccs-title" id="h2">Product Launch</div>
                        <div id="text">
                            Live demo during Pitch It To Win It opening ceremonies, 100 users within the 1st week
                        </div>
                    </div>
                    <div class="expPageContentSec">
                        <img src={ProductLaunch} alt=""/> 
                    </div>
                </div>
                <section class="expAd">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zyJ0A1P-9QU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>

                {/* THANKS  */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <img src={ThankU} alt=""/>
                    </div>
                    <div class="expPageContentSec">
                        <div id="h2">Thank You!</div>
                        <div id="text"> MarketAngelo would not have been possible without our amazing advisors, special shoutout to the TP team and our advisors Samantha Lam, Danielle Troung and Milana Micanovic; and our sponsor Deloitte 
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
            <div id="text">© Feb 2022 Kelly Guan</div>
            </div>
        </section>
        </body> 
        }
        </div>
        );
    }
