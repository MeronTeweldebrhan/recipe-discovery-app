import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
function CategoryPage() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    async function CategoryList() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setMeals(data.meals || []); // Use meals or an empty array if undefined
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error("  fetch Problem:", error);
      }
    }
    CategoryList();
  }, [categoryName]); // Fetch categories when idMeal changes

  useEffect(() => {
    if (meals.length > 0) {
      setLoading(false);
    }
  }, [meals]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-6">Category ↔ {categoryName}</h1>
      {loading ? (
        <p>Loading meals...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-11/12 mx-auto mt-4 mb-4 text-center rounded-lg">
          {meals.map((meal) => (
            <NavLink key={meal.idMeal} to={`/recipe/${meal.idMeal}`}>
            
              <img
                src={meal.strMealThumb}
                className="r"
                alt={meal.strMeal}
              />

              <h5 className="font-bold">{meal.strMeal}</h5>
            </NavLink>
          ))}
        </div>
      )}
     
    </div>
  );
}
export default CategoryPage;
