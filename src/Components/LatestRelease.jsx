import { Component } from "react";
import arrayOfBooks from "../data/fantasy.json";
import { Container, Row, Card, Button } from "react-bootstrap";

class LatestRelease extends Component {
  render() {
    return (
      <Container>
        <Row>
          {arrayOfBooks.map((book) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    {book.category}
                    {book.asin}
                  </Card.Text>
                  <Button variant="primary">{book.price}</Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
