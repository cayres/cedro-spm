import { Reducer } from "redux";
import { AuthenticationActionTypes, AuthenticationState } from "./types";

const initialState: AuthenticationState = {
    token: "",
    errors: undefined,
    loading: false,
};

const reducer: Reducer<AuthenticationState> = ( state = initialState, action) => {
    console.log("########## REDUCER ##########");
    console.log(action.type);
    console.log(action.payload);
    console.log("########## REDUCER ##########");
    switch (action.type) {
        case AuthenticationActionTypes.LOGIN_REQUEST:
            return {...state, loading: true};
        case AuthenticationActionTypes.LOGIN_SUCCESS:
            return {...state, loading: false, token: action.payload, errors: ""};
        case AuthenticationActionTypes.LOGIN_ERROR:
            return {...state, loading: false, errors: action.payload};
        default:
            return state;
    }
};

export {reducer as AuthenticationReducer};
