import React from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";

import {Link, Redirect} from "react-router-dom";

import {auth} from "../actions";

// Styling
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import styles from "../assets/jss/sidePage";
import InputAdornment from "@material-ui/core/InputAdornment";
import Card from "./Card/Card"
import CardHeader from "./Card/CardHeader";
import CardBody from "./Card/CardBody";
import CardFooter from "./Card/CardFooter";
import Button from "./CustomButtons/Button";

// Framer Motion
import { motion } from "framer-motion"

import LockOpenIcon from '@material-ui/icons/LockOpen';
import People from "@material-ui/icons/People";

import image from "../assets/img/WritingImplements.jpg";

import GridContainer from "./Grid/GridContainer";
import CustomInput from "./CustomInput/CustomInput";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: "cardHidden",
        }
    }

    jumpIn = setTimeout(() => {
        this.setState({card: ""});
    }, 700);

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/notes"/>
        }

        const {classes} = this.props;

        return (
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify={"center"}>
                        <Card className={classes[this.state.card]}>
                            <CardHeader color={"info"} className={classes.cardHeader}>
                                <h1>Login</h1>
                            </CardHeader>
                            <form className={classes.form} onSubmit={this.onSubmit}>
                                <CardBody>
                                    {this.props.errors.length > 0 && (
                                        <ul>
                                            {this.props.errors.map(error => (
                                                <li
                                                    key={error.field}
                                                    style={{color: "red"}}
                                                >{error.message}</li>
                                            ))}
                                        </ul>
                                    )}
                                    <CustomInput
                                        labelText={"Username..."}
                                        id="username"

                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            type: "text",
                                            id: "username",
                                            onChange: (e) => this.setState({username: e.target.value}),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <People className={classes.inputIconsColor}/>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <CustomInput
                                        labelText={"Password..."}
                                        id="password"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            type: "password",
                                            id: "password",
                                            onChange: (e) => this.setState({password: e.target.value}),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <LockOpenIcon className={classes.inputIconsColor}/>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                    <Button color={"info"} type={"submit"}>
                                        Login
                                    </Button>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                    <Link to={"/register"} style={{textDecoration: "None"}}>
                                        <Button simple color={"warning"}>
                                            Don't have an account?
                                        </Button>
                                    </Link>
                                    </motion.div>
                                </CardFooter>
                            </form>
                        </Card>
                    </GridContainer>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    let errors = [];
    if (state.auth.errors) {
        errors = Object.keys(state.auth.errors).map(field => {
            return {field, message: state.auth.errors[field]};
        })
    }
    return {
        errors,
        isAuthenticated: state.auth.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
            return dispatch(auth.login(username, password));
        }
    };
};

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles),
)(Login);

