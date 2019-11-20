import React from "react";
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Childcare that fits into your schedule</h1>
        <Link to="/about">
          About Us <br/>
        </Link>
        <Link to="/signup">
          Signup <br/>
        </Link>
      </header>
      <p>
        Find a trusted nanny in your area.
      </p>
    </section>
  );
}