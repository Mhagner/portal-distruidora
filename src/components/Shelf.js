import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductItem } from './ProductItem';

export function Shelf({
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
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className={shelfClass}
                containerClass="container-with-dots"
                dotListClass={dotListClass}
                draggable
                focusOnSelect={false}
                infinite
                itemClass={itemClass}
                keyBoardControl
                minimumTouchDrag={60}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                showDots={false}
                sliderClass={sliderClass}
                slidesToSlide={1}
                swipeable
            >
                <ProductItem
                    marca="marca"
                    productDescription="Descrição do produto"
                    image="img/home/interruptor-2.jpg"
                />
                <ProductItem
                    marca="marca"
                    productDescription="Descrição do produto"
                    image="img/home/interruptor-5.jfif"
                />
                <ProductItem
                    marca="marca"
                    productDescription="Descrição do produto"
                    image="img/home/interruptor-4.jpg"
                />
                <ProductItem
                    marca="marca"
                    productDescription="Descrição do produto"
                    image="img/home/interruptor.jpg"
                />
                <ProductItem
                    marca="marca"
                    productDescription="Descrição do produto"
                    image="img/home/interruptor-6.jpg"
                />
                <ProductItem
                    marca="marca"
                    productDescription="Descrição do produto"
                    image="img/home/interruptor-7.jpg"
                />

            </Carousel>
        </div>

    )
}