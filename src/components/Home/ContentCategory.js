import { Category } from './Category'
import { categoryIcons } from '../../data'
import { TitlePage } from '../TitlePage'

export function ContentCategory() {
    return (
        <div className="container">
            <TitlePage
                description="Navegue por nossas"
                descriptionSpan="Categorias"
                left
            />
            <div className="content-category">
                {categoryIcons.map((item, index) => (
                    <Category
                        key={index}
                        image={item.image}
                        text={item.text}
                        link={item.link}
                    />
                ))}
            </div>
        </div>

    )
}