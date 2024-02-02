import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GarbageSnapNavbar from './components/Navbar';
import Navbar from './components/Navbar';
import React,{ useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import SendSnap from './pages/SendSnap';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

export const Context = React.createContext()

function App() {
  const [user,setUser] = useState(false)
  return (
    <>
    
    <Context.Provider value={[user,setUser]}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/SendSnap" element={<SendSnap/>}></Route>
        <Route path="/SignIn" element={<SignIn/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
      </Routes>
    </Context.Provider>
    </>
  );
}

export default App;
