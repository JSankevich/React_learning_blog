import {ACTION_POST_TYPES} from "./action";

export type CardInfo = {
    id?: number,
    image?: string,
    text?: string,
    date?: string,
    lesson_num?: number,
    title?: string,
    author?: number,
    favourite?: boolean,
}

export type ActionPostType = {
    type: ACTION_POST_TYPES,
    payload: {
        posts: CardInfo[],
        id?: number,
    }
}