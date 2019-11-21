import React from "react";
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <section className="about-page">
      <header>
        <h1>Childcare that fits into your schedule</h1>
        <Link to="/">
          Home <br/>
        </Link>
        <Link to="/nannies">
          Nanny List <br/>
        </Link>
      </header>

      <p>
        We understand how hard it is to find a good nanny.
      </p>
    </section>
  );
}