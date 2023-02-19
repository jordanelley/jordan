import myNameClipArt from './images/myName.png'
import codesClipArt from './images/codes.png'
import meZipOffice from './images/me-zip-office.png'
import meMyobOffice from './images/me-myob-office.png'
import cfg from './images/cfg.png'
import winCS from './images/winCS.png'
import pokeordle from './images/pokeordle.png'
import shreddersHub from './images/shredders-hub.png'
import linkedIn from './images/linkedin.png'
import github from './images/github.png'

import './App.css';
import 'animate.css'


function App() {
  return (
      <div className="container">
          <head>
              <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/icon?family=Material+Icons"
              />
          </head>
        <div className="App">
            <img src={myNameClipArt} className="animate__animated animate__slideInLeft animate__slower" alt="my name text"/>
            <img src={codesClipArt} className="animate__animated animate__slideInRight animate__slower" alt="code text"/>
            <div className="padding"></div>
            <div>
                <a href="https://nz.linkedin.com/in/jordan-elley-346ab514b" target="_blank">
                    <img src={linkedIn} className="icon"/>
                </a>
                <a href="https://github.com/jordanelley/" target="_blank">
                    <img src={github} className="icon"/>
                </a>
                <h1> Projects </h1> <h3> i made these really quickly so I could put them on here</h3>
                <div>
                    <a href="https://jordanelley.github.io/pokeordle-rewrite/" target="_blank">
                        <img src={pokeordle} className="project-image"/>
                    </a>
                    <a href="https://jordanelley.github.io/shredders-hub-front-v1/">
                        <img src={shreddersHub} className="project-image"/>
                    </a>
                </div>
            </div>
            <div className="experience">
                <h1> Experience </h1>
                <div className="layout-row">
                    <img src={meZipOffice} className="photo hide-on-mob"/>
                    <div className="experience-details">
                        <h2> Zip Co - Feb 2021 - Apr 2022 </h2>
                        <p> Worked in dotnet core using event driven architecture</p>
                        <p> Unit tested in NUnit</p>
                        <p> Used EventStoreDb for event sourcing</p>
                        <p> Maintained front end in AngularJS</p>
                        <p className="hide-on-mob"> Shared an office with a Cyberpunk developer (hence the photo)</p>
                    </div>
                </div>
                <div className="layout-row alternative-layout-colours">
                    <div className="experience-details">
                        <h2> Code  First Girls Volunteer - Feb 2022 - Present </h2>
                        <p> see https://codefirstgirls.com </p>
                        <p> Teach 8 week courses online in Python or Web Development</p>
                        <p> I have also assisted in teaching in person courses at Girl Code (https://girlcode.co.nz)</p>

                    </div>
                    <img src={cfg} className="photo hide-on-mob" id="cfg"/>
                </div>
                <div className="layout-row">
                    <img src={meMyobOffice} className="photo hide-on-mob"/>
                    <div className="experience-details">
                        <h2> MYOB - Feb 2018 - Oct 2020 </h2>
                        <p> Worked in react and dotnet core</p>
                        <p> Unit tested using Jest & Enzyme for the front end and XUnit for the backend</p>
                        <p> Rotated to customer support for a week to solve customer issues (every few weeks)</p>
                        <p> Up kept Automation tests in Selenium & Cucumber.io</p>
                        <p> A lot of other stuff such as conducted interviews, started a company football team and ran the brown bags club</p>
                    </div>
                </div>
                <div className="layout-row alternative-layout-colours">
                    <div className="experience-details">
                        <h2> Computer Science Tutor at University Of Auckland - Mar 2017 - Nov 2017 </h2>
                        <p>was in the general help room assisting student with problems</p>
                        <p> I set up learn sessions on topics which were voted the highest before exams</p>

                    </div>
                    <img src={winCS} className="photo hide-on-mob" />
                </div>

            </div>
            <div>
                <h1> Achievements </h1>
                <p>
                    Got a computer science degree.  It was really expensive and took a while.
                </p>
                <p>
                    high level on Codewars.com.  Myob had a competitive Codewars community and I was in the top 10
                </p>
                <img src="https://www.codewars.com/users/coolFridge9/badges/large"/>
            <p> a few years ago, I got a reddit flare for being the top contributor to bad UI battles on reddit https://www.reddit.com/r/badUIbattles/
                so when I post it says 'bad UI creator' next to my name</p>
                <p> Won hackday at myob twice</p>
            </div>
        </div>
      </div>
  );
}

export default App;
