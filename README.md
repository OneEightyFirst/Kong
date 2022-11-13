
<h2 align="center">Kong assessment</h2>

<p align="center">
  <a href="https://github.com/shaminmeerankutty/webpack-sass-bootstrap-boilerplate/blob/master/LICENSE.md">
    <img alt="License" src="https://img.shields.io/github/license/mashape/apistatus.svg"></a>
  <a href="https://webpack.js.org">
    <img alt="Webpack" src="https://img.shields.io/badge/webpack-v4.27.0-0072b8.svg"></a>
  <a href="http://getbootstrap.com/">
    <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-v4.1.3-563d7c.svg"></a>
  <a href="https://sass-lang.com">
    <img alt="Sass" src="https://img.shields.io/badge/node--sass-v4.10.0-df5a9c.svg"></a>
  <a href="https://jquery.com/">
    <img alt="jQuery" src="https://img.shields.io/badge/jquery-v3.3.1-ffa200.svg"></a>
  <a href="">
    <img alt="Webpack Dev Server" src="https://img.shields.io/badge/webpack--dev--server-live--reloading-orange.svg"></a>
</p>

<p align="center">
  <em>
  Sass
  · Babel
  · Bootstrap
  · Webpack
  · Webpack Dev Server
  · jQuery 3.5.1
  · Popper.js 
  </em>
</p>

## Getting Started

### Requirements
* Please make sure you have NodeJS installed, as this contains `npm`, which is necessary
for installing dependencies, starting the appropriate scripts, and building your web project.

### Quick Start
Clone the repo:

    git clone https://github.com/OneEightyFirst/Kong.git

Install all packages and dependencies required for this project:

    npm install
    
Start the development environment (then, navigate to http://localhost:8080):

    npm start
 
Then, open a browser and navigate to: http://localhost:8080/ 
    
Building files can be done as follows:

    npm run build

### How To Use
* Add your HTML files by inserting or including them in the `src` directory (By default `index.html` is added to your `src` directory, feel free to edit it and 
experiment with the changes live.)
    
    * Make sure you restart development server after adding new HTML files

* Add images to your `src/assets` folder.
* Add sass (SCSS) files to `src/scss` folder.
  * Make sure you import the scss file in `main.scss` 
    
```sass
    @import "filename";
```


### Considerations, Assumptions, and Trade-Offs
While working on this I took several liberties, those included: 
* Changing the noted margin/padding from the mockup so that all spacing was more consistant.
* Changed some Header tags to create a more accurate higherarchy
* Created a set of buttons
* Having never used the Media Object contstruct I opted to remove it and used a process I was more familiar with in order to guarantee the result. 
* Updating the break points to match what is used on KongHQ.com. 
* Added in a script for an easier to use responsive background image.
  * Note: This was more difficult than it should have been due to my lack of knowledge about Webpack and was the primary time sink. Knowing that the environtment that this would be traditionally built it would have code copied and pasted, having a way to edit background images w/out having to update css means there are fewer inline css updates. Once I become more familiar with Webpack, I feel I can make this process more efficient. 

Since the footer was not mentioned in the instructions, I removed the boiler plate and put a clean and simple slightly branded version in its place. 






# Licence
Code released under the [MIT License](LICENSE.md).
# Kong
