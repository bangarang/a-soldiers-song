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
import Layout from '../../components/Layout';
import s from './styles.scss';
import { title, html } from './index.md';
import util from 'util';
import cx from 'classnames';
// import {scroller, Element, animateScroll} from 'react-scroll';

import {spring, presets, Motion, StaggeredMotion,TransitionMotion}  from 'react-motion';

import history from '../../core/history';

import { Icon } from 'react-fa';
import Sound from 'react-sound';

class HomePage extends React.Component {
  state = {
    cd: false,
    button: false,
    play_button: false,
    playing: false,
    playStatus: Sound.status.PAUSED
  }
  componentDidMount = () => {
    // console.log("hello");

    // require('./font-awesome.js');

    setTimeout(function() { this.setState({cd: true}); }.bind(this), 700);
    setTimeout(function() { this.setState({button: true}); }.bind(this), 1000);
    setTimeout(function() { this.setState({play_button: true}); }.bind(this), 1200);
  }

  play = () => {
    if (this.state.playStatus == ( Sound.status.PAUSED || Sound.status.STOPPED ) ) {
      this.setState({playing: !this.state.playing, playStatus: Sound.status.PLAYING });
    } else {
      this.setState({playing: !this.state.playing, playStatus: Sound.status.PAUSED });
    }
  }

  render () {
    var { cd, button, play_button, playing, playStatus } = this.state;

    return (
      <div className={s.container}>


        <div className={ cd ? cx(s.cd, s.fadeInUp) : s.cd }>
          <div className={s.content}>
            <div className={s.top_area}>
              <h3 className={s.subheader}>Christine Salhany & The Crossing Genres Band Presents</h3>
              <span className={s.small_break}></span>
            </div>
            <div className={s.middle_area}>
              <h1 className={s.song_title}>A Soldier's Song</h1>
              <h3 className={s.subheader}>Inspired by Rust McAulay</h3>
            </div>
            <div className={s.bottom_area}>
              <span className={s.small_break}></span>
              <h3 className={s.subheader}>Featuring "Dr. Jimmy"</h3>
              <p className={s.bottom_small}>All Proceeds from the sale of this song will be forwarded to veteran's support groups</p>
            </div>
          </div>
        </div>

        <a href="https://gum.co/a-soldiers-song/" target="_blank" className={ button ? cx(s.button, s.button_shikoba, s.fadeInUp) : cx(s.button, s.button_shikoba) }>
          <Icon className={s.button__icon} name="music" />
          <span>Get Song</span>
        </a>

        <span onClick={ this.play } className={ play_button ? cx(s.play_button_wrapper, s.fadeInUp) : s.play_button_wrapper }>
          <Icon className={s.play_button} name={playing ? "pause" : "play"} />
        </span>

        { Sound ? <Sound
          url="/a-soldiers-song.mp3"
          playStatus={playStatus}
          volume={100}
          onLoading={({bytesLoaded, bytesTotal}) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
          onFinishedPlaying={() => this.setState({playStatus: Sound.status.STOPPED})} /> : null }


      </div>
    )
  }
}

export default HomePage;
