import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {Link, Redirect} from "react-router-dom";

import {auth} from "../actions";

// Styling
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import styles from "../assets/jss/sidePage";
import GridContainer from "./Grid/GridContainer";
import Card from "./Card/Card";
import CardHeader from "./Card/CardHeader";
import CardBody from "./Card/CardBody";
import CustomInput from "./CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import CardFooter from "./Card/CardFooter";
import Button from "./CustomButtons/Button";

import LockOpenIcon from '@material-ui/icons/LockOpen';
import People from "@material-ui/icons/People";

import image from "../assets/img/WritingImplements.jpg";

// Framer Motion
import {motion, AnimatePresence} from "framer-motion";

class Register extends Component {

    state = {
        card: "cardHidden",
        username: "",
        password: "",
    };

    jumpIn = setTimeout(() => {
        this.setState({card: ""});
    }, 700);

    onSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.username, this.state.password);
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
                            <CardHeader color={"warning"} className={classes.cardHeader}>
                                <h1>Register</h1>
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
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.9}}
                                    >
                                        <Button color={"warning"} type={"submit"}>
                                            Register
                                        </Button>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.9}}
                                    >
                                        <Link to={"/login"} style={{textDecoration: "None"}}>
                                            <Button simple color={"info"}>
                                                Already have an account?
                                            </Button>
                                        </Link>
                                    </motion.div>
                                </CardFooter>
                            </form>
                        </Card>
                    </GridContainer>
                </div>
            </div>
        );

        // {/* Original Register form */}
        // {/*<form onSubmit={this.onSubmit}>*/}
        // {/*    <fieldset>*/}
        // {/*        <legend>Register</legend>*/}
        // {/*        {this.props.errors.length > 0 && (*/}
        // {/*            <ul>*/}
        // {/*                {this.props.errors.map(error => (*/}
        // {/*                    <li key={error.field}>{error.message}</li>*/}
        // {/*                ))}*/}
        // {/*            </ul>*/}
        // {/*        )}*/}
        // {/*        <p>*/}
        // {/*            <label htmlFor="username">Username</label>*/}
        // {/*            <input*/}
        // {/*                type="text"*/}
        // {/*                id="username"*/}
        // {/*                onChange={e => this.setState({username: e.target.value})}*/}
        // {/*            />*/}
        // {/*        </p>*/}
        // {/*        <p>*/}
        // {/*            <label htmlFor="password">Password</label>*/}
        // {/*            <input*/}
        // {/*                type="password"*/}
        // {/*                id="password"*/}
        // {/*                onChange={e => this.setState({password: e.target.value})}*/}
        // {/*            />*/}
        // {/*        </p>*/}
        // {/*        <p>*/}
        // {/*            <button type="submit">Register</button>*/}
        // {/*        </p>*/}
        //
        // {/*        <p>*/}
        // {/*            Already have an account? <Link to="/login">Login</Link>*/}
        // {/*        </p>*/}
        // {/*    </fieldset>*/}
        // {/*</form>*/}
        // {/* Original Register Form */}
    }
}

const mapStateToProps = state => {
    let errors = [];
    if (state.auth.errors) {
        errors = Object.keys(state.auth.errors).map(field => {
            return {field, message: state.auth.errors[field]};
        });
    }
    return {
        errors,
        isAuthenticated: state.auth.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        register: (username, password) => dispatch(auth.register(username, password)),
    };
};

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles),
)(Register);