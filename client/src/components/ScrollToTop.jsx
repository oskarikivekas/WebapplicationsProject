import React, { useEffect, useState } from "react";
import {Button} from 'react-bootstrap'
/* https://dev.to/prnvbirajdar/react-hooks-component-to-smooth-scroll-to-the-top-35fd */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

//scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className="scroll-to-top" style={{float: "right"}}>
      {isVisible && (
         <Button variant="primary" onClick={scrollToTop}>Back to top</Button>
      )}
    </div>
  );
}