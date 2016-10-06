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
import {scroller, Element, animateScroll} from 'react-scroll';

import {spring, presets, Motion, StaggeredMotion,TransitionMotion}  from 'react-motion';

import history from '../../core/history';

var Waypoint = require('react-waypoint');

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pathname: "home",
      logo: false,
      main_logo: false,
      name: false,
      neuroscience: false,
      face: false
    };
  }

  componentDidMount() {
    var self = this;
    document.title = title;
    var pathname =location.pathname.split('/')[1];

    self.setState({pathname: location.pathname.split('/')[1]})
    setTimeout(function() {
      console.log("logo");
      self.setState({logo: true});
    }, 750);

    setTimeout(function() {
      console.log("name");
      self.setState({name: true});
    }, 1000);

    setTimeout(function() {
      console.log("neuroscience");
      self.setState({neuroscience: true});
    }, 1250);

    setTimeout(function() {
      console.log("face");
      self.setState({face: true});
    }, 1500);
    if (pathname.length){
      setTimeout(function() {
        console.log("scroller");
        scroller.scrollTo(pathname, {
          duration: 500,
          delay: 100,
          smooth: true,
        });

      }, 2500);
    }

  }

  _setMainLogo() {
    this.setState({main_logo: true})
  }

  _setMessage(msg) {
    history.push("/" + msg);
    // window.location.href.replace("/" + msg);
  }

  _onEnter(msg, object) {
    if (object.previousPosition == 'above') {
      // history.push("/" + msg);
      history.replace("/"+msg);
    }
  }

  _onLeave(msg, object) {
    if (object.currentPosition == 'above') {
      // history.push("/" + msg);
      history.replace("/"+msg);
    }
  }

  render() {
    var {
      pathname,
      logo,
      name,
      neuroscience,
      face,
      main_logo
    } = this.state;

    return (
      <Layout className={pathname}>
        <div className={s.home_wrapper}>
          <div className={s.title_wrapper}>
            { logo ?
              <Motion
                key="main_logo"
                defaultStyle={{x: 400, opacity: -1}}
                style={{x: spring(0), opacity: spring(1, presets.gentle)}}
                onRest={this._setMainLogo.bind(this)}
                >
                {  function (style) {
                  return (
                      <svg
                        className={main_logo ? cx(s.main_logo_finished, s.chase_logo) : s.chase_logo}
                        x="0px"
                        y="0px"
                        viewBox="0 0 125.7 197.3">
                        <polygon id="c_top" className={s.c}
                            style={{
                              WebkitTransform: `translateX(${-style.x}px)`,
                              transform: `translateX(${-style.x}px)`,
                              opacity: style.opacity
                            }}
                            points="62.8,85.9 87.9,60.8 98.6,50.1 98.6,0 37.8,60.8 "/>
                        <g id="R" className={s.r}
                             style={{
                              WebkitTransform: `translateX(${style.x}px)`,
                              transform: `translateX(${style.x}px)`,
                              opacity: style.opacity
                            }}>
                        	<polygon id="r_top" points="125.7,98.6 102.9,75.9 100.7,73.6 100.7,73.6 27.1,0 27,50.1 75.6,98.7 62.9,111.4
                        		87.9,136.5 125.7,98.7 125.7,98.7 	"/>
                        	<polygon id="r_bottom" points="37.8,136.5 37.8,136.5 27.1,147.2 27.1,197.3 62.9,161.5 	"/>
                        	<polygon id="r_edge" points="62.9,111.4 62.9,111.4 98.7,147.2 98.7,197.3 37.8,136.5 37.8,136.5 37.8,136.5 	"/>
                        </g>
                        	<polygon id="c_bottom" className={s.c}
                            style={{
                              WebkitTransform: `translateX(${-style.x}px)`,
                              transform: `translateX(${-style.x}px)`,
                              opacity: style.opacity
                            }}
                            points="0,98.7 22.8,121.4 25,123.7 25,123.7 98.6,197.3 98.7,147.2 50.1,98.6 62.8,85.9 37.8,60.8
                          		0,98.6 0,98.7 "/>
                      </svg>
                    )
                  }
                }
              </Motion>
              :
                <svg
                  className={s.chase_logo}
                  x="0px"
                  y="0px"
                  viewBox="0 0 125.7 197.3" style={{opacity: 0, width: "150px"}}>
                  <g id="R" className={s.r}>
                  	<polygon id="r_top" points="125.7,98.6 102.9,75.9 100.7,73.6 100.7,73.6 27.1,0 27,50.1 75.6,98.7 62.9,111.4
                  		87.9,136.5 125.7,98.7 125.7,98.7 	"/>
                  	<polygon id="r_bottom" points="37.8,136.5 37.8,136.5 27.1,147.2 27.1,197.3 62.9,161.5 	"/>
                  	<polygon id="r_edge" points="62.9,111.4 62.9,111.4 98.7,147.2 98.7,197.3 37.8,136.5 37.8,136.5 37.8,136.5 	"/>
                  </g>
                  <g id="C" className={s.c}>
                  	<polygon id="c_top" points="62.8,85.9 87.9,60.8 98.6,50.1 98.6,0 37.8,60.8 "/>
                  	<polygon id="c_bottom" points="0,98.7 22.8,121.4 25,123.7 25,123.7 98.6,197.3 98.7,147.2 50.1,98.6 62.8,85.9 37.8,60.8
                  		0,98.6 0,98.7 "/>
                  </g>
                </svg> }

            { name ?
              <Motion
                key="name"
                defaultStyle={{x: 100, opacity: 0}}
                style={{x: spring(0, presets.gentle), opacity: spring(1, presets.gentle)}}>
                {  function (name_style) {
                  return (
                    <h1
                      style={{
                            WebkitTransform: `translateY(${name_style.x}px)`,
                            transform: `translateY(${name_style.x}px)`,
                            opacity: name_style.opacity
                          }}
                      className={s.big_name}>CHASE ROCK</h1>
                  )
                }}
              </Motion>
              : <h1 style={{ opacity: 0 }} className={s.big_name}>CHASE ROCK</h1>
            }

            { neuroscience ?
              <Motion
                key="neuroscience"
                defaultStyle={{x: 100, opacity: 0}}
                style={{x: spring(0, presets.gentle), opacity: spring(1, presets.gentle)}}>
                {  function (name_style) {
                  return (
                    <h2
                      className={s.subheader}
                      style={{
                            WebkitTransform: `translateY(${name_style.x}px)`,
                            transform: `translateY(${name_style.x}px)`,
                            opacity: name_style.opacity
                          }}
                      >Neuroscience, B.S.</h2>
                  )
                }}
              </Motion>
              : <h2 className={s.subheader} style={{ opacity: 0 }}>Neuroscience, B.S.</h2>
            }

          </div>
          { face ?
            <Motion
              key="face"
              defaultStyle={{x: 100, opacity: 0}}
              style={{x: spring(0, presets.gentle), opacity: spring(1, presets.gentle)}}>
              {  function (name_style) {
                return (
                  <img src="/face.svg"
                    style={{
                          WebkitTransform: `translateY(${name_style.x}px)`,
                          transform: `translateY(${name_style.x}px)`,
                          opacity: name_style.opacity
                        }}
                    className={s.face} />
                )
              }}
            </Motion>
            : <img src="/face.svg" style={{ opacity: 0 }} className={s.face} />
          }
        </div>
        <Element name="bio">
          <Waypoint
            onLeave={this._onLeave.bind(this, "bio")}
            onEnter={this._onEnter.bind(this, "")}
            threshold={0}
            />
          <div className={s.bio_wrapper}>
            <div id="bio" className={s.wrapper}>
              <h3 className={s.bio_heading}>Bio</h3>
              <p>Currently a graduate research assistant at the University of Nebraska at Omaha (UNO), Chase is studying under Dr. Kota Takahashi. He is working towards a Master’s degree in Exercise Science, with an emphasis in Biomechanics. In addition to taking classes at UNO, he assists with the ideation and implementation of experimental protocols at the Biomechanics Research Building, oversees undergraduate student projects, and is driving towards the completion of his Master’s thesis project. </p>

              <p>Chase graduated with his Bachelor of Science degree in Neuroscience in 2014, with minors in Biology and Chemistry. During his time as an undergraduate, he was exposed to a variety of different labs. Chase cultured and analyzed various types of cell colonies, studied manipulations of food preference in rats, and assisted in coding the behavior of marmosets. He ended his undergraduate career as an undergraduate research assistant at the Biomechanics Research Building, where he helped collect and analyze walking data from transtibial prosthesis users.</p>

              <p>After completing his Master’s degree, Chase plans to pursue pre-Doctoral research that combines biomechanics and neuroscience. His specific interests include the mechanisms responsible for control and optimization of the neuromuscular system, as well as how these principles can apply to the control of prosthetic devices.</p>

              <a className={s.cv_button} href="/chase_g_rock_cv.pdf"><h4>Curriculum Vitae</h4></a>
            </div>
          </div>
        </Element>
        <Element name="research">
          <Waypoint
            onEnter={this._onEnter.bind(this, "bio")}
            onLeave={this._onLeave.bind(this, "research")}
            threshold={0}
            />
          <div className={s.research_wrapper}>
            <div className={s.wrapper}>
              <h3 className={s.research_heading}>Research</h3>
              <p>Chase aims to answer research questions related to neuromuscular control. For example, his Master’s thesis project aims to detect how changes in energy expenditure at different walking speeds might be related to the variability of a person’s walking pattern. This project will provide insight to how humans optimize their walking strategy, as well as how people differ in this optimization.</p>

              <h4>Presentations</h4>

              <div className={s.presentation}>
                <p>October 13 - <i>Relationship Between Metabolic Cost of Transport and Stride-to-Stride Variability</i>, <a href="http://nric.nebraska.edu/" target="_blank">Symposium on Biomechanics</a>, <a href="http://www.unomaha.edu/" target="_blank">University of Nebraska at Omaha</a>, Omaha, NE <br /></p>

                <p><a className={s.presentation_button} href="/ChaseRock_UNOSymposium_2016.pdf">Poster</a></p>
              </div>


              <div className={s.presentation}>
                <p>August 2016 - <i>Relationship Between Prosthetic Push-Off Work And Stride-To-Stride Fluctuations In Transtibial Prosthesis Users</i> <br />
                <a href="http://asb2016.asbweb.org/" target="_blank"> 40th Annual Meeting of the American Society of Biomechanics</a>, Raleigh Conference Center, Raleigh, NC</p>

                <p><a className={s.presentation_button} href="/ChaseRock_ASB 2016_poster.pdf">Poster</a>
                <a className={s.presentation_button} href="/ChaseRock_ASB2016_abstract.pdf">Abstract</a></p>
              </div>

              <div className={s.presentation}>
                <p>June 2016 - <i>Metabolic Cost of Transport and the Persistence of Stride-to-Stride Fluctuations in Human Walking</i> <br />
                <a href="http://www.unomaha.edu/college-of-education/cobre/community-engagement/research-day.php" target="_blank"> Human Movement Variability Conference</a>, Scott Conference Center, Omaha, NE</p>
              </div>

              <div className={s.presentation}>
                <p>April 2016 – <i>Metabolic Cost of Transport and the Persistence of Stride-to-Stride Fluctuations in Human Walking</i> <br />
                <a href="https://sites.google.com/site/asbrockymountain/home" target="_blank"> 6th Annual Meeting of the Rocky Mountain American Society of Biomechanics</a>, YMCA of the Rockies, Estes Park, CO</p>
                <p><a className={s.presentation_button} href="/ChaseRock_RMASB_2016_poster.pdf">Poster</a>
                <a className={s.presentation_button} href="/ChaseRock_RMASB_2016_abstract.pdf">Abstract</a></p>
              </div>

              <div className={s.presentation}>
                <p>March 2016 - <i>Relationship Between Prosthetic Push-Off Work And Stride-To-Stride Fluctuations In Transtibial Prosthesis Users</i> <br />
                <a href="http://www.unomaha.edu/office-of-research-and-creative-activity/students/research-and-creative-activity-fair.php" target="_blank"> Research and Creative Activity Fair</a>, <a href="http://www.unomaha.edu/" target="_blank"> University of Nebraska at Omaha</a>, Omaha, NE</p>
              </div>

              <div className={s.presentation}>
                <p>October 2015 – <i>Metabolic Cost and Long-Term Correlations in Human Gait</i> <br />
                <a href="http://www.unomaha.edu/college-of-education/health-physical-education-recreation/community-engagement/seminar-series/index.php" target="_blank"> School of HPER Seminar Series</a>, <a href="http://www.unomaha.edu/" target="_blank"> University of Nebraska at Omaha</a>, Omaha, NE</p>
              </div>

            </div>
          </div>
        </Element>
        <Element name="uno-symposium">
          <Waypoint
            onEnter={this._onEnter.bind(this, "research")}
            onLeave={this._onLeave.bind(this, "uno-symposium")}
            threshold={0}
            />
          <div className={s.research_wrapper}>
            <div className={s.wrapper}>
              <h3 className={cx(s.asb_heading, "center")}>Symposium on Biomechanics</h3>
              <p className={cx(s.asb_content, "center")}>Stop by my poster at the Symposium on Biomechanics at UNO on October 13th.</p>
              <a className={s.poster_image} href="/ChaseRock_UNOSymposium_2016.pdf">
                <img src="/ChaseRock_UNOSymposium_2016.jpg" />
              </a>
            </div>
          </div>
        </Element>
      </Layout>
    );
  }

}

export default HomePage;
