import React, {useEffect, useState} from "react";
import {
    BigCard,
    ButtonsForCard,
    ButtonsForCardMed,
    DataPost, DataPostLit,
    DataPostMed,
    Dislike,
    ImageWrapper, ImageWrapperLit,
    ImageWrapperMed,
    Like,
    LikesWrapper, LittleCard,
    LittleCardWrapper,
    MediumCard,
    MediumCardWrapper,
    More,
    OptionWrapper,
    Save,
    TextContent, TextContentLit,
    TextContentMed,
    TextPost,
    TitlePost, TitlePostLit,
    TitlePostMed, Wrapper,
    WrLeft
} from "../../components/main/Cards/style";
import {NavLink} from "react-router-dom";
import like from "../../components/main/Cards/images/like.png";
import dislike from "../../components/main/Cards/images/dislike.png";
import Bookmark from "../../components/main/Cards/images/Bookmark.png";
import MoreHorizontal from "../../components/main/Cards/images/MoreHorizontal.png";
import {addPosts} from "../../redux/posts/action";
import {CardInfo} from "../../redux/posts/types";
import {Pagination} from "./paginate";

const LIMIT_RANGE = 20;
const getPosts = (offset: number) => {
    return fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT_RANGE}${offset ? ('&offset=' + offset) : ''}`)
    .then(response => response.json())
}

export const PaginationRoute = () => {
    const [posts, setPosts] = useState<CardInfo[]>([]);
    const [count, setCount] = useState();
    const [offset, setOffset] = useState(0)
//    const [error, setError] = useState();


         const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
         fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=20&search=${e.target.value}`)
            .then(response => response.json())
             .then (data => setPosts(data.results))
     };



    useEffect(() => {
        getPosts(offset)
            .then(data => {
                setCount(data.count);
                setPosts(data.results);
            })
//            .catch(error => {
//                setError (error.detail)
//            })
    },[offset])

//    if (error) {
//        return (
//            <h6>{error}</h6>
//        )
//    }
    const handlePageClick = (event: {selected:number}) => {
        setOffset(LIMIT_RANGE * event.selected)
    };

    return (
        <>
        <input type='text' onChange={handleInput}/>
        <h3>Example for pagination</h3>
            <div style={{  flexDirection: "row" ,
                rowGap: "40px",
                columnGap: "30px",
                flexWrap: "wrap",
                display: "flex",
                justifyContent: "space-between"}}>
                {posts.map((post) =>
                    <MediumCard>
                        <ImageWrapperMed>
                            <img src={post.image} alt={'Medium Card'}/>
                        </ImageWrapperMed>
                        <NavLink key={post.id} to={`/post/${post.id}`}>
                            <TextContentMed>
                                <DataPostMed>{post.date}</DataPostMed>
                                <TitlePostMed>{post.title}</TitlePostMed>
                            </TextContentMed>
                        </NavLink>
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
                )}
            </div>
            <Pagination count={count} handlePageClick={handlePageClick} />
        </>
    )
}