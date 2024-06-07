class Recipe {
    constructor(id, title, image, ingredients, instructions) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}


let recipes = [
    new Recipe(
        "1",
        "Chocolate Chip Cookies",
        "images/choco_loco_cake_2.jpg",
        [
            "1 cup (2 sticks) unsalted butter, softened",
            "1 cup granulated sugar",
            "1 cup packed light brown sugar",
            "2 large eggs",
            "2 teaspoons pure vanilla extract",
            "2 ½ cups all-purpose flour",
            "1 teaspoon baking soda",
            "1 teaspoon salt",
            "2 cups semisweet chocolate chips",
        ],
        [
            "Preheat oven to 375 degrees F (190 degrees C).",
            "In a large bowl, cream together butter and sugars until light and fluffy.",
            "Beat in eggs one at a time, then stir in vanilla extract.",
            "In a separate bowl, whisk together flour, baking soda, and salt.",
            "Gradually add dry ingredients to wet ingredients, mixing until just combined.",
            "Stir in chocolate chips.",
            "Drop by rounded tablespoons onto ungreased baking sheets.",
            "Bake for 10-12 minutes, or until edges are golden brown.",
            "Let cool on baking sheets for a few minutes before transferring to a wire rack to cool completely.",
        ]
    ),

    new Recipe(
        "2",
        "Carrot Cake with Cream Cheese Frosting",
        "images/carrot_cake.jpg",
        [
            // Cake ingredients
            "1 ¾ cups all-purpose flour",
            "1 teaspoon baking soda",
            "1 teaspoon ground cinnamon",
            "½ teaspoon ground nutmeg",
            "¼ teaspoon salt",
            "3 cups grated carrots",
            "1 cup granulated sugar",
            "½ cup packed light brown sugar",
            "½ cup vegetable oil",
            "3 large eggs",
            "1 teaspoon pure vanilla extract",
            "8 oz cream cheese, softened",
            "½ cup unsalted butter, softened",
            "3 cups powdered sugar",
            "1 teaspoon vanilla extract",
        ],
        [
            // Cake instructions
            "Preheat oven to 350 degrees F (175 degrees C). Grease and flour two 9-inch round cake pans.",
            "In a medium bowl, whisk together flour, baking soda, cinnamon, nutmeg, and salt.",
            "In a large bowl, whisk together carrots, sugars, and oil.",
            "Beat in eggs one at a time, then stir in vanilla extract.",
            "Gradually add dry ingredients to wet ingredients, mixing until just combined.",
            "Pour batter evenly into prepared pans.",
            "Bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean.",
            "Let cakes cool in pans for 10 minutes, then transfer to a wire rack to cool completely.",

            // Cream cheese frosting instructions
            "In a large bowl, cream together cream cheese and butter until light and fluffy.",
            "Gradually add powdered sugar, beating until smooth.",
            "Stir in vanilla extract.",
        ]
    ),
    new Recipe(
        3,
        "Strawberry Cake",
        "images/naked_strawberry_shortcake_1_1.jpg",
        [
            // Cake ingredients
            "1 ½ cups all-purpose flour",
            "1 ½ teaspoons baking powder",
            "¼ teaspoon salt",
            "½ cup (1 stick) unsalted butter, softened",
            "1 ¾ cups granulated sugar, divided",
            "2 large eggs",
            "1 teaspoon pure vanilla extract",
            "½ cup milk",
            "1 ½ pounds fresh strawberries, hulled and sliced",
            "⅓ cup granulated sugar",
            "1 tablespoon cornstarch",
            "1 cup powdered sugar",
            "2-3 tablespoons milk",
            "Fresh strawberries for decoration (optional)",
        ],
        [
            "Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x13 inch baking pan.",
            "In a medium bowl, combine sliced strawberries, ⅓ cup sugar, and cornstarch. Toss to coat and set aside.",
            "In a large bowl, cream together butter and 1 ½ cups of sugar until light and fluffy. Beat in eggs one at a time, then stir in vanilla extract.",
            "In a separate bowl, whisk together flour, baking powder, and salt.",
            "Alternately add the dry ingredients and milk to the wet ingredients, beginning and ending with the dry ingredients. Mix until just combined.",
            "Pour half of the batter into the prepared pan. Spread the strawberry filling evenly over the batter. Then, pour the remaining batter on top of the filling.",
            "Bake for 50-60 minutes, or until a toothpick inserted into the center comes out clean.",
            "While the cake cools, prepare the glaze (optional) by whisking together powdered sugar and milk until smooth. The consistency should be thick but pourable.",
            "Let the cake cool completely in the pan before frosting or glazing. If using, drizzle the strawberry glaze over the cooled cake and decorate with fresh strawberries (optional).",
        ]
    ),


    new Recipe(
        4,
        "Lemon Cake",
        "https://images.example.com/lemon_cake.jpg",
        [
            // Cake ingredients
            "3 cups cake flour",
            "2 teaspoons baking powder",
            "1/2 teaspoon baking soda",
            "1/2 teaspoon salt",
            "1 cup (2 sticks) unsalted butter, at room temperature",
            "2 cups granulated sugar",
            "1 tablespoon lemon zest",
            "2 eggs, at room temperature",
            "2 egg whites, at room temperature",
            "1/3 cup fresh lemon juice",
            "1 cup buttermilk, at room temperature",
            "1-3 drops yellow food coloring (optional)",

            // Lemon glaze ingredients
            "1 cup powdered sugar",
            "2-3 tablespoons fresh lemon juice",
        ],
        [
            //Cake instructions
            "Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x13 inch baking pan.",
            "In a medium bowl, whisk together flour, baking powder, baking soda, and salt.",
            "In a large bowl, cream together butter and sugar until light and fluffy. Beat in lemon zest.",
            "Add eggs one at a time, then stir in buttermilk and lemon juice. If using, add a few drops of yellow food coloring.",
            "Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
            "Pour batter into the prepared pan.",
            "Bake for 50-60 minutes, or until a toothpick inserted into the center comes out clean.",
            "Let the cake cool in the pan for 10 minutes, then transfer it to a wire rack to cool completely.",
            "In a small bowl, whisk together powdered sugar and lemon juice until smooth. Drizzle the glaze over the cooled cake.",
        ]
    ),

    new Recipe(
        5,
        "Red Velvet",
        "",
        [
            // Cake ingredients
            "175 g butter, softened",
            "175 g caster sugar",
            "3 eggs",
            "175 g self-raising flour",
            "1 tsp baking powder",
            "3 tbsp drinking yoghurt",
            "2 tbsp caramel essence",
            "100 g butter, softened",
            "200-250 g icing sugar",
            "Caramel essence (optional)",
            "1-2 tbsp milk",

            // Decoration
            "Mini lollipops", // Adjust quantity based on cupcake yield
        ],
        [
            // Cake instructions
            "Preheat oven to 180°C (350°F). Line two cupcake trays with cupcake cases.",
            "Cream butter and sugar together until light and fluffy.",
            "Gradually beat in eggs one at a time, then stir in flour, baking powder, and yoghurt.",
            "Add caramel essence and mix well until combined.",
            "Divide the mixture evenly between the cupcake cases.",
            "Bake for 20-25 minutes, or until a skewer inserted into the center comes out clean.",
            "Cool cupcakes in the tin for 5 minutes, then transfer to a wire rack to cool completely.",

            // Icing instructions
            "Once cupcakes are cool, prepare the icing by creaming butter until light and creamy.",
            "Gradually add icing sugar, beating well after each addition.",
            "If using, add a touch of caramel essence for extra toffee flavour.",
            "Add milk a tablespoon at a time until you reach a thick but spreadable consistency.",

            // Decoration instructions
            "Spread icing over the cooled cupcakes.",
            "Insert three mini lollipops into each cupcake to create a 'balloon' effect.",
            "Serve and enjoy!",
        ]
    ),

    new Recipe(
        6,
        "Red Velvet Cake",
        "**Replace with your image URL**", // Update with the actual image URL
        [
            // Cake ingredients
            "1 ¾ cups all-purpose flour",
            "1 teaspoon baking soda",
            "½ teaspoon salt",
            "1 cup (2 sticks) unsalted butter, softened",
            "1 ½ cups granulated sugar",
            "2 large eggs",
            "1 teaspoon pure vanilla extract",
            "1 cup buttermilk",
            "1 tablespoon cocoa powder",
            "1 tablespoon red food coloring",
            "1 tablespoon white vinegar",
            "8 oz cream cheese, softened",
            "½ cup unsalted butter, softened",
            "3 cups powdered sugar",
            "1 teaspoon pure vanilla extract",
        ],
        [
            "Preheat oven to 350 degrees F (175 degrees C). Grease and flour three 8-inch round cake pans.",
            "In a medium bowl, whisk together flour, baking soda, and salt.",
            "In a large bowl, cream together butter and sugar until light and fluffy. Beat in eggs one at a time, then stir in vanilla extract.",
            "In a separate small bowl, whisk together buttermilk, cocoa powder, and red food coloring.",
            "Alternately add the dry ingredients and buttermilk mixture to the wet ingredients, beginning and ending with the dry ingredients. Mix until just combined.",
            "In a small bowl, combine white vinegar and baking soda. The mixture will fizz. Quickly stir it into the cake batter.",
            "Divide the batter evenly between the prepared pans. Bake for 25-30 minutes, or until a toothpick inserted into the center comes out clean.",
            "Let the cakes cool in the pans for 10 minutes, then transfer them to a wire rack to cool completely.",
            "In a large bowl, cream together cream cheese and butter until light and fluffy. Beat in powdered sugar one cup at a time, until smooth and creamy. Stir in vanilla extract.",
        ]
    )
]

export default recipes;
