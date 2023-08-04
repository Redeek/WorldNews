import React from 'react'
import { NewsInterface } from '../models/interfaces/NewsInterface'
import { Card, Button } from 'react-bootstrap';
import TextSplitter from '../utilities/TextSplitter';

interface NewsListProp {
    news: NewsInterface;
    index: number;
}

const newsCard = ({news, index} : NewsListProp) => {
  
  return (<>
    <Card style={{ width: '18rem', maxHeight: "35rem", minHeight: "35rem" }} id={news.id.toString()} >
      <Card.Img variant="top" src={`https://picsum.photos/id/${news.id}/200/150`} alt="Image of news"/>
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text style={{ maxHeight: "15rem", minHeight: "15rem" }}>
          {TextSplitter(news.text)}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>)
}

export default newsCard