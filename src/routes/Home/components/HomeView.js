import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Select your language!</h4>
    <ul>
      <Link to='/login' activeLanguage={201}>
        English
      </Link>
      <Link to='/login' activeLanguage={202}>
        Español
      </Link>
    </ul>
  </div>
)

export default HomeView
