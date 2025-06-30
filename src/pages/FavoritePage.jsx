import { useFavorites } from "../context/FavoraiteContext";
import { Link } from "react-router-dom";

function FavoritePage() {
const { favorites } = useFavorites();

//  const handleRemoveFavorites = () => { 
//     removeFavorite(favorites.idMeal);
//   };

  return (
    <div className="favorite-page">
      <h1>Favorite Recipes</h1>
    <div className="grid gap-4">

 {favorites.map((meal)=>(
<div key={meal.idMeal} >
<h2 >{meal.strMeal}</h2>
 {/* <button
     onClick={handleRemoveFavorites} 
     className="ms-3 bg-blue-800 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded mb-6">
      
      Remove Favorites
    </button>  */}
<Link to={`/recipe/${meal.idMeal}`}>
              <h2 className="text-xl font-semibold mb-2">{meal.strMeal}</h2>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded w-full h-48 object-cover"
              />
            </Link>

  </div>

 ))}  
  
    </div>
    </div>
  );
}
export default FavoritePage;