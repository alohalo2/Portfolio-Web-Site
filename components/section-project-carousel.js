"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./section-project-carousel.module.css";

export default function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // 자동 슬라이드 기능
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // 3초마다 슬라이드 변경
        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거
    }, [images]); // `images`가 변경될 때만 재실행

    return (
        <div className={classes.carouselBox}>
            <button className={classes.prevButton} onClick={prevSlide}>
                <Image 
                    src='/images/left_arrow_icon.svg' 
                    alt="left arrow icon"
                    width={35}
                    height={35}
                />
            </button>
            <div className={classes.carousel}>
                <div className={classes.imageWrapper}>
                    <Image
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
            <button className={classes.nextButton} onClick={nextSlide}>
                <Image 
                    src='/images/right_arrow_icon.svg' 
                    alt="right arrow icon"
                    width={35}
                    height={35}
                />
            </button>
        </div>
    );
}
