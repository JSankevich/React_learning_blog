import {tmsFetch} from "./requestWithToken";

export const getProfile = async () => {
    const response = await tmsFetch(
        'https://studapi.teachmeskills.by/auth/users/me/'
    );
    if (response.ok) {
        return await response.json();
    }
};