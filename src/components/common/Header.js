import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="nav nav--center">
      <IndexLink to="/">Home</IndexLink>
      {" | "}
      <Link to="/a">Aふぉん</Link>
      {" | "}
      <Link to="/b">Bとても</Link>
      {" | "}
      <Link to="/c">C愛してる</Link>
    </nav>
  );
};

export default Header;
