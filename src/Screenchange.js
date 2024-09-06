
import React, { useEffect } from 'react';
import './App.css'
const Screenchange = () => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.log('Document is hidden');
        // Handle the app being minimized or switched away
      } else {
        console.log('Document is visible');
        // Handle the app being restored or switched back
      }
    };

    const handleFocus = () => {
      console.log('Window has gained focus');
      alert("Screen is change is track")
      // Handle the window gaining focus
    }; 

    const handleBlur = () => {
      console.log('Window has lost focus');
      // Handle the window losing focus
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  return <div>
  <h1>  Hello World</h1>
  </div>;
};

export default Screenchange;