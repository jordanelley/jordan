import myNameClipArt from './images/myName.png'
import codesClipArt from './images/codes.png'
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
                <h1> Software Engineering Experience </h1>
                <h2> Zip Co - Feb 2021 - Apr 2022 </h2>
                <h2> MYOB - Feb 2018 - Oct 2020 </h2>
                <h1> Software Teaching Experience</h1>
                <h2> Volunteer Instructor at Code Girls First Feb 2022 - present</h2>
                <h2> Teaching Assistant at Girl Code Mar 2019 - Apr 2019</h2>
                <h2> Computer Science Tutor at Auckland Uni Mar 2017 - Nov 2017</h2>
            </div>
            <div>
                <h1> Projects </h1>
            </div>
        </div>
      </div>
  );
}

export default App;
