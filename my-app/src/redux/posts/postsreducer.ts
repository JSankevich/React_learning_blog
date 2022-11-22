import {ActionPostType, CardInfo, postsStateType} from "./types";
import {ACTION_POST_TYPES} from "./action";

//export type postsStateType = {
//    posts: Array<CardInfo>,
//}

const initialPostState: postsStateType = {
    posts: [],
    id: [],
}


export const postReducer = (state = initialPostState, action: ActionPostType) => {
    switch (action.type) {
        case ACTION_POST_TYPES.ADD_POSTS:
            return {...state, posts: action.payload.posts};
        case ACTION_POST_TYPES.TOGGLE_FAVOURITE:
            return {...state, id: action.payload.id};
        default:
            return {...state}
}
}

//posts: state.posts.map(item => item.id === action.payload.id
//    ? {...item, favourite: !item.favourite} : item)