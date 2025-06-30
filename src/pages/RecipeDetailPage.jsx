import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import { useFavorites } from "../context/FavoraiteContext";

function RecipeDetailPage() {
    const { id } = useParams();
    const {favorites,addFavorite,removeFavorite } = useFavorites();
const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);


if(error) return <h2>{error.message}</h2>


const meal =data?.meals[0]
if(loading || !meal ) return <h2 className="text-2xl text-center animate-pulse">Loading...</h2>

const isFavorite = favorites.some(fav => fav.idMeal === meal.idMeal);
const handleAddFavorites = () => {
    addFavorite(meal);
  };

  const handleRemoveFavorites = () => { 
    removeFavorite(meal.idMeal);
  };

  return (
  <div className="max-w-2xl mx-auto p-6">
    <h1 className="text-3xl font-bold mb-4">
      {meal.strMeal}
      <span>{isFavorite ? "⭐" : " "}</span>
      </h1>
    <img
      className="h-100 w-full rounded shadow mb-6"
      src={meal.strMealThumb}
      alt={meal.strMeal}
    />

    <button
     onClick={handleAddFavorites} 
     className="bg-green-800 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded mb-6">
      
      Add to Favorites
    </button>
<button
     onClick={handleRemoveFavorites} 
     className="ms-3 bg-red-800 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded mb-6">
      
      Remove Favorites
    </button>
    <div className="prose max-w-none text-gray-800">
      {meal.strInstructions}
    </div>
  </div>
);
}
export default RecipeDetailPage;