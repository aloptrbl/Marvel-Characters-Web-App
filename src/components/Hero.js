import React, {useEffect} from 'react';
import './style.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
const Hero = ({name, thumbnail}) => {

    
   

    return (
        
      <Col  xs="2" sm="3">
      <Card className="h-100">
    
        <CardImg className="card-img" top width="100%" src={thumbnail.path+'.'+thumbnail.extension} alt="Card image cap" />
        <CardBody>
          <CardTitle className="hero-name">{name}</CardTitle>
        </CardBody>
      </Card>
      </Col>
    )
}

export default Hero;