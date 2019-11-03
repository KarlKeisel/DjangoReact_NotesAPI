import React, {Component} from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

import {Provider, connect} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {auth} from "./actions";
import notesApp from "./reducers";

import NoteMain from "./components/NoteMain"
import NotFound from "./components/NotFound"
import Login from "./components/Login";
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";
import Example from "./components/Example";

import "./assets/css/App.css";
import MenuBar from "./components/MenuBar";

let store = createStore(notesApp, composeWithDevTools(applyMiddleware(thunk)));

class RootContainerComponent extends Component {

    componentDidMount() {
        this.props.loadUser();
    }

    PrivateRoute = ({component: ChildComponent, ...rest}) => {
        return <Route {...rest} render={props => {
            if (this.props.auth.isLoading) {
                return <em>Loading...</em>;
            } else if (!this.props.auth.isAuthenticated) {
                return <Redirect to={"/login"}/>
            } else {
                return <ChildComponent {...props} />
            }
        }}/>
    };

    // TODO Remove MUI Datatables example link and files.

    render() {
        let {PrivateRoute} = this;
        return (
            <BrowserRouter>
                <MenuBar/>
                <Switch>
                    <PrivateRoute exact path="/notes" component={NoteMain}/>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/example" component={Example}/>
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