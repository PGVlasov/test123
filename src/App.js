
import { useState } from 'react';
import './App.css';
import Link from '@mui/material/Link';
import { RenderInWindow } from './WindowComponent';
import { HomeIcon } from './components/HomeIcon';

function App() {
  const [openContainer, setOpenCantainer] = useState(false)
  const [isCliced, setIsClicked] = useState(0)
  // const [arr, setArr]

  const clickHandler1 = () => {
    window.open('http://www.google.com', '_blank', "width=600,height=400,left=200,top=200");
  }

  const clickHandler2 = () => {
    setOpenCantainer(true)
    setIsClicked(isCliced + 1)
    console.log("isCliced", isCliced)
  }


  return (
    <>
      {openContainer ? <RenderInWindow isCliced={isCliced} /> : ""}
      <Link onClick={clickHandler1}>
        <HomeIcon color="primary" >
        </HomeIcon>
      </Link >

      <Link onClick={clickHandler2}>
        <HomeIcon color="primary" >
        </HomeIcon>
      </Link >
    </>
  );
}

export default App;



