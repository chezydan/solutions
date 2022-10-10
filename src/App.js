
import './App.css';
import React from 'react'
import {HashRouter , Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Spreadsheats from './pages/Spreadsheets'
import Scratch from './pages/Scratch'


function App() {

window.document.title='solutions';


  return(  <div className='app-container gr-deepsea'>

 <HashRouter >
 <Navbar />
 <Routes>
    <Route index element={<Home />} />
    <Route path="/spreadsheets" element={<Spreadsheats />} />
    <Route path="/scratch" element={<Scratch />} />

 </Routes>



 </HashRouter>
</div>

  );
}

export default App;
