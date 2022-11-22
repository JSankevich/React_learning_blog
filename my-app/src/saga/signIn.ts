import { put, call, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {
    SIGNIN_REQUEST,
    SignInError,
    SignInPayload,
    SignInSuccessPayload,
} from "../redux/authReducer/type";
import {signInFailure, signInSuccess} from "../redux/authReducer/action";
//import {getProfile} from "../services/loginService";


const signInRequest = async (
    payload: SignInPayload
): Promise<SignInSuccessPayload> => {
    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
    }
    const response = await fetch(
        'https://studapi.teachmeskills.by/auth/jwt/create/',
        {
            method: 'POST',
            body: JSON.stringify(payload),
            headers,
        }
    )

    const data = await response.json()

    if (!response.ok) {
        return Promise.reject(data as SignInError)
    }

    localStorage.setItem('access', JSON.stringify(data.access))
    localStorage.setItem('refresh', JSON.stringify(data.refresh))

    return data as SignInSuccessPayload
}

export function* signIn(action: PayloadAction<SignInPayload>) {
    try {
        const data: SignInSuccessPayload = yield call(signInRequest, action.payload)
        yield put(signInSuccess(data))
        // @ts-ignore
        // const userInfo: any = yield call(getProfile);
        console.log(userInfo);
    } catch (error: any) {
        yield put(signInFailure(error))
    }
}

export function* signInSaga() {
    yield takeEvery(SIGNIN_REQUEST, signIn)
}