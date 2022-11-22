import {CardInfo} from "./types";

export enum ACTION_POST_TYPES {
    ADD_POSTS = "ADD_POSTS",
    TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE"
};

export const addPosts = (postsArray: CardInfo[]) => ({
    type: ACTION_POST_TYPES.ADD_POSTS,
    payload: {
        posts:  postsArray
    }
})

export const toggleFavourite = (favouriteArray: number[]) => ({
    type: ACTION_POST_TYPES.TOGGLE_FAVOURITE,
    payload: {
        id: favouriteArray
    }
})
