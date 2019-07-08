import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card, Col } from 'reactstrap';

const Information = () => (
  <div>
      <Col >
    <Button color="info" id="toggler" size="lg" block
    style={{ marginBottom: '1rem' }}>
      About this tool <span role="img" aria-label="wow face">😮🤔</span>
    </Button>
    </Col>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
        Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default Information;