import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/carousel.css"

function ImageCarousel(props) {
    return (
      <Carousel className="w-50 top-50 start-50 translate-middle-x">
        <Carousel.Item class="carrito">
          <img
            className="d-block w-100"
            src={props.image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props.captionTitle1}</h3>
            <p>{props.captionText1}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item class="carrito">
          <img
            className="d-block w-100"
            src={props.image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>{props.captionTitle2}</h3>
            <p>{props.captionText2}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item class="carrito">
          <img
            className="d-block w-100"
            src={props.image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>{props.captionTitle3}</h3>
            <p>{props.captionText3}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ImageCarousel;