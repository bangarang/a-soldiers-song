/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';
import s from './Navigation.scss';
import Scroll, {scrollSpy, Events, scroller, Element, animateScroll} from 'react-scroll';

var ScrollLink  = Scroll.Link;

import history from '../../core/history';
import util from 'util';

class Navigation extends React.Component {

  componentDidMount() {
    // window.componentHandler.upgradeElement(this.root);
    Events.scrollEvent.register('begin', function(to, element) {
      if (to == "home") {
        history.push("/");
      } else {
        history.push("/" + to);
      }
    });

    Events.scrollEvent.register('end', function(to, element) {
    });

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    animateScroll.scrollToTop({
      duration: 500,
      delay: 100,
      smooth: true,
    });
  }

  render() {
    return (
      <nav ref={node => (this.root = node)}>
        <a className={s.nav_link} onClick={this.scrollToTop}>Home</a>
        <ScrollLink activeClass="active" className={s.nav_link} to="bio" spy={true} smooth={true} offset={50} duration={500} >Bio</ScrollLink>
        <ScrollLink activeClass="active" className={s.nav_link} to="research" spy={true} smooth={true} offset={50} duration={500} >Research</ScrollLink>
        <Link className={s.nav_link} to="/asb2016">ASB2016</Link>
      </nav>
    );
  }

}

export default Navigation;
