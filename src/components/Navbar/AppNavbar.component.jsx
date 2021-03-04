import React, { useCallback } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';
import debounce from 'lodash.debounce';

function AppNavbar({ navLinkHref, brand, navLinkText, apiClient }) {
  const debouncedAPIQuery = useCallback(
    debounce(
      (query) =>
        apiClient(
          `${process.env.REACT_APP_YOUTUBE_API_URL}/search?key=${process.env.REACT_APP_YOUTUBE_API_API_KEY}&part=snippet&type=video&maxResults=21&q=${query}`
        ),
      500
    ),
    [apiClient]
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

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href={navLinkHref}>{brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container-fluid">
          <Nav.Link href={navLinkHref}>{navLinkText}</Nav.Link>
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
            <NavDropdown.Item href="#action/3.4">Theme 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Theme 2</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="Login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
