# Angular mini Pokemon App using stateParams and Ui-Router

This app has 3 views

### Installing

After cloning the repo run NPM install to install the needed modules. If you need to install Node.js and NPM it can be downloaded here: [Node offical site](https://nodejs.org/en/download/).

### Gulp

Gulp is set up to compile and compress your HTML, SCSS, and JS. It will move it all into another folder called Dist that it will create and manage. When you run the node server it is set up already to use that folder for hosting. One major advantage of Gulp is that you dont have to keep adding files to be referenced in your index.html file, since you are compressing it all into one file just referencing the single Css file on the top and JS file on the bottom will catch them all.

To run gulp type 'gulp' in the root directory of the repo and it will run all the tasks found in the gulpfile.js and keep recompiling every time a change to a file has been created. If you create a new file you will need to stop gulp by pressing ctrl-c and then rerun gulp.

Gulp is also set up to compile your ES6 javascript to ES5, so feel free to use all the ES6 you want.

### SCSS

SCSS is a CSS pre-processed language, meaning gulp will go through and convert SCSS to CSS, because the browser does not understand SCSS. SCSS understands all CSS and some extra goodies, like variable creation and minor logic. If you want to learn more about SCSS you can visit there official site here: [SASS offical site](http://sass-lang.com/). (SASS and SCSS are very similar so don't be confused that the site SASS. The learn section will teach you both).

The File structure of SCSS is under the styles folder in public. There are 4 files outside the views folders, these are the files you can use to set up a lot of cool features. The most important one is the reference.scss file. you have to include the file path to every file you create and want to use. If you don't gulp will not add it to the bundle.css file.

All but the reference.scss file start their name with a _ character. This is a special set up SCSS uses, it is needed if you want to use the variables and mixins from the other documents. You dont need to include the _ when adding the file to the reference doc.
