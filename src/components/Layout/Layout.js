import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import classes from './Layout.css'

const layout = (props) => (
  <Auxiliary>
    <Toolbar></Toolbar>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Auxiliary>
);

export default layout;
