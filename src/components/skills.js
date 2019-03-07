import React, { Component } from 'react';

export default class Skills extends Component {
    render() {
        return(
            <React.Fragment>
                <section id="skills">
                    <div className="row skill">
                            <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                            </div>
                            <div className="nine columns main-col">
                            {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.
                            </p> */}
                            <div className="bars">
                                <ul className="skills">
                                <li><span className="bar-expand java" /><em>Java</em></li>
                                <li><span className="bar-expand spring" /><em>Spring stack</em></li>
                                <li><span className="bar-expand jpa" /><em>JPA / Hibernate</em></li>
                                <li><span className="bar-expand databases" /><em>SQL</em></li>
                                <li><span className="bar-expand ruby" /><em>Ruby / Ruby on Rails</em></li>
                                <li><span className="bar-expand tests" /><em>TDD / BDD</em></li>
                                </ul>
                            </div>{/* end skill-bars */}
                            </div> {/* main-col end */}
                        </div> {/* End skills */}
                </section>
            </React.Fragment>
        );
    }
}