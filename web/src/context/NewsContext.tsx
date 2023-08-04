import { ReactNode, createContext, useContext } from "react"
import { NewsInterface } from "../models/interfaces/NewsInterface"
import React from 'react'

export interface MockContextProps {
    children: ReactNode;
}

export interface NewsProviderProps {
    news: {
        list: NewsInterface[];
    },
    dispatch: (payload: any) => void;
}

export const NewsContext = createContext<NewsProviderProps>({
    news: {
        list:[]
    },
    dispatch: () => {}
});

export const NewsReducer = (state: any, action: any) => {
    switch(action.type){
        case "GET":
            return {news: {...action.payload}};
        default:
            return state;
    }
}

export const NewsContextProvider = ({children}:MockContextProps) => {
    const [state, dispatch] = React.useReducer(NewsReducer, {news:[]})

    return (
        <NewsContext.Provider value={{...state, dispatch}}>
            {children}
        </NewsContext.Provider>
    );
}

export const useNewsContext = (): NewsProviderProps => {
    const context = useContext(NewsContext);
    if (!context) {
      throw new Error('useMockContext must be used within a MockContextProvider');
    }
    return context;
  };
