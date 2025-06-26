import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import FavoritePage from './pages/FavoritePage'
import NavBar from './components/NavBar'
import RecipeDetailPage from './pages/RecipeDetailPage'


function App() {


  return (

    <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
    
    </div>
  )
}

export default App
