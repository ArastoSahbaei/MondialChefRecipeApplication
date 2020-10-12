import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HomeView } from '../view/HomeView'
import { RecipeView } from '../view/RecipeView'

export default function Routing(props: any) {

    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/home" component={HomeView} />
                <Route exact path="/recipe" component={RecipeView} />
            </Switch>
        </Router>
    )

}