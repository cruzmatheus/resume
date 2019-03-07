import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return(
            <section id="contact">
                <h1>Get In Touch</h1>
                <div className="row section-head">
                </div>
                <div className="row banner">
                    <div className="row">
                        <ul className="social">
                                <li>
                                    <a href="https://www.linkedin.com/in/scmatheus/">
                                    <div className="div-social">
                                        <i className="fa fa-linkedin" />
                                        <span>/in/scmatheus</span>
                                    </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="div-social">
                                        <i className="fa fa-envelope" />
                                        <span>contato.mscruz@gmail.com</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="div-social">
                                        <i className="fa fa-skype" />
                                        <span>matheus.souza27</span>
                                    </div>
                                </li>
                            </ul>
                    </div>
                </div>

                </section>
        );
    }
}