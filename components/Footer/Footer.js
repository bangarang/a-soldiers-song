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
import s from './Footer.scss';
import CopyToClipboard from 'react-copy-to-clipboard';
import cx from 'classnames';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "hello@chasegrock.com",
      copied: false
    };
  }

  copy(){
    this.setState({copied: true})
  }
  componentDidMount() {
    // window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    // window.componentHandler.downgradeElements(this.root);
  }

  render() {

    return (
        <footer className={s.footer}>
          <img src="/signature.svg" className={s.signature} />
          <p className={s.subheading}>Chase G Rock</p>
          <CopyToClipboard
            text={this.state.value}
            onCopy={this.copy.bind(this)}>
            <p className="subheading copy_button"><span className="highlight">hello@chasegrock.com</span><span className={this.state.copied ? "copy_status copied" : "copy_status"}>{this.state.copied ? "Copied, Talk to you soon!": "Click to Copy"}</span></p>
          </CopyToClipboard>
          <div className={s.social}>
            <a className={cx(s.social_icon, "icon-spotify")} href="https://play.spotify.com/user/1252553485" target="_blank"></a>
          </div>
        </footer>
    );
  }

}

export default Footer;
