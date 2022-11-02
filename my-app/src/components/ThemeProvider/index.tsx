import React, {createContext, Dispatch, ReactNode, useReducer} from "react";

type PropsType = {
    children: ReactNode
}
const initialStore = {
    darkMode: false,
}

type ActionType = {
    type: string
}

const themeReducer = (state: typeof initialStore, action: object & ActionType) => {
    switch (action.type) {
        case "LIGHTMODE":
            return {darkMode: false};
        case "DARKMODE":
            return {darkMode: true};
        default:
            return state;
    }
};

export const ThemeContext = createContext <{
    state: typeof initialStore,
    dispatch: Dispatch<any>
}>({
        state: initialStore,
        dispatch: () => null
});


export const ThemeProvider = ({children}: PropsType) => {
    const [state, dispatch] = useReducer(themeReducer, initialStore);
    return (
        <ThemeContext.Provider value={{state, dispatch}}>{children}</ThemeContext.Provider>
    )
}