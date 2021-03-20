import React, { useCallback, useContext } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';
import debounce from 'lodash.debounce';
import VideoContext from '../../state/VideoProvider';
import reducerFetch from '../../utils/reducerFetch';
import { ACTIONS } from '../../state/VideoReducer';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

function AppNavbar() {
  const { dispatch, state } = useContext(VideoContext);
  const { currentTheme } = state;
  const history = useHistory();

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
    [dispatch],
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

  return (
    <Navbar bg={currentTheme.navbarBg} variant="dark" expand="md">
      <Navbar.Brand>React Challenge</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container-fluid">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
        <Nav>
          <Form inline>
            <FormControl
              bg="dark"
              type="text"
              placeholder="Search"
              onChange={handleOnChange}
              onKeyDown={handleEnter}
            />
          </Form>
          <NavDropdown id="settings-dropdown" title={<FaCog />}>
            <NavDropdown.Item name="dark" onClick={handleThemeClick}>
              Dark
            </NavDropdown.Item>
            <NavDropdown.Item name="blue" onClick={handleThemeClick}>
              Blue
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="Login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
