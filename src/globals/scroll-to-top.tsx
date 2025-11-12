/**
 * @module Scroll-To-Top
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A functionality that takes you at the top of Current Page
 * @returns 
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {

    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });

  }, [pathname]);
  
  return null;
};

export default ScrollToTop;