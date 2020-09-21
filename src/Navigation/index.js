import React from "react";
import { toAbout, toTasks } from "../routes";
import { List, Item, StyledNavLink } from "./styled";

export default () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to={toTasks()}>Tasks list</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toAbout()}>About</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};
