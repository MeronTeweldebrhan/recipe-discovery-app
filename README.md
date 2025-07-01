# Recipe Discovery App

A modern React application for discovering, searching, and saving your favorite recipes. Built with React Router, Context API, and TheMealDB API.

## Features

- Browse recipes by category
- Search recipes by name or ingredient
- View detailed recipe information
- Add recipes to your favorites
- Responsive and clean UI with Tailwind CSS

## Screenshot
<img src="./src/assets/Screenshot 2025-06-30 201251.png" alt="screnshot"/>

## 📦 Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript 
- Custom `useLocalStorage`,`UseFetch` hooks

## Folder Structure
```
recipe-discovery-app/
  src/
    components/
      NavBar.jsx
    context/
      FavoratieContext.jsx
    hooks/
      UseFetch.js
      UseLocalStorage.js
    pages/
      CategoryPage.jsx
      FavoritePage.jsx
      HomePage.jsx
      RecipeDetailPage.jsx
      SearchResultPage.jsx
    App.jsx
    main.jsx
    index.css
  public/
    vite.svg
  package.json
  README.md
  ```
  ## Usage
  - npm install
  - npm run dev

  ## How It Works
- Uses TheMealDB API for recipe data
- Local storage keeps favorite recipes page .
- Routing and navigation with React Router 
- Favorites and search state managed with React Context and hooks
- Responsive design with Tailwind CSS

