import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import cls from './App.css';
import Details from './containers/Details/Details';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMapMarkerAlt,
  faClock,
  faFilm,
  faBolt,
  faGlobe,
  faCar
} from '@fortawesome/free-solid-svg-icons';

library.add(faMapMarkerAlt, faClock, faFilm, faGlobe, faCar, faBolt);

class App extends Component {
  render() {
    return (
      <div className={cls.app}>
        <div className={cls.ui_columns}>
          <Route exact path="/:id" component={Details} />
          <Details />
        </div>
      </div>
    );
  }
}

export default App;
