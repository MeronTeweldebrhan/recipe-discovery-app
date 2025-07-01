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
    <div >
       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-11/12 mx-auto mt-4 mb-4 text-center rounded-lg">
        {data.meals.map((meal) => (
          <li key={meal.idMeal} >
            
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