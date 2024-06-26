// import logo from './logo.svg';
import './App.css';
import './output.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Favorites from './pages/favorites';
// import Details from './pages/details';
import RecipeLayout from './recipeInfo/RecipeLayout';
import Footer from './recipeInfo/footer';
import BackButton from './recipeInfo/backButton';

//Code for main app component
function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-pink text-gray-600 text-lg'>
        <Navbar />
        <BackButton />
        <Routes>
          <Route
            path='/'
            element={
              <Home />
            }
          />
          <Route
            path='/favorites'
            element={
              <Favorites />
            }
          />
          <Route
            path='/recipe/:id'
            element={
              <RecipeLayout />
            }
          />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
