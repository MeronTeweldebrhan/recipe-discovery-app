import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import FavoritePage from './pages/FavoritePage'
import NavBar from './components/NavBar'
import RecipeDetailPage from './pages/RecipeDetailPage'
import SearchResultPage from './pages/SearchResultPage'
import {FavoriteProvider}  from './context/FavoraiteContext'


function App() {


  return (

    <div>
    <FavoriteProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/search/:searchTerm"element={<SearchResultPage/>}/>
        </Routes>
    </FavoriteProvider>
    </div>
  )
}

export default App
