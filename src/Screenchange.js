


import React, { useEffect, useState } from 'react';
import './App.css';

const Screenchange = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Increase the count when the document becomes visible
        setCount(prevCount => {
          const newCount = prevCount + 1;
          if (newCount >= 4) {
            alert(`This is your ${newCount}th time of visibility change.`);
            
          } else {
            alert("You have exceeded the visibility change limit.");
          }
          return newCount;
        });
      }
    };

    const handleFocus = () => {
      console.log('Window has gained focus');
    };

    const handleBlur = () => {
      console.log('Window has lost focus');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <p>Focus Count: {count}</p>
    </div>
  );
};

export default Screenchange;
