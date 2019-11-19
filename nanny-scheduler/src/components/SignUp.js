import React from "react";
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <section className="signup">
      <header>
        <h1>Childcare that fits into your schedule</h1>
        <Link to="/nanny-signup">
          Nanny Signup <br/>
        </Link>
        <Link to="/parent-signup">
          Parent Signup
        </Link>
      </header>
    </section>
  );
}