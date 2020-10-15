import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HomeView } from '../view/homeview/HomeView'
import { RecipeView } from '../view/recipeview/RecipeView'
import { SignInView } from '../view/signinview/SignInView'
import { UserSettingsView } from '../view/usersettingsview/UserSettingsView'

export const Routing = (props: any) => {
    return (
        <Router>
            <Suspense fallback={<h1>LOADING!!!!</h1>}>
                {props.children}
                <Switch>
                    <Route exact path="/recipe" component={RecipeView} />
                    <Route exact path="/signin" component={SignInView} />
                    <Route exact path="/settings" component={UserSettingsView} />
                    <Route component={HomeView} />
                </Switch>
            </Suspense>
        </Router >
    )
}