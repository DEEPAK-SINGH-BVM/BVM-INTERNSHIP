import React, { useState, useLayoutEffect, useRef } from "react";

function ResizableBox() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(100);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(boxRef.current.clientWidth);
      setHeight(boxRef.current.clientHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{ width: "50%", height: "50%", backgroundColor: "red" }}
    >
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}
export default ResizableBox;