import React, { useEffect } from "react";

import { Link, Redirect } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {auth} from "../actions";


export default function Logout() {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    const dispatch = useDispatch();
    const logout = () => dispatch(auth.logout());

    useEffect(() => {
        logout()
    });

    return (
        <>
            <Redirect to={"/"}/>
        </>
    )
}