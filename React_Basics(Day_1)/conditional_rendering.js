import { useState } from "react";

function App() {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Conditional rendering */}
      {isLoggedIn ? (
        <h1>Welcome back, User! 🎉</h1> // If isLoggedIn is true
      ) : (
        <h1>Please log in. 🔒</h1>      // If isLoggedIn is false
      )}

      {/* Button to toggle login state */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;
