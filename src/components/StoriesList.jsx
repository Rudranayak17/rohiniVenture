import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons from react-icons
import Story from './story';
import { stories } from '../constant/constant';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg cursor-pointer`}
            style={{
                ...style,
                display: 'flex', // Use flex to center the icon
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10, // Higher zIndex to ensure visibility
            }}
            onClick={onClick}
        >
            <FaChevronRight size={20} />
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg cursor-pointer`}
            style={{
                ...style,
                display: 'flex', // Use flex to center the icon
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10, // Higher zIndex to ensure visibility
            }}
            onClick={onClick}
        >
            <FaChevronLeft size={20} />
        </div>
    );
};


const StoriesCarousel = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="relative overflow-hidden mx-auto w-full max-w-screen-lg">
            <h1 className="text-4xl text-center font-bold my-8">Story of PWD</h1>
            <Slider {...settings}>
                {stories.map((story, index) => (
                    <div key={index} className="p-4">
                        <Story
                            candidateName={story.candidateName}
                            storyContent={story.storyContent}
                            imageUrl={story.imageUrl}
                            sharelink={story.sharelink}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default StoriesCarousel;
