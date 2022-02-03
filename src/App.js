import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const [showLogin, setShowLogin] = useState(false)



  return (
    <Router>
    <div className="container">
      <Header
      onAdd={()=>setShowLogin(!showLogin)}
      showAdd={showLogin}
      ></Header>
      <div className='row'>
      <div className='column'>
        <h1>Item</h1>
      </div>
        <div className='column'>
        {showLogin && <Login onLogin={()=>alert('Login')}></Login>}
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
