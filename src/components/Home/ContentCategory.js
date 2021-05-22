import { Category } from './Category'
import { categories } from '../../data'
import { TitlePage } from '../TitlePage'

export function ContentCategory() {
    return (
        <section className="content__category content__category--grey">
            <div className="container">
                <TitlePage
                    description="Navegue por nossas"
                    descriptionSpan="Categorias"

                />
                <div className="content-category">
                    {categories.map((category) => (
                        <Category
                            key={category.id}
                            image={category.icon}
                            text={category.categoryName}
                            link={category.slug}
                        />
                    ))}
                </div>
            </div>
        </section>


    )
}