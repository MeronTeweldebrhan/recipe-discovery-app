import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data.categories);
        console.log(data);
      } catch (error) {
        console.error(" Fetch error:", error);
      } finally{
        setLoading(false)
      }
    }
    fetchCategories();
  }, []); // Empty dependency array means this effect runs once when the component mounts



  return (
    <li>
      <h1 className="text-3xl font-bold text-center mt-4">
        Welcome to the Recipe Discovery App
      </h1>
      {loading ? (
        <div className="text-center mt-4">
          <p>Loading recipes...</p>
        </div>
      ) : (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-11/12 mx-auto mt-4 mb-4 text-center rounded-lg">
          {categories.length > 0 &&
            categories.map((category) => (
              <NavLink key={category.idCategory} to={`/category/${category.strCategory}`}>
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                />
                <h5 className="font-bold">{category.strCategory}</h5>
                
              </NavLink>
            ))}
        </div>
      )}
    </li>
  );
}

export default HomePage;
