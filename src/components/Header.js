import React from 'react';
import Link from './Link';
import '../css/Header.css';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Raiding Schedule
      </Link>
      <Link href="/Activity" className="item">
        Active Raiders
      </Link>
      <Link href="/Mythicplus" className="item">
        M+ Spreadsheet
      </Link>
      <Link href="/Events" className="item">
        Events
      </Link>
    </div>
  );
};

export default Header;
