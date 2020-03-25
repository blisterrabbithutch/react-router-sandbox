import React from 'react';
import './Main.css';
import Home from '../Home/Home';
import Features from '../Features/Features';
import SignUp from '../SignUp/SignUp';
import NotFound from '../NotFound/NotFound';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import {page} from '../../router';

const isAuth = true;

const Main = ({location}) => {
    let { path, url } = useRouteMatch();
    console.log(path);
    return (
        <main className="Main">
            <Switch location={location}>
                <Route path={page.home} exact>
                    <Home />
                </Route>
                <Route path={`/features/info`} exact>
                    <SignUp />
                </Route>
                <Route path={page.features} exact render={(location) => {
                    if (isAuth) {
                        return <Features />
                    } else {
                        return <Redirect to={page.signUp} />
                    }
                }} />
                {/* <Route path={page.features} exact>
                    {isAuth ? <Features /> : <Redirect to={page.signUp} /> }
                </Route> */}
                <Route path={page.signUp} exact>
                    <SignUp />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
    )
};

export default Main;