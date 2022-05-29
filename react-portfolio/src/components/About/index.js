import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./about.css";
function About() {
	return (
		<Container>
			<Row>
				<div className="jumbotron jumbotron-fluid mb-0">
					<Container>
						<h1 className="display-4 pb-0 pb-sm-0 pb-md-0 mb-2 text-center">About Me</h1>
					</Container>
				</div>
			</Row>
			{/* Image of me and a paragraph next to the picture built in Bootstrap */}
			<Row className="align">
				<Col className="text-center" id="about">
					<p>
						I am Hafiz Abdulmanan, I am Computer Science student from PUCIT.
					</p>
					<p className="small text-center">
						I have experience in front-end web development, working with technologies like Bootstrap, SCSS
						CSS, HTML, JavaScript and various other modern development media.
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
