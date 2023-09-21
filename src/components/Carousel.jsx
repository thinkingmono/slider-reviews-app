import { useState } from 'react';
import { longList } from '../data';
import { FaChevronLeft, FaChevronRight } from '../../node_modules/react-icons/fa';
import Slide from './Slide';

const Carousel = () => {
    const [personList, setPersonList] = useState(longList);
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => {
            return (prevSlide - 1 + personList.length) % personList.length;
        });
        // console.log(slideIndex);
    }
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => {
            return (prevSlide + 1) % personList.length;
        });
        // console.log(slideIndex);
    }

    return (
        <>
            <div className='slider-container'>
                <button type="button" className='prev' onClick={prevSlide}><FaChevronLeft /></button>
                {personList ? personList.map((person, index) => {
                    const { id } = person;
                    return <Slide {...person} key={id} currentSlide={currentSlide} index={index} />
                }) : null}
                <button type="button" className='next' onClick={nextSlide}><FaChevronRight /></button>
            </div>
        </>
    )
}

export default Carousel