import { Button, Card, Row, Col } from "react-bootstrap";

const ListTodo = ({ todolist, deleteTodo }) => {
  return todolist.map((value, index) => {
    return (
      <Card className="mt-3">
        <Card.Body>
          <Row>
            <Col>
              <h3>{value.todoName}</h3>
            </Col>

            <Col xl="1">
              <Button>Selesai</Button>
            </Col>
          </Row>
          <Button
            variant="danger"
            className="mt-2"
            onClick={() => deleteTodo(index)}
          >
            Hapus
          </Button>
        </Card.Body>
      </Card>
    );
  });
};

export default ListTodo;
