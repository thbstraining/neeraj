import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles.css'; // Import the CSS file

const HomePage = () => {
  return (
    <Link to="/catalog"> {/* Link to the catalog page */}
      <div className="homepage-container">
        <h1>Welcome to Stardust Voyages</h1>
        <p>Explore the cosmos with us!</p>
      </div>
    </Link>
  );
}

export default HomePage;


