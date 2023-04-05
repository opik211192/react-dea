import { useState } from "react";

import {
  Container,
  Form,
  Button,
  Stack,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container>
      <h1 className="text-center mt-5">Todo Web App</h1>

      {/* input todo */}
      <Card className="mt-5">
        <Card.Body>
          <Stack direction="horizontal" gap={3}>
            <Form.Control type="text" placeholder="Masukan todo..." />
            <Button>Tambah</Button>
          </Stack>
        </Card.Body>
      </Card>

      {/* List todo */}
      <Card className="mt-5">
        <Card.Body>
          <Row>
            <Col>
              <h3>Nama Todo</h3>
            </Col>

            <Col xl="1">
              <Button>Selesai</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default App;
