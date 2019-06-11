import React from "react";
import { Switch, Route } from "react-router";

export default (
    <Switch>
        <Route exact path="/"> </Route>
        <Route exact path="/about/" > </Route>
        <Route exact path="/shop/" > </Route>
        <Route exact path="/work/" > </Route>
        <Route path="/work/:id" > </Route>
        <Route exact path="/start/" > </Route>
        <Route exact path="/music/" ></Route>
        <Route exact path="/photos/" > </Route>
        <Route component={Error} > </Route>
    </Switch>
);