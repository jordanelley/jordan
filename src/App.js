import myNameClipArt from './images/myName.png'
import codesClipArt from './images/codes.png'
import meZipOffice from './images/me-zip-office.png'
import meMyobOffice from './images/me-myob-office.png'
import cfg from './images/cfg.png'
import winCS from './images/winCS.png'
import './App.css';
import 'animate.css'

function App() {
  return (
      <div className="container">
        <div className="App">
            <img src={myNameClipArt} className="animate__animated animate__slideInLeft animate__slower" alt="my name text"/>
            <img src={codesClipArt} className="animate__animated animate__slideInRight animate__slower" alt="code text"/>
            <div className="padding"></div>
            <div className="experience">
                <h1> Experience </h1>
                <div className="layout-row">
                    <img src={meZipOffice} className="photo"/>
                    <div className="experience-details">
                        <h2> Zip Co - Feb 2021 - Apr 2022 </h2>
                        <p> Worked in dotnet core using event driven architecture</p>
                        <p> Unit tested in NUnit</p>
                        <p> Used EventStoreDb for event sourcing</p>
                        <p> Maintained front end in AngularJS</p>
                        <p> Shared an office with a Cyberpunk developer (hence the photo)</p>
                    </div>
                </div>
                <div className="layout-row alternative-layout-colours">
                    <div className="experience-details">
                        <h2> Code  First Girls Volunteer - Feb 2022 - Present </h2>
                        <p> see https://codefirstgirls.com </p>
                        <p> Teach 8 week courses online in Python or Web Development</p>
                        <p> I have also assisted in teaching in person courses at Girl Code (https://girlcode.co.nz)</p>

                    </div>
                    <img src={cfg} className="photo" id="cfg"/>
                </div>
                <div className="layout-row">
                    <img src={meMyobOffice} className="photo"/>
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
                    <img src={winCS} className="photo" id="cfg"/>
                </div>

            </div>
            <div>
                <h1> Projects </h1>
            </div>
        </div>
      </div>
  );
}

export default App;
