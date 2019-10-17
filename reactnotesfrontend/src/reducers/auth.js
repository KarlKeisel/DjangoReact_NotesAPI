// Actions for User auth
const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: true,
    user: null,
    errors: {},
};

export default function auth(state=initialState, action) {

    switch (action.type) {

        case 'USER_LOADING':
            return {...state, isLoading: true};

        case 'USER_LOADED':
            return {...state, isAuthenticated: true, isLoading: false, user: action.user};

        case 'LOGIN_SUCCESSFUL':
            // Set 'token' to local storage to preserve login even through closing browser
            localStorage.setItem("token", action.data.token);
            return {...state, ...action.data, isAuthenticated: true, isLoading: false, errors: null};

        // All 3 use same code, will display a different error based on which occurred.
        case 'AUTHENTICATION_ERROR':
        case 'LOGIN_FAILED':
        case 'LOGOUT_SUCCESSFUL':
            localStorage.removeItem("token");
            return {...state, errors: action.data, token: null, user: null,
              isAuthenticated: false, isLoading: false};

        default:
            return state;
    }
}