import myNameClipArt from './images/myName.png'
import codesClipArt from './images/codes.png'
import './App.css';
import 'animate.css'

function App() {
  return (
    <div className="App">
        <h1>test</h1>
        <img src={myNameClipArt} className="animate__animated animate__slideInLeft animate__slower"/>
        <img src={codesClipArt} className="animate__animated animate__slideInRight animate__slower"/>
    </div>
  );
}

export default App;
