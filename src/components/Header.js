import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron className='Jumbotron'>
      <h1 className="display-3 text-center text-success ">🛰Markdown Previewer 🛰</h1>
      <p className="lead text-center text-warning">A cool  tool made with ❤ to convert your plain text to XHTML or HTML
      <br />
        please Check out my Github for more Apps 😎🍻
      </p>
      </Jumbotron>
    </div>
  );
};

export default Header;
