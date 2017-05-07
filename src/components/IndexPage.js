// src/components/IndexPage.js
import React from 'react';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div>
            <h1>Hello, world!</h1>
            <iframe width="auto" height="auto" src="https://www.youtube.com/embed/y2-8TtMbQcQ" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}
