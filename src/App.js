import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {

  const style = {
    app:{backgroundColor:'#FFF7F1'},
    container:{maxWidth:'1000px',margin:'auto'},
    navLink:{},
    nav:{display:'flex'},
    a:{textDecoration:'none',display:'block',padding:'16px 32px',color:'#222831'},
    content:{maxWidth:'1000px',margin:'auto',padding:'16px 32px'}
  }

  return (
    <BrowserRouter>
    <>
    <div className="App" style={style.app}>
      <div style={style.container}>
        <nav style={style.nav}>
          <div>
            <Link to={'/home'} style={style.a}>Home</Link>
          </div>
          <div>
            <Link to={'/about'} style={style.a}>About</Link>
          </div>
          <div>
            <Link to={'/services'} style={style.a}>Services</Link>
          </div>
          <div>
            <Link to={'/contact'} style={style.a}>Contact</Link>
          </div>
        </nav>
      </div>
    </div>

    <div style={style.content}>
      
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
     
    </div>
    </>
    </BrowserRouter>
  );
}

export default App;
