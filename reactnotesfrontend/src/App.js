import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

import {Provider, connect} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import {auth} from "./actions";
import notesApp from "./reducers";

import NoteMain from "./components/NoteMain"
import NotFound from "./components/NotFound"
import Login from "./components/Login";

let store = createStore(notesApp, applyMiddleware(thunk));

class RootContainerComponent extends Component {

    componentDidMount() {
        this.props.loadUser();
    }

    PrivateRoute = ({component: ChildComponent, ...rest}) => {
        return <Route {...rest} render={props => {
            if (this.props.auth.isLoading) {
                return <em>Loading...</em>;
            } else if (!this.props.auth.isAuthenticated) {
                return <Redirect to={"/login"} />
            } else {
                return <ChildComponent {...props} />
            }
        }} />
    };

    render() {
        let {PrivateRoute} = this;
        return (
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute exact path="/" component={NoteMain}/>
                        <Route exact path="/login" component={Login}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => {
            return dispatch(auth.loadUser());
        }
    }
};

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent);

// Moved App below to allow better visibility of Provider tags
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RootContainer/>
            </Provider>
        )
    }
}

export default App;