import logo from '../imgs/logo.svg';

import linkedin from '../imgs/socialMedia/linkedin.png';
import email from '../imgs/socialMedia/gmail.png';
import github from '../imgs/socialMedia/github.png';
import devpost from '../imgs/socialMedia/devpost.png';

import moi from '../imgs/moi.png';
import cacty from '../imgs/cacty.svg';
import council from '../imgs/council.svg';

import React, {useState, useEffect} from 'react';

import '../App.css';

function About()  {
    return(
        <div class="App">
<body>
    <div id="socialMedia">
        <a href="https://www.linkedin.com/in/kelly-guan/" target="_blank"><img src={linkedin} alt=""/></a>
        <a href="mailto: kelly.g.guan@gmail.com" target="_blank"><img src={email} alt=""/></a>
        <a href="https://github.com/Kelly-Guan" target="_blank"><img src={github} alt=""/></a>
        <a href="https://devpost.com/KellyGuan" target="_blank"><img src={devpost} alt=""/></a>
      </div>

      <section class="expPage">
        <div id="h1"> <a href="https://www.instagram.com/comodocoding.society/?hl=en" target="_blank" class="title-ccs">Comodo Coding Society</a></div> 
        <div id="text">Mission to help create equal opportunities and representation for all in STEM. I teach programming skills to students across Canada</div>
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
                    <a href="https://www.instagram.com/comodocoding.society/"><img src="social media icons/insta-logo.png" alt=""/></a>
                </div>
            </div>
        </div>
     </section>

    
    <section class="expPageContent">
        <div class="expPageContentCont">
            <div class="expPageContentBox">
                <div class="expPageContentSec">
                    <img src={cacty} alt=""/>
                </div>
                <div class="expPageContentSec">
                    <div id="h2">The Problem</div>
                    <div id="text">
                        <p>
                        I started this club to address the limited opportunities for girls and underrepresentation of females in computer science and engineering.
                        </p> 
                        I personally experienced these issues having no classes or clubs related to the aforementioned fields available at my all-girls school.
                    </div>
                </div>
            </div>

            <div class="expPageContentBox">
                <div class="expPageContentSec">
                    <div id="h2">The Solution</div>
                    <div id="text">
                        <p>
                        I started this club to address the limited opportunities for girls and underrepresentation of females in computer science and engineering.
                        </p> 
                        I personally experienced these issues having no classes or clubs related to the aforementioned fields available at my all-girls school.
                    </div>
                </div>
                <div class="expPageContentSec">
                    <img src={council} alt=""/>
                </div>
            </div>

            <div class="expPageContentBox">
                <div class="expPageContentSec">
                    <ul id="text">
                        <li>Kelly Guan (moi), Co-Founder & Co-President</li>
                        <li>Maria Petersen (the other side of the co-modo), Co-Founder & Co-President</li>
                        <li>Jade Holmes, Marketing Director</li>
                        <li>Pauline Marquez, Membership Engagement Co-Director</li>
                        <li>Saryna Ramsay, Membership Engagement Co-Director</li>
                        <li>Emily Wellwood, Advancement Co-Director</li>
                        <li>Leah Ramsay, Advancement Co-Director</li>
                        <li>JMr. Kenneth Tse, Advisor</li>
                        <li>Mary Guan, Consultant</li>
                    </ul>
                </div>
                <div class="expPageContentSec">
                    <div id="h2">Meet the Team</div>
                    <div id="text">
                        <p>
                        I started this club to address the limited opportunities for girls and underrepresentation of females in computer science and engineering.
                        </p> 
                        I personally experienced these issues having no classes or clubs related to the aforementioned fields available at my all-girls school.
                    </div>
                </div>
            </div>

            <div class="expPageContentBox">
                <div class="expPageContentSec">
                    <div id="h2">My Responsibilities</div>
                </div>
                <div class="expPageContentSec">
                    <div id="text">
                        <p>
                            The majority of my responsibilities fall between internal content and organizing/planning.
                            </p><p>
                            In terms of internal design content, I lead the visual and user experience design of our website and social media; and develop our branding and marketing.
                            </p><p>
                            I also create all of the lessons content and material. I simplify <b>Scratch</b>, <b>Python</b>, <b>HTMl</b>, <b>CSS</b>, <b>Product Design</b> concepts, so it is easily digestible for high school students. I then help teach these concepts to our members 
                            </p><p>
                            Additionally, as the head organizer and planner, I plan our meeting dates, guest speakers, sponsorships, lesson plans, product releases, recruitment and much more! That being said… sign up <a href="https://kellygguan.typeform.com/to/f536FFQW"><b>here </b></a>
                            </p>
                            I manage the Marketing Directors and the Member Engagement Director of our Executive Team
                    </div>
                </div>
            </div>

            <div class="expPageContentBox">
                <div class="expPageContentSec">
                    <div id="h2">Student Notes</div>
                    <div id="text"><p>
                        I create all of the student notes by simplifying complex programming concepts into point form notes for our members to refer to after our lessons . 
                        </p>
                        Check out a few here:
                        <ul>
                            <li><a href="https://docs.google.com/document/d/1M1wiQxX3sBhgryN_P4VABRFOJooCdgV9yERp1dvzRfo/edit?usp=sharing">Scratch L1 Student Notes </a></li>
                            <li><a href="https://docs.google.com/document/d/1-jEstfPB8uMLveUREs7HYfy6jPqe4dROesbhjATllhk/edit?usp=sharing">Python L1 Student Notes</a></li>
                            <li><a href="https://docs.google.com/document/d/1a9ly7KOH6vcYBmnnLa13pUAlyHFQm_MnH39n4BUqdhA/edit?usp=sharing">Python L4 Student Notes </a></li>
                        </ul>
                    </div>
                </div>
                <div class="expPageContentSec">
                    <img src={council} alt=""/>
                </div>
            </div>

            <div class="expPageContentBox">
                <div class="expPageContentSec">
                <img src={council} alt=""/>
                </div>
                <div class="expPageContentSec">
                    <div class="ccs-title" id="h2">Slide Deck</div>
                    <div id="text">
                        <p>
                        My Membership Engagement Directors and I create all of the slide decks. We use the slide decks to help teach the lessons by keeping students engaged. 
                        </p>
                        Check out a few here:
                        <ul>
                            <li><a href="https://docs.google.com/presentation/d/14ZmyAbVVzZm9FgDlxm5P_37nz8cY6YiJi54LqrH7QAw/edit?usp=sharing">Scratch L2 Student Notes </a></li>
                            <li><a href="https://docs.google.com/presentation/d/17du0C6zTvi0AQcvJveUulRyXcaW4O9r4l7RkMLqcoQQ/edit?usp=sharing">Python L1 Slide Deck</a></li>
                            <li><a href="https://docs.google.com/presentation/d/1EwzrUYFCHJoCaywg9jybIEtvR0iwtIQQO-Q1uAYgy14/edit?usp=sharing">Python L4 Slide Deck</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="expPageContentBox">
                <div class="expPageContentSec">
                    <div class="ccs-title" id="h2">Unit Projects</div>
                    <div id="text"><p>
                        After every unit we challenge our members to complete a Unit Project to showcase the skills taught and challenge their knowledge on the topic. Members have complete creative freedom in each project, with the constraints of 5 criterias. 
                        </p>
                        Check out a few of our member’s <b>Scratch Projects</b> here: 
                        <ul>
                            <li>Francesca Galang:<a href="https://scratch.mit.edu/projects/525544504"> Phil’s Fire </a></li>
                            <li>Emily Wellwood:<a href="https://scratch.mit.edu/projects/519189196 ">Dinosaur Game </a></li>
                            <li>Leah Karasavidis:<a href="https://scratch.mit.edu/projects/520935223 ">Trivia Extravaganza </a></li>
                        </ul>
                    </div>
                </div>
                <div class="expPageContentSec">
                    <img src={council} alt=""/> 
                </div>
            </div>

            <div class="expPageContentBox">
                <div class="expPageContentSec">
                    <img src={council} alt=""/>
                </div>
                <div class="expPageContentSec">
                    <div class="ccs-title" id="h2">Biography of the week </div>
                    <div id="text"><p>
                        My Membership Engagement Directors and I create short biographies of women and non-binary people in STEM every week, for our members to relate to those already in the filed. 
                        </p>
                        Check out a few here:
                        <ul>
                            <li><a href="https://docs.google.com/document/d/11SgaXM1NwiJNfCF_BK-ozqluj048eMhOnmyRh8kaKqQ/edit?usp=sharing">Mimi Aung </a></li>
                            <li><a href="https://docs.google.com/document/d/1Eh-v8CwkxbXSRZ3GLvNpnwF4Q0SY_wmFOVBZhzdmSE4/edit?usp=sharing">Erin Teague</a></li>
                            <li><a href="https://docs.google.com/document/d/1G2DnDcxoJGoOjWF05l2av0CVlvYzlcohdW6zCcxMLm8/edit?usp=sharing"> Carol Shaw</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="expPageContentBox">
                <div class="expPageContentSec">
                    <img src={council} alt=""/>
                </div>
                <div class="expPageContentSec">
                    <div id="h2">Thank You!</div>
                    <div id="text">Comodo Coding Society would not be possible without my amazing Co-Founder <a href="https://www.linkedin.com/in/maria-t-petersen/" target="_blank">Maria Petersen</a>, our incredible Marketing Director Jade Holmes, our Advisor Mr. Tse and our moderator Jeanne Petersen. 
                    </div>
                </div>
            </div>
            

        </div>
    </section>  
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
        </div>
        );
    }
export default About;