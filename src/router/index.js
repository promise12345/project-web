
import React, { Component, Fragment } from 'react';
import {HashRouter as Router, Route, Redirect, NavLink, Switch} from 'react-router-dom'
import {Routes} from './routes'

export default class MyRouter extends Component {
  render(){
    return (
        <Router>
          <Fragment>
            {
              Routes.map((item, i) => {
                return <NavLink to={item.path} key={item.path}>{item.content}</NavLink>
              })
            }
            <Switch>
              {
                Routes.map(item => {
                  return <Route path={item.path} component={item.component} key={item.path}></Route>
                })
              }
              <Redirect path="/" to="home"></Redirect>
            </Switch>
          </Fragment>
        </Router>
    )
  }
}