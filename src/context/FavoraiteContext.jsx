/* eslint-disable react-refresh/only-export-components */
import useLocalStorage from "../hooks/UseLocalStorage";
import  { createContext, useContext } from "react";


export const FavoriteContext=createContext();

export  function FavoriteProvider({children}) {
const [favorites,setFavorites]=useLocalStorage("fav",[])


//
const addFavorite = (meal) => {
  if (favorites.some(fav => fav.idMeal === meal.idMeal)) {
    alert("Recipe already available");
    return;
  }
  setFavorites([...favorites, meal]);
};


const removeFavorite = (idMeal) => {
  setFavorites(favorites.filter((favorite) => favorite.idMeal !== idMeal));
};



return(
<FavoriteContext.Provider value={{
    favorites,addFavorite,removeFavorite
}}>{children}</FavoriteContext.Provider>

)
}

export const useFavorites =()=>useContext(FavoriteContext)