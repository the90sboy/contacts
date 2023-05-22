import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users'
import User from './components/User';
import AddUserForm from './components/AddUserForm';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Ishmael Addo",
          email: "addo@gmail.com",
          gen: 18
        },
        {
          name: "Lexis Bannerman",
          email: "lexisb@gmail.com",
          gen: 15
        },
        {
          name: "Akushika",
          email: "shika@gmail.com",
          gen: 17
        },
        {
          name: "Ali",
          email: "ali111@gmail.com",
          gen: 24
        },

      ]

    }
  }
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <AddUserForm />
            </Col>
            <Col>
              <Users users={this.state.users} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App; 