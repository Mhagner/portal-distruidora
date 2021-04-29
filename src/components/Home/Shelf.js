import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HandlerError } from '../HandlerError';
import { Category } from './Category';

export function Shelf({
    collection,
    arrows,
    shelfClass,
    dotListClass,
    itemClass,
    shelfTitle,
    responsive,
    sliderClass,
    shelfTitleSpan
}) {
    return (
        <div className="container">
            <div className="title-shelf-row">
                <h2 className="title-shelf">{shelfTitle}{' '}<span>{shelfTitleSpan}</span></h2>
            </div>
            {(collection) ? (
                <Carousel
                    additionalTransfrom={0}
                    arrows={arrows}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className={shelfClass}
                    containerClass="container-with-dots"
                    dotListClass={dotListClass}
                    draggable
                    focusOnSelect={true}
                    infinite
                    itemClass={itemClass}
                    keyBoardControl
                    minimumTouchDrag={60}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={true}
                    responsive={responsive}
                    showDots={false}
                    sliderClass={sliderClass}
                    slidesToSlide={1}
                    swipeable
                >
                    {collection.map((item, index) => (
                        <Category 
                            key={index}
                            image={item.image}
                            text={item.text}
                            link={item.link}
                        /> 
                    ))}
                </Carousel>
            ) : (
                <HandlerError />
            )}

        </div>

    )
}