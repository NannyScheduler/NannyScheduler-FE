import React from "react";
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the Ultimate Nanny Scheduler!</h1>
        <Link to="/nannies">
          View and Search Nanny List <br/>
        </Link>
      </header>
    </section>
  );
}