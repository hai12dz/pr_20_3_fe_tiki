import React from "react";
import { Carousel } from "antd";
import CarouselComponent from "./slide";
import 'styles/carousel.scss'

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <img
            src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png"
            alt="Previous"
            className={className}
            onClick={onClick}
            style={{
                ...style,
                width: "32px",
                height: "56px",
                left: "1px",
                top: "50%",
                transform: "translateY(-50%) rotate(180deg)",
                position: "absolute",
                cursor: "pointer",
                zIndex: 10,
            }}
        />
    );
};

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <img
            src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png"
            alt="Next"
            className={className}
            onClick={onClick}
            style={{
                ...style,
                width: "32px",
                height: "56px",
                right: "1px",
                top: "50%",
                transform: "translateY(-50%)",
                position: "absolute",
                cursor: "pointer",
                zIndex: 10
            }}
        />
    );
};

const MyCarousel = () => {
    return (
        <div className="carousel-container">
            <Carousel arrows infinite prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
                <CarouselComponent />
                <CarouselComponent />
                <CarouselComponent />
            </Carousel>
        </div>
    );
};


export default MyCarousel;
