import React, { createContext, useContext, useReducer } from 'react';
import { reducer, intialState } from "./Reducer";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export default function DataProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, intialState);

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Yuvi Technical",
                image: "./images/hero.svg",
            },
        });
    };

    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "ABOUT",
                image: "./images/about1.svg",
            },
        });
    };

    return (
        <DataContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
            {children}
        </DataContext.Provider>
    )
}