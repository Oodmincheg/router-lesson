import Main from './components/Main'
import About from './components/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Route exact path="/">
        <Main />
      </Route>
     <Route path='/about'>
          <About />
     </Route>
    
    </Router>
  );
}

export default App;
