import { Button, Card, Row, Col } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

const ListTodo = ({ todolist, deleteTodo, finishTodo }) => {
  return todolist.map((value, index) => {
    return (
      <Card className="mt-3">
        <Card.Body>
          <Row>
            <Col>
              <h3>{value.todoName}</h3>
            </Col>

            <Col xl="1">
              <Button
                onClick={() => finishTodo(index)}
                variant={value.status ? "secondary" : "primary"}
              >
                {value.status ? <FaTimes /> : <FaCheck />}
              </Button>
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
