import React, { useEffect, useState } from "react";
import throttleResize from '../../CustomHooks/useThrottle'

const PageResize = () => {
  const [resize, setResize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const throttleFn = throttleResize(resize, 1000);

  const handleResize = () => {
    setResize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

  useEffect(() => {   
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    }
  },[])

  return (
    <>
    <label style={{fontSize: "35px"}}>
    Width: {throttleFn.width} Height: {throttleFn.height}
    </label>
    </>
  );
};

export default PageResize;
