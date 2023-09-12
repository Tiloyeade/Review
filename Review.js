import React, { useState } from 'react';
import people from './data'; // Import your people data
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
function ReviewApp() {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const { name, job, image, text } = people[currentReviewIndex];

    const handleNextReview = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % people.length);
    };

    const handlePrevReview = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
    };

    const handleSurpriseMe = () => {
        const randomIndex = Math.floor(Math.random() * people.length);
        setCurrentReviewIndex(randomIndex);
    };


    return (
        <div className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>

            <div className="buttons">
                <button className='prev-btn' onClick={handlePrevReview}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={handleNextReview}>
                    <FaChevronRight />
                </button>

            </div>
            <button className='random-btn' onClick={handleSurpriseMe}>Surprise Me</button>

        </div>
    );
}

export default ReviewApp;
