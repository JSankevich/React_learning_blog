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

type CardInfo = {
    id?: number,
    image?: string,
    text?: string,
    date?: string,
    lesson_num?: number,
    title?: string,
    author?: number,
}

export const BigCardWrapper = () => {
    const [items, setItems] = useState<CardInfo[]>([]);
    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?lesson_num=50&limit=20')
            .then(response => response.json())
            .then(data => setItems(data.results))
    },[])
    return (
            <Wrapper>
            <WrLeft>
            {items.map(e =>
            <NavLink to="/SelectedPost">
            <BigCard key={e.id}>
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
            {items.map(e =>
                <NavLink to="/SelectedPost">
                <MediumCard key={e.id}>
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
                {items.map(e =>
                    <NavLink to="/SelectedPost">
                    <LittleCard key={e.id}>
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




