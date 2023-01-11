import DirectoryItem from '../directory-item/directory-item.component';
import './directory.style.scss'


const Directory = ({categories}) => (
    <div className="directory-container">
        {categories.map((el) => (
            <DirectoryItem category={el} key={el.id}/>
        ))}
    </div>
)

export default Directory;