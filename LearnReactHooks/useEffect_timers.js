// Import React and the useEffect hook
import { useState, useEffect } from "react";

function Timer() {
  // State to store the number of seconds
  const [seconds, setSeconds] = useState(0);

  // useEffect is used for side effects:
  // Anything that happens "outside" of rendering, like:
  // - API calls
  // - Timers
  // - Subscriptions
  useEffect(() => {
    // This code runs after the component is mounted (first rendered)
    console.log("Component mounted");

    // Start a timer that increases 'seconds' every second
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1); // Update state
    }, 1000);

    // Cleanup function runs when component unmounts
    // Stops the timer to prevent memory leaks
    return () => {
      clearInterval(interval);
      console.log("Component unmounted, timer cleared");
    };
  }, []); // Empty dependency array → runs only once, like componentDidMount

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
}

export default Timer;
