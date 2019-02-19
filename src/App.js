import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import cls from './App.css';
import Sidebar from './containers/Sidebar/Sidebar';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMapMarkerAlt,
  faClock,
  faFilm,
  faBolt,
  faGlobe,
  faCar,
  faPhone,
  faChevronCircleRight
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faMapMarkerAlt,
  faChevronCircleRight,
  faClock,
  faFilm,
  faGlobe,
  faCar,
  faBolt,
  faPhone
);

class App extends Component {
  render() {
    return (
      <div className={cls.app}>
        <div className={cls.container}>
          <div className={cls.attraction_detail}>
            <div id="BODYCON">
              <div className={cls.ui_columns}>
                <div
                  className={[cls.attraction_column, cls.ui_column].join(' ')}
                />
                <div className={[cls.sidebar_column, cls.ui_column].join(' ')}>
                  <Route exact path="/:id" component={Sidebar} />
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
