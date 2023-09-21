import { FaQuoteRight } from '../../node_modules/react-icons/fa';

const Slide = ({ image, name, title, quote, currentSlide, index }) => {
    const isActive = currentSlide === index;
    return (
        <>
            {isActive &&
                <div className='slide'>
                    <img src={image} alt={name} className='person-img' />
                    <h5 className='name'>{name}</h5>
                    <span className='title'>{title}</span>
                    <p className='text'>{quote}</p>
                    <FaQuoteRight className='icon' />
                </div>
            }
        </>
    )
}

export default Slide