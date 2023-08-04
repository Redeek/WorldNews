import { useNewsContext } from "../context/NewsContext";
import axios from "axios";

import { NewsMockData } from "../Data/MockData";

export const getNews = async () => {

    var params = {
        "api-key": "e9ff4e29c62f4561a44be9fa911561a8"
    }

    const news = await axios.get("https://api.worldnewsapi.com/search-news", {
        params: params
    })

    const naw = news.data.news
    
    return { naw }
}

export const useGetData = () => {
    const {dispatch} = useNewsContext();
    const getData = async () =>{
        try {
            // const news = await getNews();
            // console.log(news.naw)
            // const list = news.naw 
            dispatch({
                type: "GET",
                // payload: {list: list}
                payload: {list: NewsMockData}
            })
            
        } catch (error) {
            console.error("error while fetching data", error)
        }
        
    }
    return { getData };
}