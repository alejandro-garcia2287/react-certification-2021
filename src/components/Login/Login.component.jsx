import React, { useContext, useState } from 'react';
import { Modal, Button, Form, FormGroup, Alert } from 'react-bootstrap';
import StyleModal from './Login.styled';
import loginApi from '../../utils/login.api';
import VideoContext from '../../state/VideoProvider';
import { ACTIONS } from '../../state/VideoReducer';

function LoginModal(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const { dispatch } = useContext(VideoContext);

  function clearInputsAndClose() {
    setUsername('');
    setPassword('');
    setLoginError('');
    props.onHide();
  }

  function handleLogin() {
    loginApi(username, password)
      .then((user) => {
        dispatch({
          type: ACTIONS.LOGIN,
          payload: { loggedUser: user },
        });
        clearInputsAndClose();
      })
      .catch((err) => {
        setLoginError(JSON.stringify(err));
      });
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setLoginError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setLoginError('');
  };

  return (
    <StyleModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <FormGroup controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </FormGroup>

          <FormGroup controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </FormGroup>
        </Form>
        {loginError && <Alert variant="danger">Invalid username or password</Alert>}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={clearInputsAndClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Modal.Footer>
    </StyleModal>
  );
}

export default LoginModal;
