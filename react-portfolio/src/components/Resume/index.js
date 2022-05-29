import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


	function Resume() {
		return (
			<Container>
				<Row>
					<Col>
					<div className="jumbotron jumbotron-fluid">
						<Container>
							<h1 className="display-4 text-center">Resume</h1>
						</Container>
					</div>
					</Col>
				</Row>
				<Row>
					<Col className="text-center mb-3">
						<Button href="https://github.com/hamsof/Resume/blob/main/resume_hafiz_abdulmanan.pdf">Download My Resume</Button>
					</Col>
				</Row>
			</Container>
		);
	}

export default Resume;
