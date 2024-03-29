import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../componet/home/Home'
import UserCrud from '../componet/user/UserCrud'

export default props =>
    <Switch>
        <Route  exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>