import {createStore} from "redux";
import {postReducer, postsStateType} from "../posts/postsreducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const useAppSelector: TypedUseSelectorHook<postsStateType> = useSelector;
export const store = createStore(postReducer, composeWithDevTools());