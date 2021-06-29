
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      <h3>Steven McFarlane;</h3>
        <h4>Software Developer.</h4>
            <p>
              I'm working on my new site, until then you can contact me on the following platforms: 
            </p>
          <ul>
            <li><a href="mailto: stevenmcfarlane@hotmail.co.uk">Email</a></li>
            <li><a href="https://www.linkedin.com/in/steven-mcfarlane-9b769637" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/stmcf" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://twitter.com/IAMSMCF" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
      </header> */}
      <div class="split left">
        <div class="centered">
          {/* <h5>Hi ! I'm </h5> */}
          <h3>Steven McFarlane;</h3>
          <h4>Software Developer</h4>
        </div>
      </div>

      <div class="split right">
        <div class="centered">
          
            <p>
              I'm working on my new site, until then you can contact me on the following platforms: 
            </p>
            <ul>
            <li><a href="mailto: stevenmcfarlane@hotmail.co.uk">Email</a></li>
            <li><a href="https://www.linkedin.com/in/steven-mcfarlane-9b769637" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/iamstmcf" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://twitter.com/IAMSMCF" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://iamsmcf.github.io/CV/" target="_blank" rel="noreferrer">CV</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
