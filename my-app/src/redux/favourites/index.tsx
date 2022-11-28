import {useState} from 'react';
import {useAppSelector} from "../rootReducer";
import {useDispatch} from "react-redux";
import {toggleFavourite} from "../posts/action";

//export const FavoriteTab = (id: number) => {

//    const favoritesIdArray = useAppSelector(state => state.postReducer.id)
//    const [state, setState] = useState(favoritesIdArray.find(e => e === id))
//    const dispatch = useDispatch();

//    const addId = () => {

//        if (favoritesIdArray.find(e => e === id)) {
//            dispatch(toggleFavourite([...favoritesIdArray].filter(e => e !== id)))
//            setState(undefined)
//        } else {
//            dispatch(toggleFavourite([...favoritesIdArray, id]))
//           setState(id)
//        }
//    }
//    return {state, addId};
//};