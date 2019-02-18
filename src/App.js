import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import cls from './App.css';

library.add(faShare, faBookmark, faCheck, faInfoCircle);

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Route exact path="/:id" />
        </div>
      </div>
    );
  }
}

export default App;
