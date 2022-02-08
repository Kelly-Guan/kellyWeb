import logo from '../imgs/logo.svg';

import linkedin from '../imgs/socialMedia/linkedin.png';
import email from '../imgs/socialMedia/gmail.png';
import github from '../imgs/socialMedia/github.png';
import devpost from '../imgs/socialMedia/devpost.png';

import problem from '../imgs/ccs/problem.png';
import ccsLogo from '../imgs/ccs/ccsLogo.png';
import StudentNotes from '../imgs/ccs/student notes.png';
import SlideDeck from '../imgs/ccs/SlideDeck.png';
import Biography from '../imgs/ccs/biography.png';

import Heart from '../imgs/thanku.png';



import React, {useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";

import '../App.css';

export default function CCS() {
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
            <div id="h1"> <a href="https://www.instagram.com/market_angelo/" target="_blank" class="title-ccs">Comodo Coding Society</a></div> 
            <div id="text">Mission to empower young female students with the skills and confidence needed to excel in STEM</div>
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

        {/* CONTENT */}
        <section class="expPageContent">
            <div class="expPageContentCont">
                {/* PROBLEM */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <img src={problem} alt=""/>
                    </div>
                    <div class="expPageContentSec">
                        <div id="h2">The Problem</div>
                        <div id="text">
                            <p>
                            Established club to address the <b>limited opportunities for girls</b> and underrepresentation of females in <b>computer science and engineering</b>.
                            </p>
                            <p>Personally experienced these issues having no classes or clubs related to the aforementioned fields available at my all-girls school.</p>
                    </div>
                    </div>
                </div> 

                {/* SOLUTION */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <div id="h2">Our Product</div>
                        <div id="text">
                        We provide high school students in <b>Canada & USA</b> with the opportunity to:
                        <ul>
                            <li>Attend <b>free</b> weekly group lessons</li>
                            <li>Gain a comprehensive skill set in & an understanding in <b>Scratch, HTML, CSS, C, Python, and Java</b>, <b>engineering design</b> and <b>Product Design</b></li>
                            <li>Learn from university students and professionals at our <b>Women in STEAM Speaker Series</b></li>
                            <li>Improve initiative, critical thinking skills, creativity, and self-confidence through programming challenges to <b>win monetary prizes</b></li>
                            <li>Create and develop their personal work <b>portfolios</b>, resumes, websites and LinkedIn profiles</li>
                        </ul>
                    </div>
                    </div>
                    <div class="expPageContentSec"> 
                        <img src={ccsLogo} alt=""/>
                    </div>
                </div>

                {/* TEAM */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <div id="text">I'm in charge of all <b>internal affairs</b></div>
                        <ul id="text">
                            <li><b>Kelly Guan (moi), Co-Founder & Co-President</b></li>
                            <li> Maria Petersen (the other side of the co-modo), Co-Founder & Co-President</li>
                            <li>Jade Holmes, Marketing Director</li>
                            <li>Pauline Marquez, Membership Engagement Co-Director</li>
                            <li>Saryna Ramsay, Membership Engagement Co-Director</li>
                            <li>Emily Wellwood, Advancement Co-Director</li>
                            <li>Leah Ramsay, Advancement Co-Director</li>
                            <li>Jeanne Petersen, Moderator</li>
                            <li>Mr. Kenneth Tse, Advisor</li>
                            <li>Mary Guan, Consultant</li>
                        </ul>
                    </div>
                    <div class="expPageContentSec">
                        <div id="h2">Meet the Team</div>
                        <div id="text">
                         Presenting Comodo Coding Society’s executive team! We are in charge of having the society up and running; ranging from <b>internal</b> (design, lessons, social media) to <b>external </b>(sponsorship, guest speaker) content.                    </div>
                    </div>
                </div>

                {/* RESONSIBILITIES 
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
                </div> */}

                {/* STUDENT NOTES  */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <div id="h2">Student Notes</div>
                        <div id="text"><p>
                            Created student notes by <b>simplifying complex programming concepts</b> into point form notes for our members to refer to after our lessons
                            </p>
                            Check out a few here:
                            <ul>
                                <li><a href="https://docs.google.com/document/d/1M1wiQxX3sBhgryN_P4VABRFOJooCdgV9yERp1dvzRfo/edit?usp=sharing" target="_blank" >Scratch L1 Student Notes </a></li>
                                <li><a href="https://docs.google.com/document/d/1-jEstfPB8uMLveUREs7HYfy6jPqe4dROesbhjATllhk/edit?usp=sharing" target="_blank">Python L1 Student Notes</a></li>
                                <li><a href="https://docs.google.com/document/d/1a9ly7KOH6vcYBmnnLa13pUAlyHFQm_MnH39n4BUqdhA/edit?usp=sharing" target="_blank">Python L4 Student Notes </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="expPageContentSec">
                        <img src={StudentNotes} alt=""/>
                    </div>
                </div>

                {/* LESSONS  */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                    <img src={SlideDeck} alt=""/>
                    </div>
                    <div class="expPageContentSec">
                        <div class="ccs-title" id="h2">Lessons</div>
                        <div id="text">
                            <p>
                            My Membership Engagement Directors and I create all of the slide decks. We use the slide decks to help teach the lessons by <b>keeping members engaged</b>. 
                            </p>
                            Check out a few here:
                            <ul>
                                <li><a href="https://docs.google.com/presentation/d/14ZmyAbVVzZm9FgDlxm5P_37nz8cY6YiJi54LqrH7QAw/edit?usp=sharing" target="_blank">Scratch L2 Slide Deck </a></li>
                                <li><a href="https://docs.google.com/presentation/d/17du0C6zTvi0AQcvJveUulRyXcaW4O9r4l7RkMLqcoQQ/edit?usp=sharing" target="_blank">Python L1 Slide Deck</a></li>
                                <li><a href="https://docs.google.com/presentation/d/1EwzrUYFCHJoCaywg9jybIEtvR0iwtIQQO-Q1uAYgy14/edit?usp=sharing" target="_blank">Python L4 Slide Deck</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* UNIT PROJECTS  */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <div class="ccs-title" id="h2">Unit Projects</div>
                        <div id="text"><p>
                            After every unit we <b>challenge our members</b> to complete a Unit Project to showcase the skills taught and challenge their knowledge on the topic. Members have complete creative freedom in each project, with the constraints of 5 criterias. Top scorer wins a <b>$$$ prize</b>! 
                            </p>
                            Check out a few of our member’s <b>Scratch Projects</b> here: 
                            <ul>
                                <li>Francesca Galang:<a href="https://scratch.mit.edu/projects/525544504" target="_blank"> Phil’s Fire </a></li>
                                <li>Emily Wellwood:<a href="https://scratch.mit.edu/projects/519189196 " target="_blank">Dinosaur Game </a></li>
                                <li>Leah Karasavidis:<a href="https://scratch.mit.edu/projects/520935223" target="_blank">Trivia Extravaganza </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="expPageContentSec">
                        <iframe src="https://scratch.mit.edu/projects/525544504/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
                    </div>
                </div>

                {/* BIOGRPHY OF THE WEEK  */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <img src={Biography} alt=""/>
                    </div>
                    <div class="expPageContentSec">
                        <div class="ccs-title" id="h2">Biography of the week </div>
                        <div id="text"><p>
                            My Membership Engagement Directors and I create short biographies of <b> women and non-binary people in STEM</b> every week, for our members to relate to those already in the filed. 
                            </p>
                            Check out a few here:
                            <ul>
                                <li><a href="https://docs.google.com/document/d/11SgaXM1NwiJNfCF_BK-ozqluj048eMhOnmyRh8kaKqQ/edit?usp=sharing" target="_blank">Mimi Aung </a></li>
                                <li><a href="https://docs.google.com/document/d/1Eh-v8CwkxbXSRZ3GLvNpnwF4Q0SY_wmFOVBZhzdmSE4/edit?usp=sharing" target="_blank">Erin Teague</a></li>
                                <li><a href="https://docs.google.com/document/d/1G2DnDcxoJGoOjWF05l2av0CVlvYzlcohdW6zCcxMLm8/edit?usp=sharing" target="_blank"> Carol Shaw</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Speaker Series  */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <div class="ccs-title" id="h2">Women in STEM Guest Speaker Series</div>
                        <div id="text">
                            <p>Giving our memebrs to learn from professionals in the field!</p>

                            Our Guest Speakers: 
                            <ul>
                                <li>Diana Skrzydlo - Continuing Lecturer at Waterloo: <a href="https://www.youtube.com/watch?v=E0qfWbq8o50&t=1s" target="_blank">Explaining Stats in Machine Learning</a></li>
                                <li>Samantha Lam - UI/UX Designer: <a href="https://youtu.be/faxlIu-grQU?t=26" target="_blank" >Figma 101</a></li>

                            </ul>
                        </div>
                    </div>
                    <div class="expPageContentSec">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/E0qfWbq8o50?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    </div>
                </div>

                {/* THANKS  */}
                <div class="expPageContentBox">
                    <div class="expPageContentSec">
                        <img src={Heart} alt=""/>
                    </div>
                    <div class="expPageContentSec">
                        <div id="h2">Thank You!</div>
                        <div id="text">Comodo Coding Society would not be possible without my amazing Co-Founder <a href="https://www.linkedin.com/in/maria-t-petersen/" target="_blank">Maria Petersen</a>, our incredible Marketing Director Jade Holmes, our Advisor Mr. Tse and our moderator Jeanne Petersen. 
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
