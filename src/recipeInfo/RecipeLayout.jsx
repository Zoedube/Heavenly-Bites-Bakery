import React from 'react';
import recipes from './recipeInfo';
import { useParams } from 'react-router-dom';

const RecipeLayout = () => {
    const { id } = useParams();
    const recipe = getRecipe(id);
    return (
        <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full object-contain rounded-md"
          />
        </div>
        <div className="bg-[#F8EAEF] rounded-md px-4 py-4" style={{ marginBottom: '20px' }}>
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="mb-4">{recipe.description}</p>
          <div className="flex flex-wrap mb-4">
            <div className="bg-[#C3C6D5] text-white px-4 py-2 rounded-md flex flex-wrap">
              <p className="text-gray-700 mr-4">Prep Time: {recipe.prepTime}</p>
              <p className="text-gray-700 mr-4">Cook Time: {recipe.cookTime}</p>
              <p className="text-gray-700">Servings: {recipe.servings}</p>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-2">Ingredients</h2>
          <ul className="list-disc ml-4">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mb-2">Instructions</h2>
          <ol className="list-decimal ml-4">
            {recipe.instructions.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

function getRecipe(id){
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        if (recipe.id === id) {
            return recipe;
        }
    }
    return recipes[0]
}

export default RecipeLayout;
