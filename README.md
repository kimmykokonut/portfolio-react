# Portfolio
_by Kim Robinson_

![Diagram of components](/src/assets/diagram.drawio.svg)

## Technologies Used

* Html
* Typescript
* CSS
* Material UI Library
* Vite
* React
* npm 
* Git
* React Router

## A code review for Epicodus to update past Html/CSS portfolio to showcase acquired React skills

###  This app will allow a user to:
    -see my portfolio
    -navigate via React Router to other components to learn more about me

## Setup/Installation Requirements
_I'm not sure why you'd want to setup/install this as it is my portfolio using React. You are welcome to look at the code, follow steps below if you want to fork and install on your local computer._

### To view on gh-pages, click [HERE](https://kimmykokonut.github.io/portfolio-react)

1. Navigate to [my github repository](https://github.com/kimmykokonut/portfolio-react) for this project 

2. Click the `Fork` button and  you will be taken to a new page where you can give your repository a new name and description. Choose "create fork".

3. Click the `Code` button and copy the url for HTTPS.

4. On your local computer, create a working directory for my files and name appropriately.

5. On your terminal, type `$ git clone 'url'` (using the url from step 3.)

6. On your terminal, type `$ code .` to open in VS Code.  If you do not have VS Code Editor, you may download [here](https://code.visualstudio.com/)

7. Once in VS Code, open the terminal there and type 
`$ npm install` (to install the packages and dependencies). 

8.  Now you can access my code. 
* To launch the dev server, run `$ npm run dev`
* To build the project for production, run `$ npm run build`

## Known Bugs
* None known at this time

## License
MIT License. See license.md for further information

----------------------------
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list