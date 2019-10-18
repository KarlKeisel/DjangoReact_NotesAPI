const apiBaseRoute = "http://localhost:8000/api/auth/";
const headers = {"Content-Type": "application/json"};

export const loadUser = () => {
    return (dispatch, getState) => {
        dispatch({type: "USER_LOADING"});

        const token = getState().auth.token;
        const apiRoute = `${apiBaseRoute}user/`;

        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }

        return fetch(apiRoute, {headers,})
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");  // TODO Change to a link?
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({type: 'USER_LOADED', user: res.data});
                    return res.data
                } else if (res.status >= 400 && res.status < 500) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                }
            })
    }
};

export const login = (username, password) => {
    return (dispatch, getState) => {
        let body = JSON.stringify({username, password});

        const apiRoute = `${apiBaseRoute}login/`;

        return fetch(apiRoute, {headers, body, method: "POST"})
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");  // TODO Change to a link?
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({type: "LOGIN_SUCCESSFUL", data: res.data});
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                } else {
                    dispatch({type: "LOGIN_FAILED", data: res.data});
                    throw res.data;
                }
                }
            )
    }
};

export const logout = () => {
    return (dispatch, getState) => {
        return fetch(`${apiBaseRoute}logout/`, {headers, body: "", method: "POST"})
            .then(res => {
                if (res.status === 204) {
                    return {status: res.status, data: {}};
                } else if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 204) {
                    dispatch({type: "LOGOUT_SUCCESSFUL"});
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                }
            })
    }
};

export const register = (username, password) => {
    return (dispatch, getState) => {
        let body = JSON.stringify({username, password})

        return fetch(`${apiBaseRoute}register/`, {headers, body, method: "POST"})
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data}
                    })
                } else {
                    console.log("Server Error!");  // TODO Make a separate page?
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({type: "REGISTRATION_SUCCESSFUL", data: res.data});
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                } else {
                    dispatch({type: "REGISTRATION_FAILED", data: res.data});
                    throw res.data;
                }
            })
    }
};