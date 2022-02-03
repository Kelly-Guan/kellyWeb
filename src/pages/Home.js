


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

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (  
    <div class="loader">
      {
        loading ?
        <div id="loadMe">
          <img id="loaderImg" size={1250} src={logo} loading={loading}/>
        </div>
        : 
        <body>
    
        <nav>
          <a id="navImg" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img src={logo} alt=""/></a>
          <div id="h4" >
              <a class="navLinks" href="#">moi</a>
              <a class="navLinks" href="#">experience</a>
              <a class="navLinks" href="#">projects</a>
              <button id="h4" ><a href="https://drive.google.com/file/d/1ezTMjhwMJyGFKOjswkWZ7Zz8pjxofTwW/view" target="_blank">resume</a></button>
          </div>
        </nav>

        <div id="socialMedia">
          <a href="https://www.linkedin.com/in/kelly-guan/" target="_blank"><img src={linkedin} alt=""/></a>
          <a href="mailto: kelly.g.guan@gmail.com" target="_blank"><img src={email} alt=""/></a>
          <a href="https://github.com/Kelly-Guan" target="_blank"><img src={github} alt=""/></a>
          <a href="https://devpost.com/KellyGuan" target="_blank"><img src={devpost} alt=""/></a>
        </div>

        <section id="landing">
          <div id='landingCont'>
            <iframe src='https://my.spline.design/me-8a33f328e15a51baab462decc8e69198/' frameborder='0' width='100%' height='100%'></iframe>
            <div id="landingText">
              <div id="h1">welcome! i'm <div id="name"><b>Kelly Guan</b>.</div></div>
            </div>
          </div>
        </section> 

        <section id="moi">
          <div id="moiCont">
            <img src={moi} alt=""/>
            <div id="h3">
              hello! my name is <a>Kelly Guan</a>, but my friends call me kellogs frosted flakes. 
              here is a glimpse into my life hectic as a grade 12
              <b> student</b>,
              <b> swimmer</b>, 
              <b> women in stem</b>, 
              <b> adventurer</b> and 
              <b> entrepreneur</b>.
            </div>
          </div>
        </section>

        <section id="experience"> 
          <div class="loopWrapper">
            <div id="h1">experience.experience.experience.experience.experience.experience.experience.experience.experience.experience.experience.experience.experience.</div>
          </div>
          <div id="expCont">
            <div class="expBox">
                <div class="expText">
                  <div id="h4"><mark>Oct 2021 - Present</mark></div>
                  <div id="h2">Cactus Kids Health Club 🌵</div>
                  <div id="title">Cheif Technology Officer & Founder</div>
                  <div id="text">Founded the first NFT project focused on longevity as a lifestyle, introducing people to the space and working on extending their healthspan.</div>
                  <button class="readMore"><a href="https://www.instagram.com/cactuskidshc/" target="_blank">read more →</a></button>
                </div>
                <img src={cacty} />
              </div>

              <div class="expBox">
                <iframe src='https://my.spline.design/marketangelologo-9eb8c716775bd31c742ce2edfbe1e947/' frameborder='0' width='100%' height='100%'></iframe>
                <div class="expText">
                  <div id="h4"><mark>nov 2020 - present</mark></div>
                  <div id="h2">MarketAngelo 🚀</div>
                  <div id="title">Product Designer & Founder</div>
                  <div id="text">Founded an interactive platform that aims to educate youth about the relationship between sustainable investing and pursuing profits.</div>
                  <button class="readMore"><a href="#">read more →</a></button>
                </div>
              </div>

              <div class="expBox">
                <div class="expText">
                  <div id="h4"><mark>dec 2020 - present</mark></div>
                  <div id="h2">Comodo Coding Society 👩🏻‍💻</div>
                  <div id="title">Co-President & Founder</div>
                  <div id="text">Founded a non-profit organization that aims to empower female and non-binary high school students with the skills, experience and confidence to succeed in computer science and engineering</div>
                  <button class="readMore"><a href="#css.html">read more →</a></button>
                </div>
                <iframe src='https://my.spline.design/ccs-b20309d3815f9e48feee583ba3933a34/' frameborder='0' width='100%' height='100%'></iframe>
              </div>

              <div class="expBox">
                  <iframe src='https://my.spline.design/shad-c56ec89d4f76a449950fd4eddf4315a3/' frameborder='0' width='100%' height='100%'></iframe>        <div class="expText">
                  <div id="h4"><mark>July 5, 2021 - July 30, 2021</mark></div>
                  <div id="h2">Shad 2021 🌊</div>
                  <div id="text">Participated in Shad 2021 on the virtual University of Waterloo campus. Shad is an action-packed STEAM and entrepreneurship-based summer program. </div>
                  <button class="readMore"><a>read more →</a></button>
                </div>
              </div>

              <div class="expBox"> 
                <div class="expText">
                  <div id="h4"><mark>sept 2014 - present</mark></div>
                  <div id="h2">Competitive Swimming 🏊🏻‍♀️</div>
                  <div id="text">Provincially ranked swimmer, train eight times a week, Female Team Captain and a Junior Competitive Swim Coach</div>
                  <button class="readMore"><a href="#">read more →</a></button>
                </div>
                <iframe src='https://my.spline.design/swimlogo-23ba3b910fc074ba0c1003476d12a73a/' frameborder='0' width='100%' height='100%'></iframe>
              </div>

              <div class="expBox">
              <img src={council} />
                <div class="expText">    
                  <div id="h4"><mark>May 25, 2019 - Present</mark></div>
                  <div id="h2">Student Council 👩🏻‍🎓</div>
                  <div id="title">President & prior Treasurer</div>
                  <div id="text">Current President and prior Treasurer Initiated school-wide events, initiated school-wide executive Slack channel, oversaw school budget, chaired meetings, mentored younger members, and representative at Equity Inclusion meetings.</div>
                  <button class="readMore"><a href="#">read more →</a></button>
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

    } 
    </div>
    
  );
}


export default Home;
