import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderStyled } from './Header.styled';
import logoImg from '../../assets/images/logo.png';

function Header() {
  return (
    <HeaderStyled>
      <div>
        <Link to="/">
          <img className="logo" alt="ParkBee" src={logoImg} />
        </Link>
      </div>
    </HeaderStyled>
  );
}

export { Header };
