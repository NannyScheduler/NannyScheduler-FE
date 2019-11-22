import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

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
      <StyledLink to="/nannies">
          Nanny List <br/>
        </StyledLink>
    </section>
  );
}