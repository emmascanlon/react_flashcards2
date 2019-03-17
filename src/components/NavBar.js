import React from "react";
import { Menu, } from "semantic-ui-react";
import { Link, } from "react-router-dom";

const NavBar = () => (
  <div>
  <Menu>
    <Link to="/">
    <Menu.Item
      name="Home"
      >
      Home
    </Menu.Item>
    </Link>
    <Link to="/flashcards">
    <Menu.Item
      name="Flashcards"
      >
      Flashcards
    </Menu.Item>
    </Link>
  </Menu>
  </div>
)
   

export default NavBar;