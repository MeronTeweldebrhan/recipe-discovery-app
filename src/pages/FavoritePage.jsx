import { useFavorites } from "../context/FavoraiteContext";
import { Link } from "react-router-dom";

function FavoritePage() {
const { favorites,removeFavorite } = useFavorites();

 const handleRemoveFavorite = (idMeal) => { 
    removeFavorite(idMeal);
  };

  return (
    <div className="text-center">
      <h1>Favorite Recipes</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-11/12 mx-auto mt-9 mb-4 text-center rounded-lg">

 {favorites.map((meal)=>(
<div key={meal.idMeal} >
 
<Link to={`/recipe/${meal.idMeal}`}>
              <h2 className="text-xl font-semibold mb-2">{meal.strMeal}</h2>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded w-100 h-48 object-cover"
              />
            </Link>
<button
     onClick={() => handleRemoveFavorite(meal.idMeal)}
     className="mt-5 ms-3 bg-red-800 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded mb-6">
      
      Remove Favorites
    </button> 
  </div>

 ))}  
  
    </div>
    </div>
  );
}
export default FavoritePage;