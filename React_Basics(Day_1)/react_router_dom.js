/* 
React Router allows you to create multiple pages inside your React app without reloading the page.

Example:

/ → Home page

/about → About page

/contact → Contact page

React switches components dynamically when the URL changes.

📌 1. Install React Router
npm install react-router-dom


This adds the router library to your project.
*/



// Import required router components
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // BrowserRouter enables routing in the entire app
    <BrowserRouter>

      {/* Navigation Links */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>

      {/* Define different routes */}
      <Routes>
        {/* Show Home component when URL is "/" */}
        <Route path="/" element={<Home />} />

        {/* Show About component when URL is "/about" */}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

// Simple components for pages
function Home() {
  return <h1>🏠 Home Page</h1>;
}

function About() {
  return <h1>ℹ️ About Page</h1>;
}

export default App;
