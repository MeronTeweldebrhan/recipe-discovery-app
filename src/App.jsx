import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import FavoritePage from './pages/FavoritePage'
import NavBar from './components/NavBar'


function App() {


  return (

    <div>
      <h1>Recipe Discovery App</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
    
    </div>
  )
}

export default App
