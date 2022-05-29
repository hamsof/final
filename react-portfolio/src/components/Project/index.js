import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Project = (props) => {
      const project = props.project;
      return (
                  <Card className='ms-auto'>
                        <Card.Body className="mx-auto">
                              <Card.Title>{project.name.toString()}</Card.Title>
                        </Card.Body>
                        <Card.Footer className="m-auto">
                              <Button variant="primary p-1 p-sm-2" href={""}>Live Demo</Button>
                              <Button variant="secondary p-1 p-sm-2" href={""}>GitHub Repo</Button>
                        </Card.Footer>
                  </Card>   
                 )}

export default Project;
