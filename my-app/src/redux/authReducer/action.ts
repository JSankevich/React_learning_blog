import {
    REGISTER_FAILURE, REGISTER_SUCCESS, SIGNIN_REQUEST,
    SignInError,
    SignInPayload,
    SignInSuccessPayload,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SignUpError,
    SignUpPayload,
    SignUpSuccessPayload
} from "./type";

export const signUpFailure = (payload: SignUpError) => ({
    type: SIGNUP_FAILURE,
    payload: payload
});

export const signUpSuccess = (payload: SignUpSuccessPayload) => ({
    type: SIGNUP_SUCCESS,
    payload: payload
});

export const signUpRequest = (payload: SignUpPayload) => ({
    type: SIGNUP_REQUEST,
    payload: payload
})



export const signInSuccess = (payload: SignInSuccessPayload) => ({
    type: REGISTER_FAILURE,
    payload: payload
});

export const signInRequest = (payload: SignInPayload) => ({
    type: SIGNIN_REQUEST,
    payload: payload
})

export const signInFailure = (payload: SignInError) => ({
    type: REGISTER_SUCCESS,
    payload: payload
});

export const registerSuccess = (profile: SignUpSuccessPayload) => ({
    type: REGISTER_SUCCESS,
    payload: profile,
});
