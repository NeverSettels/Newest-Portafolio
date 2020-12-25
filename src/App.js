import React, { useState } from 'react'
import Puzzle from './Components/Puzzle/Puzzle'
import Info from './Components/Info/Info'
import Start from "./Components/Start"
import './App.css';

function App() {
  const [view, setview] = useState("start")
  changeView = view =>{
    view=="puzzle"?setview("puzzle"):setview("info") 
  }
  return (
    <>
     {view=='start'? <Start/>:""}
     {view=='puzzle'? <Puzzle/>:""}
     {view=='info'? <Info/>:""}
      </>
  );
}

export default App;
