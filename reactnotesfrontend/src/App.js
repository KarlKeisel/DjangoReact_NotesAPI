import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import notesApp from "./reducers";

import NoteMain from "./components/NoteMain"
import NotFound from "./components/NotFound"

let store = createStore(notesApp, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={NoteMain}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;