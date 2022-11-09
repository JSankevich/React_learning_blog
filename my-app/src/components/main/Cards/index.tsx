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

export type CardInfo = {
    id?: number,
    image?: string,
    text?: string,
    date?: string,
    lesson_num?: number,
    title?: string,
    author?: number,
}

export const BigCardWrapper = () => {
    const [posts, setPosts] = useState<CardInfo[]>([]);
    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?lesson_num=50&limit=20')
            .then(response => response.json())
            .then(data => setPosts(data.results))
    },[])
    return (
            <Wrapper>
            <WrLeft>
            {posts.map((post) =>
            <NavLink key={post.id} to={`/post/${post.id}`}>
            <BigCard>
                <TextContent>
                    <DataPost>{post.date}</DataPost>
                    <TitlePost>{post.title}</TitlePost>
                    <TextPost>{post.text}</TextPost>
                </TextContent>
                <ImageWrapper>
                    <img src={post.image} alt={'Big Card'}/>
                </ImageWrapper>
                <ButtonsForCard>
                    <LikesWrapper>
                        <Like>
                            <img src={like} alt={'like'}/>
                            <p>{post.lesson_num}</p>
                        </Like>
                        <Dislike>
                            <img src={dislike} alt={'dislike'}/>
                            <p>{post.lesson_num}</p>
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
            {posts.map((post) =>
                <NavLink key={post.id} to={`/post/${post.id}`}>
                <MediumCard>
                <ImageWrapperMed>
                    <img src={post.image} alt={'Medium Card'}/>
                </ImageWrapperMed>
                <TextContentMed>
                <DataPostMed>{post.date}</DataPostMed>
                <TitlePostMed>{post.title}</TitlePostMed>
                </TextContentMed>
                <ButtonsForCardMed>
                    <LikesWrapper>
                        <Like>
                            <img src={like} alt={'like'}/>
                            <p>{post.lesson_num}</p>
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
                {posts.map((post) =>
                    <NavLink key={post.id} to={`/post/${post.id}`}>
                    <LittleCard>
                        <TextContentLit>
                            <DataPostLit>{post.date}</DataPostLit>
                            <TitlePostLit>{post.title}</TitlePostLit>
                        </TextContentLit>
                        <ImageWrapperLit>
                            <img src={post.image} alt={'Medium Card'}/>
                        </ImageWrapperLit>
                        <ButtonsForCard>
                            <LikesWrapper>
                                <Like>
                                    <img src={like} alt={'like'}/>
                                    <p>{post.lesson_num}</p>
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




