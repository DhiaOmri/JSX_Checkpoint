import logo from './logo.png';
import video from './Video.mp4';
import './App.css';

function App() {
  return (
  <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
      <h1 className="title red">Dhia OMRI</h1>
      <img src={logo} alt="" className="logo"/>
      <img src="imageInPublic.png" alt="" className="img-cover"/>
      <video width="320" height="240" controls>
        <source src={video} type="video/mp4"/>
      </video>
      </div>
  </div>
);
}
export default App;
