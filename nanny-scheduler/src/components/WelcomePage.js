import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Link to="/about">
          About Us <br/>
        </Link>
      </header>
      <p>
        Find a trusted nanny in your area.
      </p>
      <StyledLink to="/signup">
          Signup <br/>
        </StyledLink>
    </section>
  );
}