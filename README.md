# Portfolio Site
![Part of the Udacity Full-Stack Web Development Nanodegree](https://img.shields.io/badge/Udacity-Full--Stack%20Web%20Developer%20Nanodegree-02b3e4.svg)
---------------------
Personal portfolio website using bootstrap for responsive design.

How to use:
============
* Clone the repo: ``` https://github.com/SteadBytes/portfolio-site.git ```
  * Alternatively [download]("https://github.com/SteadBytes/portfolio-site/archive/master.zip") and extract zip

## Requirements
* Web Browser (Supports latest versions of chrome, firefox and edge)
* Bootstrap 4 (CDN links are included within ```index.html```)
* Generating new image assets requires:
  * [node.js](https://nodejs.org/en/)
  * [npm](https://www.npmjs.com/)
  * [gulp](http://gulpjs.com/)
  * [gulp-responsive](https://github.com/mahnunchik/gulp-responsive)]
  * [sharp](https://github.com/lovell/sharp)
  * [GraphicsMagick](http://www.graphicsmagick.org/)
  * [jQuery](https://jquery.com/)

## Responsive Asset Generation
* ```gulpfile.js``` contains a script to create different sizes/resolutions of images files.
* ```images_source``` directory contains source images to be resized
* ```images_source\feature``` contains source images specifically for use in the feature section of the webpage. The gulpfile treats these differently to the other images.
* Run ```gulp``` from the project root to generate images.
* An ```images``` folder will be generated containing renamed and resized image files.
  * The images will be renamed with appropriate suffixes i.e. 'image_name-1920_2x.jpg'

## File information
* ```index.html``` is the webpage entry point
* ```styles.css``` contains custom css styles
* ```gulpfile.js``` Uses gulp-responsive to generate files for responsive images
