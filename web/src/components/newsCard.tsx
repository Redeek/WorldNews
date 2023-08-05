import React from 'react'
import { NewsInterface } from '../models/interfaces/NewsInterface'
import { Card, Button, Row, Col } from 'react-bootstrap';
import TextSplitter from '../utilities/TextSplitter';

interface NewsListProp {
    news: NewsInterface;
    index: number;
}

const newsCard = ({news, index} : NewsListProp) => {
  
  return (<>
    <Card style={{height:"550px", display:"flex", flexDirection:"column", position:"relative"}} id={news.id.toString()} >
      <Card.Img variant="top" src={`https://picsum.photos/id/${news.id}/200/150`} alt="Image of news"/>
      <Card.Body className='mb-0'>
        <Col >
          <Row>
            <Card.Title style={{whiteSpace: "normal", overflow: "hidden", lineHeight:"1,2em", height: "3.6em"}}>{news.title}</Card.Title>
          </Row>
          <Row style={{ maxHeight: "9em"}}>
            <Card.Text >
              <div style={{whiteSpace: "normal", overflow: "hidden", lineHeight:"1,2em", height: "9em"}}>
                {news.text}
              </div>
              <div >
                <p style={{display:"inline"}}>...</p>
              </div>
            </Card.Text>
            
          </Row>
        </Col>
      </Card.Body>
      <div style={{height:"35px", marginBottom:"15px", marginTop:"10px", width:"100%", display:"flex", justifyContent:"center"}}>
        <a href={news.url} target="_blank" rel="noreferrer">
          <Button variant="primary">Read more!</Button>
        </a>
      </div>
  
    </Card>
    </>)
}

export default newsCard