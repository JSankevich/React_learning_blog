import React, {ReactElement, useEffect, useState} from "react";
import {SelectedWrapper, ImageSelectedPost, DescriptionSelected, ButtonsLineSelected,
    LikeWrapperSelected, DislikeWrapperSelected, BookmarkWrapperSelected, WrapperLikeDislike, TitleSelected,
    Home} from "./style";
import like from "./images/like.png";
import dislike from "./images/dislike.png";
import Bookmark from "./images/Bookmark.png";
import bigPost from "./images/bigPost.svg";
import {NavLink, useParams} from "react-router-dom";
import {CardInfo} from "../../redux/posts/types";
import {BackHome} from "../signInForm/style";

type ItemInfo = {
    id: string,
}

export const SelectedPost = ():ReactElement => {
    const { id } = useParams<ItemInfo>();
    const [post, setPost] = useState<CardInfo[]>([]);
    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?lesson_num=50&limit=20')
            .then(response => response.json())
            .then(data => setPost (data.results))
    },[])

    return (
        <>
        <SelectedWrapper>
        {post.map ((item) =>
        item.id == Number(id) &&
        <NavLink key={item.id} to={`/post/${item.id}`}>

        <NavLink to="/"><Home>Home</Home></NavLink>
        <TitleSelected>{item.title}</TitleSelected>
        <ImageSelectedPost><img src={item.image} alt='image' /></ImageSelectedPost>
        <DescriptionSelected>{item.text}</DescriptionSelected>
        <ButtonsLineSelected>
            <WrapperLikeDislike>
                <LikeWrapperSelected><img src={like} alt='like' /></LikeWrapperSelected>
                <DislikeWrapperSelected><img src={dislike} alt='dislike' /></DislikeWrapperSelected>
            </WrapperLikeDislike>
            <BookmarkWrapperSelected>
                <img src={Bookmark} alt='bookmark' />
                <p>Add to favorites</p>
            </BookmarkWrapperSelected>
        </ButtonsLineSelected>
        </NavLink>
        )}
        </SelectedWrapper>
        </>
    )
};