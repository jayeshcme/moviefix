# About Moviefix App.
Get the top 20 movies of each year based on popularity. Scroll up to fetch the previous year's movie and scroll down to get the next year's movie.

## Requirements Covered
1. Developed with React and Typescript bootstraped with CRA (Create React App).
2. Fetch movies when scrolling up and down from TMDB discover/movies API.
3. Custom component for infinite and smooth scrolling. No external library used. (Intersection Observer API) (Web and Responsive)
4. Getting the movies from TMDB Database in descending order of popularity to be shown in list year wise. (Web and Responsive)
5. Reusable code by creating components.
6. No UI library used. Custom CSS. Web and Responsive both.
7. Movie list currently Poster Image and name of the movie year wise.
8. Genre filter UI created with fetching data from TMDB genre API. Multi selection added.

## Requirements/Improvements for future.
1. Show more movie details like cast, genre, director and description in the card.
2. Filter the movies based on the genre selected.
3. Optimize DOM elements on page to as user scrolling is very fast and get movies accrodingly.
4. Search bar to search for movies.

# Getting started.

## Prerequisites
1. NPM & Node.js
2. Git

### Run the project. (Prerequisites already installed)
1. Clone the repository using the command
```
git clone https://github.com/jayeshcme/moviefix.git
```

2. Navigate to project directory
```cd moviefix```

4. Install Dependencies
```npm i```

5. Start the development server
```npm start```


## Prerequisites not installed. 
### Installing Prerequisites (NPM & Nodejs)
[Click here to download and install npm ](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

OR Follow the below steps

1. Installing NodeJs and NPM - The only way you can install NodeJS is through their official website. Installing NodeJS will also automatically download NPM on your machine. 
[Click here to download the nodejs version.](https://nodejs.org/en/download)
2. Once you’ve downloaded NodeJS through their website, you should find the downloaded file inside of your downloads folder. Simply open this file by double-clicking on it and you will be prompted with a pop-up containing info about the NodeJS and NPM installation process.
3. Simply go through the next sections in this pop-up, and you will be prompted with this message once you get to the “Installation Type” section.
4. Click on “Install”, or if you want to change the install location, click on “Change Install Location”. This will start the NodeJS and NPM installation process. Once finished, you will be prompted with a final message displaying the location where NodeJS and NPM are installed.
5. As stated in the pop-up, to have access to NodeJS and NPM from your project’s directory, make sure that “/usr/local/bin” is in your project’s “$PATH”. To add “/usr/local/bin” to your “$PATH” on MacOS, run the following command in your project’s terminal: You can then click “Close” to close the pop-up.
export PATH=/usr/local/bin:$PATH
6. To check if both NodeJS and NPM were installed successfully, in your project’s terminal, run:
node --version
and 
npm --version
This will return your NodeJS and NPM versions.

### Installing Prerequisites (Git)
[Document to follow to install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Once prerquisites are installed follow the steps in Run the Project section.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
