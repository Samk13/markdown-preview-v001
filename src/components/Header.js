import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron className='Jumbotron'>
      <h1 className="display-3 text-center text-success ">🛰Markdown Previewer 🛰</h1>
      <p className="lead text-center text-warning">This is my markdown App from FCC Front End Libraries Project</p>
      </Jumbotron>
    </div>
  );
};

export default Header;
