import React from "react";
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <section className="signup">
      <header>
        <Link to="/">
          Home <br/>
        </Link>
      </header>
      <Link to="/nanny-signup">
          I'm a Nanny <br/>
        </Link>
        <Link to="/parent-signup">
          I'm a Parent
        </Link>
    </section>
  );
}