import React, { Component } from 'react';

export default class Resume extends Component {
    render() {
        return(
            <section id="resume">
                {/* Education
            ----------------------------------------------- */}
                <div className="row education">
                    <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                            <h3>Centro Universitário do Pará</h3>
                            <p className="info">B.A. Degree in Computer Science <span>•</span> <em className="date">December 2012</em></p>
                            <p>
                                Bachelor's degree in Computer Science at Centro Universitário do Pará, starting the course in February/2009 and finishing in December/2012
                            </p>
                        </div>
                    </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Education */}
                {/* Work
            ----------------------------------------------- */}
                <div className="row work">
                    <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                        <img className="profile-pic" src="images/aubay-logo.png" alt />
                        <h3>Aubay Portugal</h3>
                        <p className="info">Software Engineer <span>•</span> <em className="date">March 2019 - Present</em></p>
                        <p>
                        Responsible for analyzing and correcting bugs reported in production and maintaining the correct functioning of the system. 
                        Collected data with the product owner to develop new features.
                        Create new endpoints for integration, via REST.
                        Analysis of new functionality as well as realization of estimate for delivery.
                        Continuous integration improvement with Jenkins and Sonar.
                        </p>
                        <p>Technologies used: Java, Hazelcast, IntelliJ, JPA, Spring Boot, Maven, Docker, Jenkins, Sonar.</p>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                        <img className="pagseguro-pic" src="images/pagseguro-logo.png" alt />
                        <h3>PagSeguro UOL</h3>
                        <p className="info">Software Engineer <span>•</span> <em className="date">June 2018 - February 2018</em></p>
                        <p>
                        Responsible for analyzing and correcting bugs reported in production and maintaining the correct functioning of the system. 
                        Collected data with the product owner to develop new features.
                        Create new endpoints for integration, via REST.
                        Analysis of new functionality as well as realization of estimate for delivery.
                        Continuous integration improvement with Jenkins and Sonar.
                        </p>
                        <p>Technologies used: Java, MySQL, IntelliJ, JPA, Spring Boot, Gradle, Docker, Jenkins, Sonar.</p>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                        <img className="prodiga-pic" src="images/prodiga-logo.png" alt />
                        <h3>Pródiga Sistemas</h3>
                        <p className="info">Software Engineer <span>•</span> <em className="date">November 2014 - March 2018</em></p>
                        <p>
                            Responsible for analyzing and correcting errors in production and maintaining the correct functioning of the system.
                            Collected data with the product owner to develop new features.
                            Designed the database structure and applied it with a data migration system.
                            Added functionality on the system screens, with HTML, JQuery and CSS.
                        </p>
                        <p>Technologies used: Java, Struts, Ruby, Ruby on Rails, PostgreSQL, RSpec, Capybara, Bootstrap</p>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                        <img className="profile-pic" src="images/basa-logo.png" alt />
                        <h3>Banco da Amazônia</h3>
                        <p className="info">System Analyst <span>•</span> <em className="date">March 2013 - May 2018</em></p>
                        <p>
                        Performed requirements gathering with system managers.
                        Estimated deadline for completion of activities.
                        Designed the database's architecture.
                        Desined and technically implemented the solution and developed it.
                        </p>
                        <p>Technologies used: Java, PL/SQL, Eclipse, JPA, Spring, JSP, JSF, Primefaces, JBoss EAP, Maven.</p>
                        </div>
                    </div> {/* item end */}
                    <div className="row item">
                        <div className="twelve columns">
                        <img className="profile-pic" src="images/cosanpa-logo.png" alt />
                        <h3>COSANPA</h3>
                        <p className="info">Android Developer<span>•</span> <em className="date">August 2012 - December 2012</em></p>
                        <p>
                            Responsible for migrating the old mobile application for Nokia devices, written in Java ME, to Android.
                        </p>
                        <p>
                            Technologies used: Java 6, SQLite3, Android
                        </p>
                        </div>
                    </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Work */}
                {/* Skills
            ----------------------------------------------- */}
                <div className="row skill">
                    <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt.
                    </p>
                    <div className="bars">
                        <ul className="skills">
                        <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                        <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                        <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                        <li><span className="bar-expand css" /><em>CSS</em></li>
                        <li><span className="bar-expand html5" /><em>HTML5</em></li>
                        <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                        </ul>
                    </div>{/* end skill-bars */}
                    </div> {/* main-col end */}
                </div> {/* End skills */}
                </section> 
        );
    }
}