import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink, Navigation, Item } from "./styled";

export default () => (
  <HashRouter>
    <nav>
      <Navigation>
          <Item>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to="/autor">O autorze</StyledNavLink>
          </Item>
      </Navigation>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
