/**
 * Starting point of app customization
 * @module App
 */

import { useState } from "react";
import ScrollToTop from "./globals/scroll-to-top";
import Loader from "./globals/elements/loader";
import RootLayout from "./layouts/root-layout";
import AppRoutes from "./routing/app-routes";

/**
 * 
 * First Element inside {@link AppRoutes | app flow} contained inside {@link RootLayout | app layout}
 * @returns - Outer most markup for the template.
 */
const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000); 

  return (
    <>
      {isLoading && <Loader />}
      <ScrollToTop />
      <RootLayout />
    </>
  );
}

export default App;
