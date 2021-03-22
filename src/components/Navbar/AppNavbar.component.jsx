import React, { useCallback, useContext, useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import VideoContext from '../../state/VideoProvider';
import reducerFetch from '../../utils/reducerFetch';
import { ACTIONS } from '../../state/VideoReducer';
import LoginModal from '../Login/Login.component';
import Img from './AppNavbar.styled';

function AppNavbar() {
  const { dispatch, state } = useContext(VideoContext);
  const { currentTheme } = state;
  const history = useHistory();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const debouncedAPIQuery = useCallback(
    debounce((query) => {
      dispatch({
        type: ACTIONS.SET_SELECTED_VIDEO,
        payload: { selectedVideo: undefined },
      });
      const queryUrl = `${process.env.REACT_APP_YOUTUBE_API_URL}/search?key=${process.env.REACT_APP_YOUTUBE_API_API_KEY}&part=snippet&type=video&maxResults=21&q=${query}`;
      reducerFetch(queryUrl, dispatch);
      history.push('/');
    }, 500),
    [dispatch]
  );

  function handleOnChange(event) {
    const query = event.target.value;
    debouncedAPIQuery(query);
  }

  function handleEnter(event) {
    if (event.keyCode === 13) {
      const query = event.target.value;
      debouncedAPIQuery(query);
      event.preventDefault();
    }
  }

  function handleThemeClick(event) {
    event.preventDefault();
    dispatch({
      type: ACTIONS.SET_THEME,
      payload: { theme: event.target.name },
    });
  }

  function handleLoginClick(event) {
    event.preventDefault();
    setShowLoginModal(true);
  }

  function handleLogout() {
    dispatch({
      type: ACTIONS.LOGOUT,
      payload: {},
    });
  }

  return (
    <Navbar bg={currentTheme.navbarBg} variant="dark" expand="md">
      <Navbar.Brand>React Challenge</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container-fluid">
          <Nav.Item>
            {state.loggedUser && <Img src={state.loggedUser.avatarUrl} />}
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {state.loggedUser && (
              <Nav.Link as={Link} to="/favorites">
                Favorites
              </Nav.Link>
            )}
          </Nav.Item>
          <Nav.Item className="ml-auto">
            <Form inline>
              <FormControl
                bg="dark"
                type="text"
                placeholder="Search"
                onChange={handleOnChange}
                onKeyDown={handleEnter}
              />
            </Form>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown id="settings-dropdown" title={<FaCog />}>
              <NavDropdown.Item name="dark" onClick={handleThemeClick}>
                Dark
              </NavDropdown.Item>
              <NavDropdown.Item name="blue" onClick={handleThemeClick}>
                Blue
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          <Nav.Item>
            {state.loggedUser ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <Nav.Link onClick={handleLoginClick}>Login</Nav.Link>
            )}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>

      <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />
    </Navbar>
  );
}

export default AppNavbar;
