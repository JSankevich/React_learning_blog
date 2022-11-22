import { put, call, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {SIGNUP_REQUEST, SignUpPayload, SignUpSuccessPayload} from "../redux/authReducer/type";
import {signUpFailure, signUpRequest, signUpSuccess} from "../redux/authReducer/action";


const fetchData = async (
    payload: SignUpPayload
): Promise<SignUpSuccessPayload> => {
    debugger
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
    }
    console.log('fdsf');
    const response = await fetch('https://studapi.teachmeskills.by/auth/users', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers,
    })

    const data = await response.json()

    console.log(data)
    if (!response.ok) {
        return Promise.reject(data)
    }

    return data as SignUpSuccessPayload
}

export function* signUp(action: PayloadAction<SignUpPayload>) {
    try {
        const data: SignUpSuccessPayload = yield call(fetchData, action.payload)
        yield put(signUpSuccess(data))
    } catch (error: any) {
        yield put(signUpFailure(error))
    }
}

export function* signUpSaga() {
    yield takeEvery(SIGNUP_REQUEST, signUp)
}