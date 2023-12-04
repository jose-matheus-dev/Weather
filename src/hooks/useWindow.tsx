import { useState, useEffect } from 'react';

interface WindowDimentions {
  height: number;
  width: number;
}

export const useWindowDimensions = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>(getWindowDimensions());

  useEffect(() => (window.onresize = () => setWindowDimensions(getWindowDimensions())), []);
  return windowDimensions;
};

const getWindowDimensions = (): WindowDimentions => ({ width: window.innerWidth, height: window.innerHeight });
