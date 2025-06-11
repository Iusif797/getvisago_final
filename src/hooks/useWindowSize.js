import { useState, useEffect } from 'react';

// Хук для определения размера окна
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Вызываем сразу для определения начального размера
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return windowSize;
}

export default useWindowSize; 