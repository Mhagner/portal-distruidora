import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PatnerLogo } from './PatnerLogo';

export function ShelfLogos({
    sliderClassLogo,
    shelfClassLogo,
    dotListClassLogo,
    itemClassLogo,
    responsive,
    collectionLogos
}) {
    return (
        <Carousel
            additionalTransfrom={0}
            autoPlay={true}
            autoPlaySpeed={2000}
            centerMode={false}
            className={shelfClassLogo}
            containerClass="container-with-dots"
            dotListClass={dotListClassLogo}
            draggable
            focusOnSelect={false}
            infinite
            itemClass={itemClassLogo}
            keyBoardControl
            minimumTouchDrag={60}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass={sliderClassLogo}
            slidesToSlide={1}
            swipeable
            arrows={true}
        >
            {collectionLogos.map((logo, index) => {
                const [item] = logo.linkLogo
                
                return (
                    <PatnerLogo key={index}
                        linkLogo={item.url}
                        altLogo={logo.altLogo}
                    />
                )
            })}
        </Carousel>
    )
}