import { useState, useEffect } from "react";

function RandomUser() {
  // State to store user data
  const [user, setUser] = useState(null); 
  // State to track loading
  const [loading, setLoading] = useState(true);

  // useEffect runs after the component mounts
  useEffect(() => {
    // Fetch data from a public API
    fetch("https://randomuser.me/api/")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        setUser(data.results[0]); // Store the first user in state
        setLoading(false);         // Loading finished
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false);
      });
  }, []); // Empty array → run only once after first render

  // Show loading message while fetching
  if (loading) {
    return <p>Loading user...</p>;
  }

  // Display user info
  return (
    <div>
      <h2>
        {user.name.first} {user.name.last}
      </h2>
      <img src={user.picture.medium} alt="User" />
    </div>
  );
}

export default RandomUser;
