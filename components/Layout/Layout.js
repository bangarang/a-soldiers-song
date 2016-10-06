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
import s from './Layout.scss';

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

      (function(d) {
        var config = {
          kitId: 'dlg3wcz',
          scriptTimeout: 3000,
          async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
      })(document);
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
