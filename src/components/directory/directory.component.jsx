import CategoryItem from '../category-item/category-item.component';
import './directory.style.scss'


const Directory = ({categories}) => (
    <div className="directory-container">
        {categories.map((el) => (
            <CategoryItem category={el} key={el.id}/>
        ))}
    </div>
)

export default Directory;