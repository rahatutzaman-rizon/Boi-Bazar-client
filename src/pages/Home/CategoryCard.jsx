import { Link } from "react-router-dom";


const CategoryCard = ({category}) => {
 
    return (
        <div>
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          <Link to={`/specific/${category}`}>
          
  
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{category}</div>
  </div>
          </Link>
</div>

        </div>
    );
};

export default CategoryCard;