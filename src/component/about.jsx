import React from "react";
import PropTypes from "prop-types";
// reactstrap components
import { Row, Col } from "reactstrap";
// react-sweet-progress components
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css"



export default class About extends React.Component {
    render () {
        return (
            <div
                id="about-container"
                className="content-containers container  mt-5"
            >
            <br/><br/><br/><br/>
            <Row>
                <Col md="6" fadeInRight>
                <img 
                    className={"img-fluid"}
                    src="" 
                    alt=""
                    style={{
                        borderRadius: 50 + "%",
                        height: 250 + "px",
                        width: 250 + "px"
                    }}
                />
                    <h4>HTML</h4>
                    <Progress 
                        strokeWidth={1}
                        percent={95}
                    />
                    <h4>CSS3</h4>
                    <Progress 
                        strokeWidth={1}
                        percent={95}
                    />
                    <h4>Django</h4>
                    <Progress 
                        strokeWidth={1}
                        percent={80}
                    />
                    <h4>Flask</h4>
                    <Progress 
                        strokeWidth={1}
                        percent={90}
                    />
                    <h4>ReactJs</h4>
                    <Progress 
                        strokeWidth={1}
                        percent={70}
                    />
                    <h4>Postgress</h4>
                    <Progress 
                        strokeWidth={1}
                        percent={90}
                    />
                    <h4>MongoDB</h4>
                    <Progress 
                        strokeWidth={1}
                        percent={70}
                    />
                    <h4>Heroku</h4>
                    <Progress 
                        strokeWidth={1}
                        percent={80}
                    />

                
                </Col>
                <Col md="1"></Col>
                <Col md="5" fadeIn>
                <h1>About Me</h1>
                <div>
                    <p>
                        Software Engineer who loves to transform ideas into reality using code. 
                        I am passionate about using Javascript and Animation Libraries to create awesome 
                        user experiences. 
                    </p>
                </div>
                <div>
                    <p>
                        With over two years of experience developing web applications using the latest 
                        front-end and back-end technologies.
                    </p>
                </div>
                <div>
                    <p>
                    Motivated designer and developer with experience creating custom websites 
                    with ReactJs, JavaScript, HTML5, and CSS3. Strong collaboration skills 
                    and proven history of application development. 
                    </p>
                </div>
                {/* <p>
                    Software Engineer who loves to transform ideas into reality using code. 
                    I am passionate about using Javascript and Animation Libraries to create awesome 
                    user experiences.

                    With over two years of experience developing web applications using the latest 
                    front-end and back-end technologies.

                    Motivated designer and developer with experience creating custom websites 
                    with ReactJs, JavaScript, HTML5, and CSS3. Strong collaboration skills 
                    and proven history of application development.
                </p>
                     */}
                
                
                </Col>

            </Row>

            </div>
        );
    }
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};