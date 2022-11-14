import React, {useEffect, useState} from 'react';
import { ButtonsForCardMed,TitlePostMed, TextContentMed, DataPostMed, ImageWrapperMed, MediumCard, OptionWrapper,
    Save, More, Like, Dislike, LikesWrapper, BigCard, TextContent, ImageWrapper, ButtonsForCard, DataPost, TitlePost,
    TextPost, MediumCardWrapper, LittleCardWrapper, ImageWrapperLit, LittleCard, TextContentLit, DataPostLit,
    TitlePostLit, WrLeft, Wrapper } from './style';
import like from './images/like.png';
import dislike from './images/dislike.png';
import Bookmark from './images/Bookmark.png';
import MoreHorizontal from './images/MoreHorizontal.png';
import {NavLink} from "react-router-dom";
import {CardInfo} from "../../../redux/posts/types";
import {useDispatch, useSelector} from "react-redux";
import {addPosts} from "../../../redux/posts/action";
import {useAppSelector} from "../../../redux/rootReducer";


export const BigCardWrapper = () => {
    const [item, setItem] = useState<CardInfo[]>([]);
    const dispatch = useDispatch();
    const posts = useAppSelector(state => state.posts);
    console.log (posts);
    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?lesson_num=50&limit=20')
            .then(response => response.json())
            .then(data => {
                dispatch(addPosts(data.results))
            })
    },[])
    return (
            <Wrapper>
            <WrLeft>
            {posts.map((e) =>
            <NavLink key={e.id} to={`/post/${e.id}`}>
            <BigCard>
                <TextContent>
                    <DataPost>{e.date}</DataPost>
                    <TitlePost>{e.title}</TitlePost>
                    <TextPost>{e.text}</TextPost>
                </TextContent>
                <ImageWrapper>
                    <img src={e.image} alt={'Big Card'}/>
                </ImageWrapper>
                <ButtonsForCard>
                    <LikesWrapper>
                        <Like>
                            <img src={like} alt={'like'}/>
                            <p>{e.lesson_num}</p>
                        </Like>
                        <Dislike>
                            <img src={dislike} alt={'dislike'}/>
                            <p>{e.lesson_num}</p>
                        </Dislike>
                    </LikesWrapper>
                    <OptionWrapper>
                        <Save><img src={Bookmark} alt={'bookmark'}/></Save>
                        <More><img src={MoreHorizontal} alt={'more'}/></More>
                    </OptionWrapper>
                </ButtonsForCard>
            </BigCard>
            </NavLink>
            ).slice(2,3)};

            <MediumCardWrapper>
            {posts.map((e) =>
                <NavLink key={e.id} to={`/post/${e.id}`}>
                <MediumCard>
                <ImageWrapperMed>
                    <img src={e.image} alt={'Medium Card'}/>
                </ImageWrapperMed>
                <TextContentMed>
                <DataPostMed>{e.date}</DataPostMed>
                <TitlePostMed>{e.title}</TitlePostMed>
                </TextContentMed>
                <ButtonsForCardMed>
                    <LikesWrapper>
                        <Like>
                            <img src={like} alt={'like'}/>
                            <p>{e.lesson_num}</p>
                        </Like>
                        <Dislike>
                            <img src={dislike} alt={'dislike'}/>
                            <p></p>
                        </Dislike>
                    </LikesWrapper>
                    <OptionWrapper>
                        <Save><img src={Bookmark} alt={'bookmark'}/></Save>
                        <More><img src={MoreHorizontal} alt={'more'}/></More>
                    </OptionWrapper>
                </ButtonsForCardMed>
            </MediumCard>
            </NavLink>
            ).slice(3,7)}
            </MediumCardWrapper>;
            </WrLeft>

            <LittleCardWrapper>
                {posts.map((e) =>
                    <NavLink key={e.id} to={`/post/${e.id}`}>
                    <LittleCard>
                        <TextContentLit>
                            <DataPostLit>{e.date}</DataPostLit>
                            <TitlePostLit>{e.title}</TitlePostLit>
                        </TextContentLit>
                        <ImageWrapperLit>
                            <img src={e.image} alt={'Medium Card'}/>
                        </ImageWrapperLit>
                        <ButtonsForCard>
                            <LikesWrapper>
                                <Like>
                                    <img src={like} alt={'like'}/>
                                    <p>{e.lesson_num}</p>
                                </Like>
                                <Dislike>
                                    <img src={dislike} alt={'dislike'}/>
                                    <p></p>
                                </Dislike>
                            </LikesWrapper>
                            <OptionWrapper>
                                <Save><img src={Bookmark} alt={'bookmark'}/></Save>
                                <More><img src={MoreHorizontal} alt={'more'}/></More>
                            </OptionWrapper>
                        </ButtonsForCard>
                    </LittleCard>
                    </NavLink>
                ).slice(3,9)}
            </LittleCardWrapper>;
                </Wrapper>
    )
};




