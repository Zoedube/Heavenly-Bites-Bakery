import React from 'react';
import recipes from './recipeInfo';

const RecipeLayout = (id) => {
    const recipe = getRecipe(id);
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <img src={recipe.image} alt={recipe.title} />
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
                    <p className="mb-4">{recipe.description}</p>

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
    return recipes[0]
}

export default RecipeLayout;
