import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { list } from '../data';
import { FaQuoteRight } from '../../node_modules/react-icons/fa';
import Slider from "react-slick";

const SlickSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true

    };

    return <section className="slick-container">
        <Slider {...settings}>
            {list ? list.map((person) => {
                const { id, image, name, title, quote } = person;
                return <article key={id}>
                    <img src={image} alt={name} className='person-img' />
                    <h5 className='name'>{name}</h5>
                    <p className='title'>{title}</p>
                    <p className='text'>{quote}</p>
                    <FaQuoteRight className='icon' />
                </article>
            }) : <h3>There are no data</h3>}
        </Slider>
    </section>
}

export default SlickSlider;