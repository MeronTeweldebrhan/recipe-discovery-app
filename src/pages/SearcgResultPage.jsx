import useFetch from "../hooks/UseFetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SearchResultPage() {

const { searchTerm } = useParams();
console.log(searchTerm)
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);

  if(error) return <h2>{error.message}</h2>

if (loading) {
    return <h2 className="text-2xl text-center animate-pulse">Loading...</h2>;
  }


if (!data || !data.meals || data.meals.length === 0) {
    return <h2 className="text-2xl text-center animate-pulse">No results found for "{searchTerm}"</h2>;
  }
  return (  
    <div>
       <ul>
        {data.meals.map((meal) => (
          <li key={meal.idMeal} className="font-bold">
            {/* {meal.strMeal} */}
             <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`}>
              <h2 className="text-xl font-bold">{meal.strMeal}</h2><hr/>
              <img src= {meal.strMealThumb} />
            </Link>
          </li>
          
        ))}
      </ul>
        
    </div>
    );
}
export default SearchResultPage;