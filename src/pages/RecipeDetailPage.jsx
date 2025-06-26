import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";

function RecipeDetailPage() {
    const {id} =useParams()
const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);


if(error) return <h2>{error.message}</h2>


const meal =data?.meals[0]
if(loading || !meal ) return <h2 className="text-5xl animate-bounce"> loading...</h2>

  return (
    <div>
        
        {meal.strInstructions}
        <img className="w-50 rounded flex justify-center" src={meal.strMealThumb}/>
<button className="bg-"> Add to Fav</button>
    </div>
    
  );
}
export default RecipeDetailPage;