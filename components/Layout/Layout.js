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
import s from './Layout.scss';

// var Waypoint = require('react-waypoint');


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


  render() {
    return (
      <div ref={node => (this.root = node)} >
        <main>
          <div {...this.props} className={this.props.className} />
        </main>
      </div>
    );
  }
}

export default Layout;
