import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <h1>Shamrock using React</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Language
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Login
    </Link>
  </div>
)

export default Header
