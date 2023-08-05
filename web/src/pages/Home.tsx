import { useEffect } from "react";
import { useGetData } from "../hooks/useGetData"
import { useNewsContext } from "../context/NewsContext";
import NewsCard from "../components/newsCard";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
    const {getData} = useGetData();
    const {news} = useNewsContext()

    useEffect(() => {
        getData()
      }, [])

    return (<>
        <Container>
            <Row>
                {                    
                    news?.list?.map((newsItem, index) => {
                            return <Col xl={3} sm={5} xs={8} className="m-2" > <NewsCard news={newsItem} index={index} />  </Col>
                        })
                }
            </Row>
        </Container>
    </>)
}

export default Home
