import { useEffect } from "react";
import { useGetData } from "../hooks/useGetData"
import { useNewsContext } from "../context/NewsContext";
import NewsCard from "../components/newsCard";

const Home = () => {
    const {getData} = useGetData();
    const {news} = useNewsContext()

    useEffect(() => {
        getData()
      }, [])

    return (<>
        <div>Home</div>
        {console.log(news.list)}
        {
            // news && Array.isArray(news) ? (news?.list?.map((newsItem, index) => {
            //     return <NewsCard news={newsItem} index={index} /> 
            // })) : (<div>no news</div>)
            
            news?.list?.map((newsItem, index) => {
                    return <NewsCard news={newsItem} index={index} /> 
                })
        }
    </>)
}

export default Home
