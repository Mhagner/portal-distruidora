import { Category } from './Category'
/* import { categories } from '../../data' */
import { TitlePage } from '../TitlePage'

export function ContentCategory({ categories }) {
    
    return (
        <section className="content__category content__category--grey">
            <div className="container">
                <TitlePage
                    description="Navegue por nossas"
                    descriptionSpan="Categorias"

                />
                <div className="content-category">
                  
                    {categories.map((category) => {
                        const [icon] = category.icon
                        return (
                            <Category
                                key={category.id}
                                image={icon.url}
                                text={category.categoryName}
                                link={category.slug}
                            />
                        )
                    })}
                </div>
            </div>
        </section>


    )
}