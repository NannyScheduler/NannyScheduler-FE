import React from "react";
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <section className="about-page">
      <header>
        <Link to="/">
          Home <br/>
        </Link>
      </header>
      <p>
        We understand how hard it is to find a good nanny.
      </p>
      <Link to="/nannies">
          Nanny List <br/>
        </Link>
    </section>
  );
}