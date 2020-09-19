import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AboutPage from "./features/about/AboutPage";
import { StyledNavLink, Navigation, Item } from "./styled";

export default () => (
  <HashRouter>
    <nav>
      <Navigation>
          <Item>
            <StyledNavLink to="/tasks">Tasks list</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to="/about">About</StyledNavLink>
          </Item>
      </Navigation>
      <Switch>
        <Route path="/tasks/:id">
          <TaskPage />
        </Route>
        <Route path="/tasks">
          <TasksPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <Redirect to="/tasks" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
