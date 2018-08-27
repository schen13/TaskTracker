# CHORE_APP_NAME
### Background
CHORE_APP_NAME is an iOS mobile application that aims to delegate responsibilities between housemates and provide an outlet to express comments and suggestions to one another anonymously. Living with others can be difficult, but CHORE_APP_NAME makes it easy to ensure everyone does their part.
### Functionality & MVP
With this application, users will be able to:
+ Create a list of weekly responsibilities that can be randomly delegated
+ Participate in an anonymous group chat and post photos to highlight certain issues
+ Private messaging between members in your house
+ Track stats and visualize the distribution of responsibilities
+ Chat with other neighbors living near or around you

Technologies & Technical Challenges
+ MERN stack - MongoDB, Express, React, Node
+ HTML/CSS
+ mLab/AWS cloud hosting
+ D3
+ Web-sockets

Wireframes

![frame2](https://github.com/schen13/Flex_Project/blob/master/frame2.png)

![frame1](https://github.com/schen13/Flex_Project/blob/master/frame1.png)


This application will be implemented using the MERN stack (MongoDB, Express.js, React Native, Node.js) for a dynamic and user oriented experience. Express.js and Node.js on the back-end permits easy data storage and fetching through custom APIs routes. Additionally, MongoDB and Mongoose allows for a versatile interface with the database by extracting out the complex SQL document-style requirements. React Native serves as the front-end and enables a modular and unidirectional data flow to enhance the speed of our application.

In addition to the manifest.json and package.json files, there will be two scripts:
+ content.js: will contain the logic for listing and delegating responsibilities 
+ options.js: will contain the logic for changing the user's settings

There will also be two HTML files to display the content:
+ new_style.css: the file containing the styling rules for recoloring
+ options.html: the file that renders the Settings menu for the user

The primary technical challenges will be:
+ Determining a simplified group experience to make delegation of tasks and chores easy
+ Creating and managing web-sockets for seamless peer to peer chat
+ Intuitive visual breakdown of responsibilities

Things we accomplished this weekend:

+ Went over tutorials for the MERN stack and familiarize ourselves with how to build an application
+ The team also started the skeleton of the project and started the developmental version of the application

Group Members & Work Breakdown

Our group consists of four members: Brian Jeong, Eric Tran, Michael Park and Steven Chen.

Brian’s primary responsibilities will be:
+ Primary app function and logic

Eric’s primary responsibilities will be:
+ Frontend and UI/UX

Michael’s primary responsibilities will be:
+ Researching and setting up the anonymous chat group function with web-sockets 
+ Producing the new HTML file with new colors and styles
+ Implementing photo upload ability with a simple draw function to edit pictures 

Steven’s primary responsibilities will be:
+ Models and Middleware
+ Writing the repo's README, complete with screenshots and code snippets
