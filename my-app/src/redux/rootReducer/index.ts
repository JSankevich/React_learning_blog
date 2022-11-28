import {applyMiddleware, combineReducers, createStore} from "redux";
import {postReducer} from "../posts/postsreducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {authReducer} from "../authReducer/authReducer";
import createSagaMiddleware from 'redux-saga';
import {signUpSaga} from "../../saga/signUp";
import {postReducerType} from "../posts/types";
import {signInSaga} from "../../saga/signIn";
import {all} from "redux-saga/effects"
import {themeReducer} from "../../components/ThemeProvider";

export const useAppSelector: TypedUseSelectorHook<postReducerType> = useSelector;
//export const useThemeSelector: TypedUseSelectorHook<themeReducerType> = useSelector;

const rootReducer = combineReducers(
    {
          postReducer,
          authReducer,
//          themeReducer,
    }
)

const sagaMiddleware = createSagaMiddleware ();

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

function* rootSaga() {
    yield all(
         [
            signUpSaga(),
            signInSaga(),
            ]
    )
}
sagaMiddleware.run (rootSaga)



