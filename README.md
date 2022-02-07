# Things To Do Today

## Project Overview

The aim of this project was to design and build a simple to-do list app, which is one of the most classic apps that beginner React developers learn to build!

After I had acheived the basic functionality of adding and removing list items, I decided to include the additional functionality of crossing items on double click and the ability to edit list items when clicking the edit icon.

For this project I used create-react-app to get started.

This project helped me to practice the way React works and get used to using state to manage changes in the app. It also helped to cememnt the idea that state cannot be mutated along with many other basic principles of React.

The hooks I used in this project were useState, useEffect and useRef. There was no need to use routing or context for this project.

### How can this app be extended

One idea I had to extend this app is to add the ability to drag and drop the list items so the user can re-order them by order of importance. I found a library called react-beautiful-dnd that can help with this and when I have time I will look into implementing this.

## Planning My App

I used Figma to plan the components, state and design of my app. You can view the figma file by [clicking here](https://www.figma.com/file/F1nXZLL4mvesFytpwsRuHX/Things-To-Do-Today?node-id=0%3A1).

## Run this App locally

In the project directory, you can run:

### `npm start`

This runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

## Dependencies

I used npm to install the react-icons and lottie-web packages. React-icons allowed me to use the font awesome icons as components and the lottie-web packaged enabled me to display the lottie animation with the help of useEffect and useRef.
