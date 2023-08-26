
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route  exact path='/'  element={<Login/>}></Route>
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path="/detail/:id" element={<Detail/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
