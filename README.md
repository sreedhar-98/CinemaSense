rafce --> to generate the html template for a component.



NetflixGPT:

1. npx create-react-app netflix-gpt
2. Configure Tailwind CSS
   (a) Install tailwindcss via npm, and then run the init command to generate your tailwind.config.js file.

   Commands:
   npm install -D tailwindcss
   npx tailwindcss init

   (b) Add the paths to all of your template files in your tailwind.config.js file.
   Commands:
   /** @type {import('tailwindcss').Config} \*/
   module.exports = {
   content: [
   "./src/**/\*.{js,jsx,ts,tsx}",
   ],
   theme: {
   extend: {},
   },
   plugins: [],
   }

   (c) Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
   Commands:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

3. Features:
    - Browse Page(if logged in)
        -Header
        -Main Movie
            -Trailer in Background
            -Title and Description 
            - Movie Suggestions(Horizontally scrollable)
    - Login and create account navigation(if not logged in)

4. Setup Routing
    - npm i -D react-router-dom

5. Build a login Form
