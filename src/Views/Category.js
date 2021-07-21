import CategoryList from "../Components/CategoryList";
import { useParams } from 'react-router-dom';

function Category() {
    const { categoryId } = useParams();
    
    return (
        <div>
            <CategoryList categoryId={categoryId}/>
        </div>
    )
};

export default Category;
