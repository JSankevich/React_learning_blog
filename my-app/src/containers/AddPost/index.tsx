import React, {ReactElement, useRef, useState} from "react";
import {Title} from "../../components/Title";
import {NavLink} from "react-router-dom";
import {BackHome} from "../signInForm/style";
import {FormWrapper} from "./style";
import {tmsFetch} from "../../saga/utils/requestWithToken";


export const AddPost = (): ReactElement => {
    const formRef = useRef<HTMLFormElement>(null);
    const [imageSrc, setImageSrc] = useState('');
    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        debugger
    event.preventDefault();
    console.log ('ok')

    if (formRef?.current) {
        // console.log(new FormData (formRef.current));
        console.log ('ok');
        tmsFetch('https://studapi.teachmeskills.by/blog/posts/', {
            method: "POST",
            body: new FormData (formRef.current),
            })
            .then (response => response.json())
            .then (data => console.log(data))
    } console.log ('error')
    };

    const handleInputValue = (event: any) => {
        const image = URL.createObjectURL(event.target.files[0]);
        setImageSrc(image);
    };

    return (
        <>
        <BackHome><NavLink to="/">Home</NavLink></BackHome>
        <Title text={'Add post'} />
            {imageSrc ? (
                <>
                <img width="100px" height="100px" src={imageSrc} alt='picture' />
                </>
            ):null}
            <form ref={formRef}>
                <FormWrapper>
                    <input type="text" name="title" placeholder="title"/>
                    <input type="text" name="lesson_num" placeholder="lesson"/>
                    <input type="file" name="image" placeholder="image" onChange={handleInputValue} />
                    <input type="text" name="text" placeholder="description"/>
                    <input type="submit" onSubmit={handleSubmit} />
                </FormWrapper>
            </form>

        </>
    )
}




