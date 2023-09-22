import { FaQuoteRight } from '../../node_modules/react-icons/fa';

const Slide = ({ image, name, title, quote, currentSlide, index }) => {
    // const isActive = currentSlide === index;
    return (
        <>
            <article className='slide' style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}>
                <img src={image} alt={name} className='person-img' />
                <h5 className='name'>{name}</h5>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon' />
            </article>
        </>
    )
}

export default Slide