import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return(
            <React.Fragment>
            <section id="about">
                <div className="row">
                    <div className="three columns">
                    <img className="profile-pic" src="images/matheus.jpg" alt />

                    <h3>Matheus Cruz</h3>
                    <h4>Software Engineer in Lisbon - Portugal</h4>

                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>
                            Bachelor's degree in Computer Science and Java SE 7 Associate Certified, I've being working, professionaly, with Web Development since 2013 and currently I'm a Software Engineer at Aubay, in Portugal. 
                            I'm specialized in Java technologies with it's main frameworks and relational databases.
                        </p>
                        <p>I enjoy working with people that were not afraid of working with the cutting edge technologies.</p>
                        <div className="row">
                            <div className="columns download">
                            <p>
                                <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                            </p>
                            </div>
                        </div> {/* end row */}
                    </div> {/* end .main-col */}
                </div>
                </section> {/* About Section End*/}
            </React.Fragment>
        );
    }
}