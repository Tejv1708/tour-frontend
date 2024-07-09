// LogoComponent.jsx

import { useState } from "react";
import ProfileComponent from "./ProfileComponent";

const LogoComponent = ({ name }) => {
  const firstLetter = name ? name.charAt(0).toUpperCase() : '';
  const [isOpen , setIsOpen] = useState(false)

  function handleClick (){
      setIsOpen(true)
  }

  return (
    <>
{ isOpen ? 
    <ProfileComponent isOpen = {isOpen}  onClose = {() => setIsOpen(false)}/> :
    <button onClick={handleClick} className="logo text-2xl font-bold text-white bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
      {firstLetter}
    </button>
    }
    </>
  );
};

export default LogoComponent;