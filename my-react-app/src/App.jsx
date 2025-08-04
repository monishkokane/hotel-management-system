
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Rooms from './components/Rooms';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 

function App() {
  return (
    <>
        <Router>
         <Navbar/>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/rooms" element={<Rooms/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
