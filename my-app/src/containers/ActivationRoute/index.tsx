import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {Success} from "../Success";
const headers = {
    'Content-Type': 'application/json;charset=utf-8',
}
export const ActivationRoute = () => {
    const {uid, token} = useParams();
    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
            method: 'POST',
            body: JSON.stringify({uid, token}),
            headers
        }).then(response => {
            console.log('response', response)
            response.json()
        })
            .then(data => console.log(data));
    }, [])
    return (
        <div><Success /></div>

    )
}

//<div>uid: {uid} token: {token}</div>