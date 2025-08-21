// import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React from "react";

// import { IconContext } from "react-icons";
import { RiSunFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
function Dark() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="border-none ">
      <button onClick={() => darkModeHandler()}>
        {dark && <RiSunFill />}
        {!dark && <MdDarkMode />}
      </button>
    </div>
  );
}

export default Dark;
