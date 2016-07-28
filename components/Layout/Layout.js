/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import Header from './Header';
import Footer from '../Footer';
import s from './Layout.css';

var Waypoint = require('react-waypoint');


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: true
    };
  }

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    // window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    // window.componentHandler.downgradeElements(this.root);
  }

  _toggleScrolled() {
    this.setState({scrolled: !this.state.scrolled});
  }

  render() {
    return (
      <div ref={node => (this.root = node)} className={this.state.scrolled ? "scrolled" : null}>
        <Waypoint
          onLeave={this._toggleScrolled.bind(this)}
          onEnter={this._toggleScrolled.bind(this)}
          threshold={0}
          />
        <Header />
        <main>
          <div {...this.props} className={this.props.className} />
          <Footer />
        </main>
      </div>
    );
  }
}

export default Layout;
