import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HomeView } from '../view/HomeView'
import { RecipeView } from '../view/RecipeView'

export default function Routing(props: any) {

    return (
        <Router>
            <Suspense fallback={<h1>LOADING!!!!</h1>}>
                {props.children}
                <Switch>
                    <Route exact path="/recipe" component={RecipeView} />
                    <Route component={HomeView} />
                </Switch>
            </Suspense>
        </Router >
    )

}