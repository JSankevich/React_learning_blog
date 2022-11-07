import React, {ReactElement, useEffect, useState} from "react";
import {SelectedWrapper, ImageSelectedPost, DescriptionSelected, ButtonsLineSelected,
    LikeWrapperSelected, DislikeWrapperSelected, BookmarkWrapperSelected, WrapperLikeDislike, TitleSelected,
    Home} from "./style";
import like from "./images/like.png";
import dislike from "./images/dislike.png";
import Bookmark from "./images/Bookmark.png";
import bigPost from "./images/bigPost.svg";
import {NavLink} from "react-router-dom";

type CardInfo = {
    id?: number,
    image?: string,
    text?: string,
    date?: string,
    lesson_num?: number,
    title?: string,
    author?: number,
}

export const SelectedPost = ():ReactElement => {
    const [items, setItems] = useState<CardInfo[]>([]);
    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?lesson_num=50&limit=20')
            .then(response => response.json())
            .then(data => setItems(data.results))
    },[])
    return (
        <>
        <SelectedWrapper>
            <NavLink to="/"><Home>Home</Home></NavLink>
        <TitleSelected>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</TitleSelected>
        <ImageSelectedPost><img src={bigPost} alt='image' /></ImageSelectedPost>
        <DescriptionSelected>Astronauts Kayla Barron and Raja Chari floated out of the International Space Station
            airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the
            research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit,
            a U.S. record for a single spaceflight.</DescriptionSelected>
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
        </SelectedWrapper>
        </>
    )
};